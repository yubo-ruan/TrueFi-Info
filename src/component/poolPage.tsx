import React, { useState, useEffect } from 'react';
import { Area } from '@ant-design/charts';
import {Typography, Statistic, Card, Row, Col, Divider, Table} from 'antd'
import {getTfiTotalSupply, getPoolValue, getPoolJoined, getPoolExited, getNetPool, getNetCurve} from '../hooks/pool'
const { Title, Paragraph, Text, Link } = Typography;


export const PoolPage: React.FC = () => {
  
  const [tfi, setTfi] = useState({supply: 0, poolValue: 0})
  const [joined, setjoined] = useState([{total:0, value:0, blockNumber:0}])
  const [exited, setExited] = useState([{total:0, value:0, blockNumber:0}])
  const [poolValue, setPoolValue] = useState([{total:0, value:0, blockNumber:0}])
  const [curve, setCurve] = useState([{total:0, value:0, blockNumber:0}])

  useEffect(() => {
    getPoolJoined().then(res => setjoined(res))
    getPoolExited().then(res => setExited(res))
    getTfiTotalSupply().then(res => setTfi(prev => {
      return {...prev, supply: res}
    }))
    getPoolValue().then(res => setTfi(prev => {
      return {...prev, poolValue: res}
    }))
    getNetPool().then(res => setPoolValue(res))
    getNetCurve().then(res => setCurve(res))
  }, []);

  
  const curveConfig = {
    data: curve,
    padding: 80,
    xField: 'blockNumber',
    yField: 'total',
    xAxis: { tickCount: 5 },
    areaStyle: function areaStyle() {
      return { fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff' };
    },
  };
  const netValueConfig = {
    data: poolValue,
    padding: 80,
    xField: 'blockNumber',
    yField: 'total',
    xAxis: { tickCount: 5 },
    areaStyle: function areaStyle() {
      return { fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff' };
    },
  };
  const joinedConfig = {
    data: joined,
    padding: 80,
    xField: 'blockNumber',
    yField: 'total',
    xAxis: { tickCount: 5 },
    areaStyle: function areaStyle() {
      return { fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff' };
    },
  };
  const exitedConfig = {
    data: exited,
    padding: 80,
    xField: 'blockNumber',
    yField: 'total',
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
            <Statistic title="Pool Value" value={tfi.poolValue} precision={2} suffix=" TUSD" />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <Statistic title="TFI-LP Total Supply" value={tfi.supply} precision={2}/>
          </Card>
        </Col>
      </Row>  
      <Divider />
        <Title level={4}>Pool Value (TUSD)</Title>
        <Area {...netValueConfig} />

        <Title level={4}>TUSD to Curve (TUSD)</Title>
        <Area {...curveConfig} />
        <Title level={4}>Capital Joined (TUSD)</Title>
        <Area {...joinedConfig} />
        <Title level={4}>Capital Exited (TUSD)</Title>
        <Area {...exitedConfig} />
      <Divider />
    </div>
  )
};

