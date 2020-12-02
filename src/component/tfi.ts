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
    const res = await provider.getLogs(logInfo)
    for(let i=0;i<res.length;i++){
        const deposited = parseInt(res[i]['data'].substr(0,66),16)/1e18
        const minted = parseInt(res[i]['data'].substr(67,129),16)/1e18
        const blockNumber = res[i]['blockNumber']
        result.push({'deposited' : deposited,
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
    const res = await provider.getLogs(logInfo)
    for(let i=0;i<res.length;i++){
        const amount = parseInt(res[i]['data'].substr(0,66),16)/1e18
        const blockNumber = res[i]['blockNumber']
        result.push({'amount exited' : amount,
                    'blockNumber' : blockNumber
                    })
    }
    return result
}
