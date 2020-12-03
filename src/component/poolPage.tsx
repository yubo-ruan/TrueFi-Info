import React, { useState, useEffect } from 'react';
import { Area } from '@ant-design/charts';
import {Typography, Statistic, Card, Row, Col, Divider} from 'antd'
import {getTfiTotalSupply, getPoolValue, getPoolJoined, getPoolExited} from '../hooks/tfi'
const { Title, Paragraph, Text, Link } = Typography;


export const PoolPage: React.FC = () => {
  
  const [tfi, setTfi] = useState({supply: 0, poolValue: 0})
  const [joined, setjoined] = useState([{'deposited' : 0, 'totalDeposited':0, 'minted' : 0,'blockNumber' : 0}])
  const [exited, setExited] = useState([{'exited' : 0, 'totalExited' : 0,'blockNumber' : 0}])

  useEffect(() => {
    getPoolJoined().then(res => setjoined(res))
    getPoolExited().then(res => setExited(res))
    getTfiTotalSupply().then(res => setTfi(prev => {
      return {...prev, supply: res}
    }))
    getPoolValue().then(res => setTfi(prev => {
      return {...prev, poolValue: res}
    }))
  }, []);

  const getNetPoolValue = () => {
    let netPoolValue: { blockNumber: number; value: number; }[] = []
    const length = Math.max(joined.length,exited.length)
    console.log(length)

    for(let i=0;i<length;i++){

      if(joined[i]['blockNumber'] == exited[i]['blockNumber']){
        console.log('same')
        netPoolValue.push({'blockNumber':joined[i]['blockNumber'],'value':joined[i]['totalDeposited']-exited[i]['totalExited']})
      }else if(i == joined.length || joined[i]['blockNumber'] < exited[i]['blockNumber']){
        console.log('joined first')
        if(i==0){
          netPoolValue.push({'blockNumber':joined[i]['blockNumber'],'value':joined[i]['totalDeposited']})
        }else{
          netPoolValue.push({'blockNumber':joined[i]['blockNumber'],'value':netPoolValue[i-1]['value']+joined[i]['totalDeposited']})
        }
      }else if(i == joined.length || joined[i]['blockNumber'] > exited[i]['blockNumber']){
        console.log('exited first')
        if(i==0){
          netPoolValue.push({'blockNumber':exited[i]['blockNumber'],'value':exited[i]['totalExited']})
        }else{
          netPoolValue.push({'blockNumber':exited[i]['blockNumber'],'value':netPoolValue[i-1]['value']-exited[i]['totalExited']})
        }
      }
      console.log(netPoolValue)
    }
  }
  // getNetPoolValue()

  const config = {
    data: joined,
    padding: 80,
    xField: 'blockNumber',
    yField: 'totalDeposited',
    xAxis: { tickCount: 5 },
    areaStyle: function areaStyle() {
      return { fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff' };
    },
  };
  const config2 = {
    data: exited,
    padding: 80,
    xField: 'blockNumber',
    yField: 'totalExited',
    xAxis: { tickCount: 5 },
    areaStyle: function areaStyle() {
      return { fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff' };
    },
  };
  return(
    <div>
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
      <Divider />
      <Title level={4}>Capital Joined (TUSD)</Title>
      <Area {...config} />
      <Divider />
      <Title level={4}>Capital Exited (TUSD)</Title>
      <Area {...config2} />
    </div>
  )
};

