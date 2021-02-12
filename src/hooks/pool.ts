import { ethers } from 'ethers'
import { connect } from './providers'
import { contracts } from './constants'

const [, provider, wallet] = connect()
const abi = ['function totalSupply() public view returns (uint256)','function poolValue() public view returns (uint256)','event Borrow(address borrower, uint256 amount, uint256 fee)']
const tusdAbi = ["event Transfer(address indexed src, address indexed dst, uint val)",'event Funded(address indexed loanToken, uint256 amount)','function totalSupply() public view returns (uint256)','event LoanTokenCreated(address contractAddress)']
const curveGaugeAbi = ['event Deposit(address indexed provider, uint256 value)','event Withdraw(address indexed provider, uint256 value)']
const tfi = new ethers.Contract(contracts.tfi, abi, wallet) 
const tusd = new ethers.Contract(contracts.tusd, tusdAbi, wallet) 
const curveGauge = new ethers.Contract(contracts.curveGauge, curveGaugeAbi, wallet) 
const loan1 = new ethers.Contract(contracts.loan1, tusdAbi, wallet) 
const loan2 = new ethers.Contract(contracts.loan2, tusdAbi, wallet) 
const lender = new ethers.Contract(contracts.lender, tusdAbi, wallet) 

export const getTfiTotalSupply = async () => {
    return await tfi.totalSupply()/1e18
}

export const getPoolValue = async () => {
    return await tfi.poolValue()/1e18
}


const getEventsHelper = async (topic:string,index:number) => {
    let result = []
    let total = 0
    const logInfo = {address: contracts.tfi, topics:[ethers.utils.id(topic)], fromBlock: 0, toBlock: "latest"}    
    const res = await provider.getLogs(logInfo)
    for(let i=0;i<res.length;i++){
        const value = parseInt(res[i]['data'].substr(2+64*index,64),16)/1e18
        const valueNum = Number(value.toFixed(0))
        // if(topic === '1Joined(address,uint256,uint256)'){
        //     console.log('default value: ' + value)
        //     console.log('1:' + parseInt(res[i]['data'].substr(2,64),16)/1e18)
        //     console.log('2:' + parseInt(res[i]['data'].substr(66,64),16)/1e18)
        //     console.log('3:' + parseInt(res[i]['data'].substr(129,64),16)/1e18)
        //     console.log('topics:'+res[i].topics)
        // }
        total += valueNum
        result.push({total: total,
                    marginChange: valueNum,
                    blockNumber: res[i]['blockNumber']})
    }
    return result
}
const mergeArray = (array: any[]) => {
    // console.log("incoming array", array);
    
    
    array.sort((a,b) => (a.blockNumber > b.blockNumber) ? 1 : ((b.blockNumber > a.blockNumber) ? -1 : 0)); 
    for(let i=1;i<array.length;i++){
        array[i].total = array[i-1].total + array[i].marginChange
        if(array[i].blockNumber === array[i-1].blockNumber){
            array.splice(i-1,1)
            i--
        }
        
    }
    // console.log("ARRAY", array);
    
    return array
}

export const getPoolJoined = async () => {
    return getEventsHelper('Joined(address,uint256,uint256)',0)
}
export const getPoolExited = async () => {
    const array = await getEventsHelper('Exited(address,uint256)',0)
    array.forEach(element => {
      element.marginChange *= -1                       //turn into nagative value
    })
    return array
}

export const getFlushed = async () => {
    return getEventsHelper('Flushed(uint256)',0)
}

export const getPulled = async () => {
    const array = await getEventsHelper('Pulled(uint256)',0)
    array.forEach(element => {
        element.marginChange *= -1                       //turn into nagative value
      })
    return array
}

export const getPoolChart = async () => {
    // const array = [...await getPoolJoined(),...await getPoolExited()]
    const loanTokens = await loanTokenFinder()
    const address = '0x94a86455210db3d49794861579c55b30940111b4';
    
    const loanOutFilter = {address: address, topics:loan1.filters.Transfer(contracts.lender).topics, fromBlock: 0, toBlock: "latest"}    
    const loanInFilter = {address: address, topics:loan1.filters.Transfer(null,contracts.lender).topics, fromBlock: 0, toBlock: "latest"}
    
    console.log()
    return mergeArray([...await loanTokenHelper(address),...await eventHelper(loanOutFilter,-1),...await eventHelper(loanInFilter,1)])
    const array = await eventHelper(loanInFilter,1)
    console.log(array)
    return array
}

export const getNetCurve = async () => {
    const array = [...await getFlushed(),...await getPulled()]
    return mergeArray(array)
}

export const getCombined = async () => {
    const pool = await getPoolChart()
    const curve = await getNetCurve()

    return [...pool,...curve]

}


const processArray = (array: any[], name: string) => {
    // console.log("processArray", array);
    
    let newArray = []
    for(let i=1;i<array.length;i++){
        newArray.push({
            data:{
                name:name,
                balance:array[i].total.toFixed(0),
                timestamp: array[i].timestamp
            },
            blockNumber:array[i].blockNumber
        })
    }
    return newArray
}

const processArray2 = (array: any[], name: string) => {
    // console.log("processArray", array);
    
    let newArray = []
    for(let i=1;i<array.length;i++){
        for(let j = 1; j < array[i].length; j++) {
            newArray.push({data:{
                name:name,
                timestamp: array[i][j].timestamp,
                balance:array[i][j].total.toFixed(0)},
                blockNumber:array[i][j].blockNumber,
                timestamp: array[i][j].timestamp
            })
        }
    }
    return newArray;
}

const mergeArrayNew = (array: any[]) => {
    let newArray:any = []
    // console.log(array)
    array.sort((a,b) => (a.blockNumber > b.blockNumber) ? 1 : ((b.blockNumber > a.blockNumber) ? -1 : 0)); 
    if(array[0].data.name === 'TUSD'){
        newArray[0] = {TUSD:array[0].data.balance,yCRV:0,Loan1:0,Loan2:0,blockNumber:array[0].blockNumber, timestamp: array[0].data.timestamp}
    }else if(array[0].data.name === 'yCRV'){
        newArray[0] = {TUSD:0,yCRV:array[0].data.balance,Loan1:0,Loan2:0,blockNumber:array[0].blockNumber, timestamp: array[0].data.timestamp}
    }else if(array[0].data.name === 'Loan1'){
        newArray[0] = {TUSD:0,yCRV:0,Loan1:array[0].data.balance,Loan2:0,blockNumber:array[0].blockNumber, timestamp: array[0].data.timestamp}
    }
    else{
        newArray[0] = {TUSD:0,yCRV:0,Loan1:0,Loan2:array[0].data.balance,blockNumber:array[0].blockNumber, timestamp: array[0].data.timestamp}
    }
    
    for(let i=1;i<array.length;i++){
        if(array[i].data.name === 'TUSD'){
            newArray.push({TUSD:array[i].data.balance,yCRV:newArray[i-1].yCRV,Loan1:newArray[i-1].Loan1,Loan2:newArray[i-1].Loan2,blockNumber:array[i].blockNumber, timestamp: array[i].data.timestamp})
        }
        if(array[i].data.name === 'yCRV'){
            newArray.push({TUSD:newArray[i-1].TUSD,yCRV:array[i].data.balance,Loan1:newArray[i-1].Loan1,Loan2:newArray[i-1].Loan2,blockNumber:array[i].blockNumber, timestamp: array[i].data.timestamp})
        }
        if(array[i].data.name === 'Loan1'){
            newArray.push({TUSD:newArray[i-1].TUSD,yCRV:newArray[i-1].yCRV,Loan1:array[i].data.balance,Loan2:newArray[i-1].Loan2,blockNumber:array[i].blockNumber, timestamp: array[i].data.timestamp})
        }
        if(array[i].data.name === 'Loan2'){
            newArray.push({TUSD:newArray[i-1].TUSD,yCRV:newArray[i-1].yCRV,Loan1:newArray[i-1].Loan1,Loan2:array[i].data.balance,blockNumber:array[i].blockNumber, timestamp: array[i].data.timestamp})
        }
    }
    
    return newArray
}

export const TusdHistoricalBal = async () => {

    
    const tusdOutFilter = {address: contracts.tusd, topics:tusd.filters.Transfer(contracts.tfi).topics, fromBlock: 0, toBlock: "latest"}    
    const tusdInFilter = {address: contracts.tusd, topics:tusd.filters.Transfer(null,contracts.tfi).topics, fromBlock: 0, toBlock: "latest"}    

    const curveOutFilter = {address: contracts.curveGauge, topics:curveGauge.filters.Withdraw(contracts.tfi).topics, fromBlock: 0, toBlock: "latest"}    
    const curveInFilter = {address: contracts.curveGauge, topics:curveGauge.filters.Deposit(contracts.tfi).topics, fromBlock: 0, toBlock: "latest"}

    // const loan1OutFilter = {address: contracts.loan1, topics:loan1.filters.Transfer(contracts.lender).topics, fromBlock: 0, toBlock: "latest"}    
    // const loan1InFilter = {address: contracts.loan1, topics:loan1.filters.Transfer(null,contracts.lender).topics, fromBlock: 0, toBlock: "latest"}
    // console.log("loan1InFilter", loan1InFilter);
    
    // here we pass "loan1"(new ethers.Contract(contracts.loan1, tusdAbi, wallet)) as argument & in loanTokenBal we use it on topics
    const loan11 = await loanTokenBal(); 
    // const loan21 = await loanTokenBal(); 
    // console.log("loan1InFilter", loan11);
    // console.log("loan11InFilter", loan11InFilter);

    // const loan2OutFilter = {address: contracts.loan2, topics:loan2.filters.Transfer(contracts.lender).topics, fromBlock: 0, toBlock: "latest"}    
    // const loan2InFilter = {address: contracts.loan2, topics:loan2.filters.Transfer(null,contracts.lender).topics, fromBlock: 0, toBlock: "latest"}

    const tusdArray = mergeArray([...await eventHelper(tusdOutFilter,-1),...await eventHelper(tusdInFilter,1)])
    const curveArray = mergeArray([...await eventHelper(curveOutFilter,-1),...await eventHelper(curveInFilter,1)])


    // const loan1Array = mergeArray([...await eventHelper(loan1OutFilter,-1),...await eventHelper(loan1InFilter,1)])
    // console.log("final loan1InFilter", await eventHelper(loan1InFilter,1));
    
    // const loan2Array = mergeArray([...await eventHelper(loan2OutFilter,-1),...await eventHelper(loan2InFilter,1)])
    
    const combined = mergeArrayNew([
        ...processArray(tusdArray,'TUSD'),
        ...processArray(curveArray,'yCRV'),
        // ...processArray2(loan11,'Loan1'),
        // ...processArray2(loan21,'Loan2')
    ])

    // console.log("combined", combined);
    

    return combined
}

const eventHelper = async (filter: ethers.providers.Filter, sign:number) => {
    let result: {
         total: number; 
         marginChange: number;
        blockNumber: number;
        timestamp: number;
         }[] = [];

    await provider.getLogs(filter).then(async res => {
        for(let i=0;i<res.length;i++){
            const value = parseInt(res[i]['data'].substr(2,64),16)/1e18
            result.push({
                total: 0,
                marginChange: value*sign,
                blockNumber: res[i]['blockNumber'],
                // timestamp: await timeStamp(res[i].blockHash),
                timestamp: 1613064392
            });
            }
        })
        // console.log("result", result);
        
    return result
}

const timeStamp = async(blockHash:string) => {
 let data = await provider.getBlock(blockHash);
 return data.timestamp;
}

const loanTokenHelper = async(address:string) => {

    let result: { total: number; marginChange: number; blockNumber: number, timestamp: number; }[] = []
    const loanContract = new ethers.Contract(address, tusdAbi, wallet) 
    const value = await loanContract.totalSupply()/1e18
    await provider.getLogs({address: contracts.lender, topics:lender.filters.Funded(address).topics, fromBlock: 0, toBlock: "latest"}).then(res => {
            result.push({total: 0,marginChange: value,blockNumber:1, timestamp: 1613064392 })
    })
    return result
}


export const loanTokenFinder = async() => {
    let result:string[] = []
    
    await provider.getLogs({address: contracts.loanFactory, topics:lender.filters.LoanTokenCreated().topics, fromBlock: 0, toBlock: "latest"}).then(res => {
        res.forEach(res => {            
            const addr = '0x'+res['data'].substr(2+24,40)
            result.push(addr)
        })
    })
    return result
}

export const loanTokenBal = async() => {
    let loanTokenArray: { [x: number]: any; blockNumber: any; }[] = []
    const loanTokens = await loanTokenFinder();    // all loan token address 0x12ee3
    let newArray:any[];

    let data = await Promise.all(loanTokens.slice(0,2).map(async (address,index) => {

        // All the topics are same > so loan1
        const loanOutFilter = {address: address, topics:loan1.filters.Transfer(contracts.lender).topics, fromBlock: 0, toBlock: "latest"}    
        const loanInFilter = {address: address, topics:loan1.filters.Transfer(null,contracts.lender).topics, fromBlock: 0, toBlock: "latest"}
        let arr1 = await loanTokenHelper(address);
        let arr2 = await eventHelper(loanOutFilter,-1);
        let arr3 = await eventHelper(loanInFilter,1);
        // console.log("arr1", arr1);
        // console.log("arr2", arr2);
        // console.log("arr3", arr3);
        

        let loanArray: any;
        
        if(arr1.length > 0 && arr2.length > 0 && arr3.length > 0) {
            loanArray = mergeArray([...arr1,...arr2,...arr3]);        
        }
        
        if(loanArray !== undefined && loanArray.length > 0) {    
            console.log(loanArray);      
            for(let i=1;i<loanArray.length;i++){
                newArray.push({
                    data:{
                        name:`Loan${index}`,
                        balance:loanArray[i].total.toFixed(0)
                        // timestamp: loanArray[i].timestamp
                    },
                    blockNumber:loanArray[i].blockNumber
                })
            }    
            mergeArrayNew2(newArray)

        }

        // console.log("317 loanTokenArray", loanTokenArray);
        
        return loanTokenArray;
    }));

    return data;
}


const mergeArrayNew2 = (array: any[]) => {
    let newArray:any = []
    console.log(array)
    array.sort((a,b) => {

        //[{}{}{}{}{}{}{}{}]
        // console.log("a,b",a,b)
        return (a.blockNumber > b.blockNumber) ? 1 : ((b.blockNumber > a.blockNumber) ? -1 : 0)
    
    }); 

    //[{}{}{}{}{}{}{}{}] --> sorted
    for(let i=0;i<array.length;i++){

        // newArray.push({[array[i].data.name]:array[i].data.balance,   //loan12
        //                 'Loan1':array[i].data.balance,
        //                 'Loan5':array[i].data.balance,
        //                 ......
        //                 blockNumber:array[i].data.balance})
        // console.log(array[i])
    }
    
    
}
