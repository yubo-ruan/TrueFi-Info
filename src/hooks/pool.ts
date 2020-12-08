import { ethers } from 'ethers'
import { connect } from './providers'
import { contracts } from './constants'
import { stringify } from 'querystring'

const [network, provider, wallet] = connect()
const abi = ['function totalSupply() public view returns (uint256)','function poolValue() public view returns (uint256)']
const tusdAbi = ["event Transfer(address indexed src, address indexed dst, uint val)"]
const curveGaugeAbi = ['event Deposit(address indexed provider, uint256 value)','event Withdraw(address indexed provider, uint256 value)']
const tfi = new ethers.Contract(contracts.tfi, abi, wallet) 
const tusd = new ethers.Contract(contracts.tusd, tusdAbi, wallet) 
const curveGauge = new ethers.Contract(contracts.curveGauge, curveGaugeAbi, wallet) 

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
        if(topic === '1Joined(address,uint256,uint256)'){
            console.log('default value: ' + value)
            console.log('1:' + parseInt(res[i]['data'].substr(2,64),16)/1e18)
            console.log('2:' + parseInt(res[i]['data'].substr(66,64),16)/1e18)
            console.log('3:' + parseInt(res[i]['data'].substr(129,64),16)/1e18)
            console.log('topics:'+res[i].topics)
        }
        total += value
        result.push({total: total,
                    value: value,
                    blockNumber: res[i]['blockNumber']})
    }
    return result
}
const mergeArray = (array: any[]) => {
    
    array.sort((a,b) => (a.blockNumber > b.blockNumber) ? 1 : ((b.blockNumber > a.blockNumber) ? -1 : 0)); 
    for(let i=1;i<array.length;i++){
        array[i].total = array[i-1].total + array[i].value
        if(array[i].blockNumber === array[i-1].blockNumber){
            array.splice(i-1,1)
            i--
        }
    }
    return array
}

export const getPoolJoined = async () => {
    return getEventsHelper('Joined(address,uint256,uint256)',0)
}
export const getPoolExited = async () => {
    const array = await getEventsHelper('Exited(address,uint256)',0)
    array.forEach(element => {
      element.value *= -1                       //turn into nagative value
    })
    return array
}

export const getFlushed = async () => {
    return getEventsHelper('Flushed(uint256)',0)
}

export const getPulled = async () => {
    const array = await getEventsHelper('Pulled(uint256)',0)
    array.forEach(element => {
        element.value *= -1                       //turn into nagative value
      })
    return array
}

export const getBorrow = async () => {
    return getEventsHelper('Borrow(address,uint256,uint256)',1)
}

export const getRepaid = async () => {
    const array = await getEventsHelper('Repaid(uint256)',0)
    array.forEach(element => {
        element.value *= -1                       //turn into nagative value
      })
    return array
}

export const getCollected = async () => {
    return getEventsHelper('Collected(uint256)',0)
}




export const getPoolChart = async () => {
    const array = [...await getPoolJoined(),...await getPoolExited()]
    return mergeArray(array)
}

export const getNetCurve = async () => {
    const array = [...await getFlushed(),...await getPulled()]
    return mergeArray(array)
}

export const getLoanChart = async () => {
    const array = [...await getBorrow(),...await getRepaid()]
    return mergeArray(array)
}

export const getCombined = async () => {
    const pool = await getPoolChart()
    const curve = await getNetCurve()
    return [...pool,...curve]

}


const processArray = (array: any[], name: string) => {
    let newArray = []
    for(let i=1;i<array.length;i++){
        newArray.push({data:{name:name,balance:array[i].total},blockNumber:array[i].blockNumber})
    }
    return newArray
}

const mergeArrayNew = (array: any[]) => {
    let newArray:any = []
    array.sort((a,b) => (a.blockNumber > b.blockNumber) ? 1 : ((b.blockNumber > a.blockNumber) ? -1 : 0)); 
    if(array[0].data.name === 'TUSD'){
        newArray[0] = {TUSD:array[0].data.balance,yCRV:0,blockNumber:array[0].blockNumber}
    }else{
        newArray[0] = {TUSD:0,yCRV:array[0].data.balance,blockNumber:array[0].blockNumber}
    }
    
    for(let i=1;i<array.length;i++){
        if(array[i].data.name === 'TUSD'){
            newArray.push({TUSD:array[i].data.balance,yCRV: newArray[i-1].yCRV,blockNumber:array[i].blockNumber})
        }
        if(array[i].data.name === 'yCRV'){
            newArray.push({TUSD:newArray[i-1].TUSD,yCRV:array[i].data.balance,blockNumber:array[i].blockNumber})
        }
    }
    
    return newArray
}

export const TusdHistoricalBal = async () => {

    
    const tusdOutFilter = {address: contracts.tusd, topics:tusd.filters.Transfer(contracts.tfi).topics, fromBlock: 0, toBlock: "latest"}    
    const tusdInFilter = {address: contracts.tusd, topics:tusd.filters.Transfer(null,contracts.tfi).topics, fromBlock: 0, toBlock: "latest"}    

    const curveOutFilter = {address: contracts.curveGauge, topics:curveGauge.filters.Withdraw(contracts.tfi).topics, fromBlock: 0, toBlock: "latest"}    
    const curveInFilter = {address: contracts.curveGauge, topics:curveGauge.filters.Deposit(contracts.tfi).topics, fromBlock: 0, toBlock: "latest"}

    const tusdArray = mergeArray([...await eventHelper(tusdOutFilter,-1),...await eventHelper(tusdInFilter,1)])
    const curveArray = mergeArray([...await eventHelper(curveOutFilter,-1),...await eventHelper(curveInFilter,1)])


    
    const combined = mergeArrayNew([...processArray(tusdArray,'TUSD'),...processArray(curveArray,'yCRV')])


    return combined
}

const eventHelper = async (filter: ethers.providers.Filter, sign:number) => {
    let result: { total: number; value: number; blockNumber: number }[] = []
    let total = 0 
    const res = await provider.getLogs(filter).then(res => {
        for(let i=0;i<res.length;i++){
            const value = parseInt(res[i]['data'].substr(2,64),16)/1e18
            
            result.push({total: 0,
                        value: value*sign,
                        blockNumber: res[i]['blockNumber']})
        }
    })
    
    return result
}