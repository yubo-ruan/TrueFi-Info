import React, { useState, useEffect } from 'react'
import { Statistic, Card, Row, Col, Typography} from 'antd'
import {getTfiTotalSupply, getPoolValue, getPoolChart, getNetCurve, TusdHistoricalBal, loanTokenBal} from '../hooks/pool'
import {LineChart, Area, AreaChart, ComposedChart, Line, XAxis, YAxis, Bar, CartesianGrid, Tooltip, Legend} from 'recharts'
import {CustomTick, CustomTooltip} from "./index";

const { Title } = Typography;


export const PoolPageOld: React.FC = () => {
  
  const [tfi, setTfi] = useState({supply: 0, poolValue: 0})
  const [poolChart, setPoolChart] = useState([{total:0, marginChange:0, blockNumber:0}])
  const [curveChart, setCurveChart] = useState([{total:0, marginChange:0, blockNumber:0}])
  const [combinedChart, setCombinedChart] = useState([{'Loan1':0, blockNumber:0}])
  const [loanTokenNameSet, setLoanTokenNameSet] = useState(new Set())

  useEffect(() => {
    getTfiTotalSupply().then(res => setTfi(prev => {
      return {...prev, supply: res}
    }))
    getPoolValue().then(res => setTfi(prev => {
      return {...prev, poolValue: res}
    }))
    getPoolChart().then(res => setPoolChart(res))
    getNetCurve().then(res => setCurveChart(res))
    loanTokenBal().then((res) => {       
      setCombinedChart(res.data)
      setLoanTokenNameSet(res.loanTokenNameSet)
      console.log(res.loanTokenNameSet)
      console.log(res.data)
    })

    
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
      <Title level={2}>Pool Value Chart</Title>
      <ComposedChart width={1200} height={500} data={poolChart} margin={{top: 30, right: 30, bottom: 30, left: 30,}}>
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="blockNumber" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="total" fill="#ffc658" stroke="#8884d8" />
        <Bar dataKey="marginChange" barSize={20} fill="#413ea0" />
      </ComposedChart>

      <Title level={2}>Pool Composition Chart</Title>
      <AreaChart width={1200} height={500} data={combinedChart}
        margin={{top: 30, right: 30, left: 30, bottom: 30,}}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          tick={<CustomTick />}
          dataKey="timestamp" 
         />
        <YAxis type="number" tickMargin={10} />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        {Array.from(loanTokenNameSet).map(data => {
          return (
            <Area type="monotone" dataKey={`Loan${data}`} stackId="1" stroke="#8884d8" fill="#8884d8" />
          )
        })}
      </AreaChart>

      
      <Title level={2}>Pool Interaction with Curve.fi</Title>
      <LineChart width={1000} height={300} data={curveChart} margin={{top: 30, right: 30, left: 30, bottom: 30,}}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="blockNumber" />
        <YAxis type="number" tickMargin={10} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="total" stroke="#8884d8" />
        <Line type="monotone" dataKey="marginChange" stroke="#82ca9d" />
      </LineChart>
    </div>
  )
};


