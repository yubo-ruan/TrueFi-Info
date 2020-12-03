import React, { useState, useEffect } from 'react'
import {Table, Tag } from 'antd'
import {getAllLoanCreated, getAllVoteEvent} from '../hooks/loan'


export const LoanPage: React.FC = () => {

    const [loan, setLoan] = useState([{'borrower':'','amount': 0,'term': 0,'apy': 0,'profit': 0,'blockNumber': 0}])
    const [vote, setVote] = useState([{vote:'',staked:0,voter:'',loanId:'',blockNumber:0}])
    useEffect(() => {
        getAllLoanCreated().then(res => setLoan(res))
        getAllVoteEvent().then(res => setVote(res))
    }, []);
    const columns = [
        {
          title: 'Amount',
          dataIndex: 'amount',
          key: 'amount',
          render: (text: any[]) => <a>${text}</a>,
        },
        {
          title: 'Term',
          dataIndex: 'term',
          key: 'term',
          render: (text: number) => <Tag color='geekblue' key={text}>{text.toFixed(0)} Days</Tag>,
    
          
        },
        {
          title: 'Apy',
          dataIndex: 'apy',
          key: 'apy',
          render: (text: number) => <Tag color='volcano' key={text}>{text.toFixed(2)} %</Tag>,
        },
        {
          title: 'Borrower',
          key: 'borrower',
          dataIndex: 'borrower',
        },
        {
          title: 'Blocknumber',
          key: 'blockNumber',
          dataIndex: 'blockNumber',
        },
        {
          title: 'Profit',
          key: 'profit',
          dataIndex: 'profit',
          render: (text: number) => <a>${text.toFixed(4)}</a>,
        }
      ];
    const voteColumns = [
      {
        title: 'Vote',
        dataIndex: 'vote',
        key: 'vote',
        render: (text: string) => <a>{text}</a>,
      },
      {
        title: 'Staked',
        key: 'staked',
        dataIndex: 'staked',
        render: (text: number) => <a>{text.toFixed(2)} TRU</a>,
      },
      {
        title: 'Voter',
        key: 'voter',
        dataIndex: 'voter',
        render: (text: number) => <a>{text}</a>,
      },
      {
        title: 'LoanID',
        key: 'loanId',
        dataIndex: 'loanId',
        render: (text: number) => <a>{text}</a>,
      },
      {
        title: 'Blocknumber',
        key: 'blockNumber',
        dataIndex: 'blockNumber',
      }
    ];
  getAllVoteEvent()
  return(
    <div>
        <Table columns={columns} dataSource={loan} />
        <Table columns={voteColumns} dataSource={vote} />
    </div>
  )
};

