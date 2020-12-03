import React, { useState, useEffect } from 'react';
import { Area } from '@ant-design/charts';
import {getTfiTotalSupply, getPoolValue, getPoolJoined, getPoolExited} from '../hooks/tfi'


export const PoolValueChart: React.FC = () => {
  
  const [joined, setjoined] = useState([{'deposited' : 0, 'totalDeposited':0, 'minted' : 0,'blockNumber' : 0}])
  const [exited, setExited] = useState([{'exited' : 0, 'totalExited' : 0,'blockNumber' : 0}])

  useEffect(() => {
    getPoolJoined().then(res => setjoined(res))
    getPoolExited().then(res => setExited(res))
  }, []);

  const config = {
    data: joined,
    xField: 'blockNumber',
    yField: 'totalDeposited',
    xAxis: { tickCount: 5 },
    areaStyle: function areaStyle() {
      return { fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff' };
    },
  };
  const config2 = {
    data: exited,
    xField: 'blockNumber',
    yField: 'totalExited',
    xAxis: { tickCount: 5 },
    areaStyle: function areaStyle() {
      return { fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff' };
    },
  };
  return(
    <div>
      <Area {...config} />
      <Area {...config2} />
    </div>
  )
};

