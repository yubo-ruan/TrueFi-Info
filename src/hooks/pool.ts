import React from 'react';
import { ethers, Contract } from 'ethers'
import { connect } from './providers'
import { contracts } from './constants'

const [network, provider, wallet] = connect()
const abi = ['function totalSupply() public view returns (uint256)','function poolValue() public view returns (uint256)']
const tfi = new ethers.Contract(contracts.tfi, abi, wallet) 

export const getTfiTotalSupply = async () => {
    return await tfi.totalSupply()/1e18
}

export const getPoolValue = async () => {
    return await tfi.poolValue()/1e18
}

const getEventsHelper = async (topic:string,startIndex:number,endIndex:number) => {
    let result = []
    let total = 0
    const logInfo = {address: contracts.tfi, topics:[ethers.utils.id(topic)], fromBlock: 0, toBlock: "latest"}    
    const res = await provider.getLogs(logInfo)
    for(let i=0;i<res.length;i++){
        const value = parseInt(res[i]['data'].substr(startIndex,endIndex),16)/1e18
        if(topic == 'Borrow(address,uint256,uint256)'){
            console.log(res[i])
            console.log(res[i]['data'].substr(startIndex,endIndex))
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
        if(array[i].blockNumber == array[i-1].blockNumber){
        array.splice(i-1,1)
        i--
        }
    }
    return array
}

export const getPoolJoined = async () => {
    return getEventsHelper('Joined(address,uint256,uint256)',0,66)
}
export const getPoolExited = async () => {
    return getEventsHelper('Exited(address,uint256)',0,66)
}
export const getNetPool = async () => {
    const array = [...await getPoolJoined(),...await getPoolExited()]
    return mergeArray(array)
}


export const getFlushed = async () => {
    return getEventsHelper('Flushed(uint256)',34,65)
}

export const getPulled = async () => {
    return getEventsHelper('Pulled(uint256)',34,65)
}

export const getNetCurve = async () => {
    const array = [...await getFlushed(),...await getPulled()]
    return mergeArray(array)
}

export const getBorrow = async () => {
    return getEventsHelper('Borrow(address,uint256,uint256)',66,67)
}

export const getRepaid = async () => {
    return getEventsHelper('Repaid(uint256)',34,65)
}