import { ethers, Contract } from 'ethers'
import { contracts } from './constants'
import { connect } from './providers'

const [network, provider, wallet] = connect()
const abi = ['function totalFarmRewards() public view returns (uint256)',
            'function totalStaked() public view returns (uint256)',
            'function totalClaimedRewards() public view returns (uint256)']

export const getAPY = async () => {
    let APYs = []
    const pools = [ {name: 'TFI-LP',address: contracts.trueFarmTfi},
                    {name: 'UNI-TRU',address: contracts.trueFarmUniEth},
                    {name: 'UNI-TFI',address: contracts.trueFarmUniTfi}]

    for(let i=0;i<pools.length;i++){
        const truefarm = new ethers.Contract(pools[i]['address'], abi, wallet)
        const totalFarmRewards = await truefarm.totalFarmRewards()/1e30/1e8
        const totalStaked = await truefarm.totalStaked()/1e18
        const totalClaimedRewards = await truefarm.totalClaimedRewards()/1e8
    
        const truDistributedPerDay = 20216600000000
        const divisor = totalStaked*2
        const apy = truDistributedPerDay*365*100/divisor
        const dailyRate = (totalFarmRewards/totalStaked)
        const weeklyRate = dailyRate*7
        const APY = dailyRate*365
        APYs.push({'pool':pools[i]['name'],'dailyRate':dailyRate,'weeklyRate':weeklyRate,'APY':APY,'totalFarmRewards':totalFarmRewards,'totalStaked':totalStaked,'totalClaimedRewards':totalClaimedRewards})
    }
    return APYs
}



