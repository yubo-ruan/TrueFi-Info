import { ethers, Contract } from 'ethers'
import { contracts } from './constants'
import { connect } from './providers'

const [network, provider, wallet] = connect()
const abi = ['function totalFarmRewards() public view returns (uint256)','function totalStaked() public view returns (uint256)']

export const getAPY = async () => {
    const truDistributedPerDay = 20216600000000
    
    const truefarm = new ethers.Contract(contracts.trueFarmTfi, abi, wallet)
    const totalFarmRewards = await truefarm.totalFarmRewards()/1e30
    const totalStaked = await truefarm.totalStaked()

    const divisor = totalStaked*2
    const apy = truDistributedPerDay*365*100/divisor

    const dailyRate = (totalFarmRewards/totalStaked)*1e9
    const weeklyRate = dailyRate*7
    const APY = dailyRate*365
    return {'dailyRate':dailyRate,'weeklyRate':weeklyRate,'APY':APY}
}



