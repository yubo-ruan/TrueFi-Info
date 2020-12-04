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

export const getPoolJoined = async () => {
    let logInfo = {
        address: contracts.tfi,
        topics: [ethers.utils.id('Joined(address,uint256,uint256)')],
        fromBlock: 0,
        toBlock: "latest"
        }
    let result = []
    let totalDeposited = 0
    const res = await provider.getLogs(logInfo)
    for(let i=0;i<res.length;i++){
        const deposited = parseInt(res[i]['data'].substr(0,66),16)/1e18
        const minted = parseInt(res[i]['data'].substr(67,129),16)/1e18
        const blockNumber = res[i]['blockNumber']
        totalDeposited += deposited
        result.push({total : totalDeposited,
                    value : deposited,
                    blockNumber : blockNumber
                    })
    }
    return result
}
export const getPoolExited = async () => {
    let logInfo = {
        address: contracts.tfi,
        topics: [ethers.utils.id('Exited(address,uint256)')],
        fromBlock: 0,
        toBlock: "latest"
      }
    let result = []
    let totalExited = 0
    const res = await provider.getLogs(logInfo)
    for(let i=0;i<res.length;i++){
        const exited = parseInt(res[i]['data'].substr(0,66),16)/1e18
        const blockNumber = res[i]['blockNumber']
        totalExited += exited
        result.push({total : totalExited,
                    value : -exited,
                    blockNumber : blockNumber
                    })
    }
    return result
}
export const getNetPool = async () => {
    const array = [...await getPoolJoined(),...await getPoolExited()]
    return mergeArray(array)
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

export const getFlushed = async () => {
    let logInfo = {
        address: contracts.tfi,
        topics: [ethers.utils.id('Flushed(uint256)')],
        fromBlock: 0,
        toBlock: "latest"
      }
    let result = []
    let totalFlushed = 0
    const res = await provider.getLogs(logInfo)
    for(let i=0;i<res.length;i++){
        const amount = parseInt(res[i]['data'].substr(34,65),16)/1e18
        const blockNumber = res[i]['blockNumber']
        totalFlushed += amount
        result.push({total: totalFlushed,
                    value: amount,
                    blockNumber : blockNumber})
    }
    return result
}

export const getPulled = async () => {
    let logInfo = {
        address: contracts.tfi,
        topics: [ethers.utils.id('Pulled(uint256)')],
        fromBlock: 0,
        toBlock: "latest"
      }
    let result = []
    let totalPulled = 0
    const res = await provider.getLogs(logInfo)
    for(let i=0;i<res.length;i++){
        const pulled = parseInt(res[i]['data'].substr(34,65),16)/1e18
        const blockNumber = res[i]['blockNumber']
        totalPulled += pulled
        result.push({total: totalPulled,
                    value: pulled,
                    blockNumber : blockNumber})
    }
    return result
}

export const getNetCurve = async () => {
    const array = [...await getFlushed(),...await getPulled()]
    return mergeArray(array)
}