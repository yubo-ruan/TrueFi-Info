import { ethers, Contract } from 'ethers'
import { connect } from './providers'
import { contracts } from './constants'

const [network, provider, wallet] = connect()
let uniswapEthTru = new ethers.Contract(contracts.uniswapEthTru, ['function getReserves() public view returns (uint112 _reserve0, uint112 _reserve1, uint32 _blockTimestampLast)'], wallet)
let uniswapEthUsdc = new ethers.Contract(contracts.uniswapEthUsdc, ['function getReserves() public view returns (uint112 _reserve0, uint112 _reserve1, uint32 _blockTimestampLast)'], wallet)

export const getTruPrice = async() => {
    const reserves = await uniswapEthTru.getReserves()
    const res0 = reserves["_reserve0"]
    const res1 = reserves["_reserve1"]/1e10
    const priceInEth = res1/res0
    const ethPrice = await getEthPrice()
    const priceInUsd = priceInEth*ethPrice
    return {'priceInEth' : priceInEth,
            'priceInUsd' : priceInUsd,
            'ethPrice' : ethPrice
            }
}

export const getEthPrice = async() => {
    const reserves = await uniswapEthUsdc.getReserves()
    const res0 = reserves["_reserve0"]/1e6
    const res1 = reserves["_reserve1"]/1e18
    const price = res0/res1
    return price;
}
