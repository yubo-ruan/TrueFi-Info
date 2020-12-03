import { ethers, Contract } from 'ethers'
import { connect } from './providers'
import { contracts } from './constants'

const [network, provider, wallet] = connect()
const abi = ['function borrower() public view returns (address)',
                 'function getParameters() external view returns (uint256,uint256,uint256)',
                 'function profit() public view returns (address)'
                ]
                
export const getAllLoanCreated = async () => {
    let logInfo = {
        address: contracts.loanFactory,
        topics: [ethers.utils.id('LoanTokenCreated(address)')],
        fromBlock: 0,
        toBlock: "latest"
      }
    
    let loans = []
    const res = await provider.getLogs(logInfo)
    for(let i=0;i<res.length;i++){
        const loanTokenAddr = '0x' + res[i]['data'].substr(26,44)
        console.log(loanTokenAddr)
        const loanToken = new ethers.Contract(loanTokenAddr, abi, wallet)
        const para = await loanToken.getParameters()
        loans.push({'borrower': await loanToken.borrower(), 
                    'amount': para[0]/1e18,
                    'apy': para[1]/1e2,
                    'term': para[2]/1e5,
                    'profit': await loanToken.profit()/1e18,
                    'blockNumber' : res[i]['blockNumber']
        })
    }
    return loans
}

