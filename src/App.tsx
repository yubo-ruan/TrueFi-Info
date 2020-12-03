import React, { useState, useEffect } from 'react';
import { Button, Typography, Tabs, Table, Tag, Statistic, Card, Row, Col} from 'antd';
import 'antd/dist/antd.css';

import {getTfiTotalSupply, getPoolValue, getPoolJoined, getPoolExited} from './hooks/tfi'
import {getTruStat} from './hooks/tru'
import {getTruPrice} from './hooks/price'
import {getAllLoanCreated} from './hooks/loan'
import {getAPY} from './hooks/truefarm'
import {PoolValueChart} from './component/chart'

const { TabPane } = Tabs;
const { Title, Paragraph, Text, Link } = Typography;

function App() {
  const [resType, setResType] = useState('TFI-LP')
  const [tfi, setTfi] = useState({supply: 0, poolValue: 0})
  const [tru, setTru] = useState({supply : 0,burned : 0, distributed : 0})
  const [price, setPrice] = useState({'priceInEth' : 0,'priceInUsd' : 0,'ethPrice' : 0})
  const [loan, setLoan] = useState([{'borrower':'','amount': 0,'term': 0,'apy': 0,'profit': 0,'blockNumber': 0}])
  const [apy, setApy] = useState({'dailyRate':0,'weeklyRate':0,'APY':0})
  
  useEffect(() => {
    getTfiTotalSupply().then(res => setTfi(prev => {
      return {...prev, supply: res}
    }))
    getPoolValue().then(res => setTfi(prev => {
      return {...prev, poolValue: res}
    }))
    getTruStat().then(res => setTru(res))
    getTruPrice().then(res => setPrice(res))
    getAllLoanCreated().then(res => setLoan(res))
    getAPY().then(res => setApy(res))
  },[])
  
  
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

  return (
    <div>
      <Title>TrueFi Vision Dashboard</Title>
      <Tabs tabPosition='left'>
        <TabPane tab="Loan Stat" key="1">
          <Table columns={columns} dataSource={loan} />
        </TabPane>
        <TabPane tab="Pool Value & TFI" key="2">
          <Row gutter={16}>
            <Col span={12}>
              <Card>
                <Statistic title="TFI-LP Total Supply" value={tfi.supply} precision={2}/>
              </Card>
            </Col>
            <Col span={12}>
              <Card>
                <Statistic title="Pool Value" value={tfi.poolValue} precision={2} suffix=" TUSD" />
              </Card>
            </Col>
          </Row>
          <PoolValueChart />
          {/* <h3>Joined: {joined.map(item => {
            return <pre>{JSON.stringify(item)}</pre>
          })}</h3>
          <h3>Exited: {exited.map(item => {
            return <pre>{JSON.stringify(item)}</pre>
          })}</h3>    */}
        </TabPane>
        <TabPane tab="Farm" key="3">
          <h3>APY: {JSON.stringify(apy)}</h3>
        </TabPane>
        <TabPane tab="TRU Token" key="4">
          <h3>TRU Stats: {JSON.stringify(tru)}</h3>
        </TabPane>
        <TabPane tab="Price Info" key="5">
          <Row gutter={16}>
            <Col span={12}>
              <Card>
                <Statistic title="TRU in USD" value={price.priceInUsd} precision={2} valueStyle={{ color: '#3f8600' }} prefix="$"/>
              </Card>
              <Button style={{ marginTop: 16 }} type="primary">Buy TRU</Button>
            </Col>
            <Col span={12}>
              <Card>
                <Statistic title="TRU in ETH" value={price.priceInEth} precision={6} valueStyle={{ color: '#3f8600' }} prefix="$"/>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </Tabs>

          
    </div>
  )

}

export default App;




