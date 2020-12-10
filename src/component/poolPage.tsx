import React, { useState, useEffect } from 'react'
import { Statistic, Card, Row, Col, Typography} from 'antd'
import {getTfiTotalSupply, getPoolValue, getPoolChart, getNetCurve, TusdHistoricalBal} from '../hooks/pool'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
const { Title } = Typography;


export const PoolPage: React.FC = () => {
  
  const [tfi, setTfi] = useState({supply: 0, poolValue: 0})
  const [poolChart, setPoolChart] = useState([{total:0, value:0, blockNumber:0}])
  const [curveChart, setCurveChart] = useState([{total:0, value:0, blockNumber:0}])
  const [combinedChart, setCombinedChart] = useState([{TUSD:0, yCRV:0, Loan1:0, Loan2:0, blockNumber:0}])

  useEffect(() => {
    getTfiTotalSupply().then(res => setTfi(prev => {
      return {...prev, supply: res}
    }))
    getPoolValue().then(res => setTfi(prev => {
      return {...prev, poolValue: res}
    }))
    getPoolChart().then(res => setPoolChart(res))
    getNetCurve().then(res => setCurveChart(res))
    TusdHistoricalBal().then(res => setCombinedChart(res))
  }, []);

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
      <Title level={2}>Pool Value Line Chart</Title>
      <LineChart width={1000} height={300} data={poolChart} margin={{top: 30, right: 30, left: 30, bottom: 30,}}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="blockNumber" />
        <YAxis type="number" tickMargin={10} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="total" stroke="#8884d8" />
        <Line type="monotone" dataKey="value" stroke="#82ca9d" />
      </LineChart>
      <Title level={2}>Pool Composition Line Chart</Title>
      <LineChart width={1200} height={500} data={combinedChart} margin={{top: 30, right: 30, left: 30, bottom: 30,}}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="blockNumber" />
        <YAxis type="number" tickMargin={10} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="TUSD" stroke="#8884d8" />
        <Line type="monotone" dataKey="yCRV" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Loan1" stroke="red" />
        <Line type="monotone" dataKey="Loan2" stroke="blue" />
      </LineChart>
      <Title level={2}>Pool Interaction with Curve.fi</Title>
      <LineChart width={1000} height={300} data={curveChart} margin={{top: 30, right: 30, left: 30, bottom: 30,}}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="blockNumber" />
        <YAxis type="number" tickMargin={10} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="total" stroke="#8884d8" />
        <Line type="monotone" dataKey="value" stroke="#82ca9d" />
      </LineChart>
    </div>
  )
};

