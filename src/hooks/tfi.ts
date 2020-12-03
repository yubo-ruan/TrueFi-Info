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
        result.push({'deposited' : deposited,
                    'totalDeposited' : totalDeposited,
                    'minted' : minted,
                    'blockNumber' : blockNumber
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
        result.push({'exited' : exited,
                    'totalExited' : totalExited,
                    'blockNumber' : blockNumber
                    })
    }
    return result
}
