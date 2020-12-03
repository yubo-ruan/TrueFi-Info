import React, { useState, useEffect } from 'react'
import {Statistic, Card, Row, Col, Table, Tag } from 'antd'
import {getTruStat} from '../hooks/tru'
import {getAPY} from '../hooks/truefarm'


export const FarmPage: React.FC = () => {

    const [tru, setTru] = useState({supply : 0,burned : 0, distributed : 0})
    const [apy, setApy] = useState([{'pool':'','dailyRate':0,'weeklyRate':0,'APY':0,'totalFarmRewards':0,'totalStaked':0,'totalClaimedRewards':0}])

    useEffect(() => {
        getAPY().then(res => setApy(res))
        getTruStat().then(res => setTru(res))
    }, []);
    const columns = [
        {
            title: 'Pool',
            dataIndex: 'pool',
            key: 'pool',
            render: (text: string) => <a>{text}</a>,
        },
        {
          title: 'DailyRate',
          dataIndex: 'dailyRate',
          key: 'dailyRate',
          render: (text: number) => <Tag color='geekblue' key={text}>{text.toFixed(2)} %</Tag>,
        },
        {
          title: 'WeeklyRate',
          dataIndex: 'weeklyRate',
          key: 'weeklyRate',
          render: (text: number) => <Tag color='geekblue' key={text}>{text.toFixed(2)} %</Tag>,
        },
        {
          title: 'APY',
          dataIndex: 'APY',
          key: 'APY',
          render: (text: number) => <Tag color='volcano' key={text}>{text.toFixed(2)} %</Tag>,
        },
        {
            title: 'totalFarmRewards',
            dataIndex: 'totalFarmRewards',
            key: 'totalFarmRewards',
            render: (text: number) => <a>{text.toFixed(0)} TRU</a>,
        },
        {
            title: 'totalStaked',
            dataIndex: 'totalStaked',
            key: 'totalStaked',
            render: (text: number) => <a>{text.toFixed(0)}</a>,
        },
        {
            title: 'totalClaimedRewards',
            dataIndex: 'totalClaimedRewards',
            key: 'totalClaimedRewards',
            render: (text: number) => <a>{text.toFixed(0)} TRU</a>,
        },
      ];

  return(
    <>
      <Row gutter={16}>
        <Col span={8}>
          <Card>
            <Statistic title="TRU Total Supply" value={tru.supply} precision={2}/>
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="TRU Burned" value={tru.burned} precision={2}/>
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="TRU Distributed" value={tru.distributed} precision={2}/>
          </Card>
        </Col>
      </Row>  
      <Table columns={columns} dataSource={apy} />
    </>
    
  )
};

