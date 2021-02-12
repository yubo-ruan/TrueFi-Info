import React, { useEffect } from 'react';
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Store } from "../../reducers";
import { fetchPoolValueChartData } from "../../actions/pool/valueChart.action";
import { Area, ComposedChart, XAxis, YAxis, Bar, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Typography} from 'antd';
import { GraphLoader, CustomTooltip } from "../../component";
import { isLoading } from "../../helpers/store"; 

const { Title } = Typography;

const Wrapper = styled.div`
    margin: 2rem 0 0 0;
    position: relative;
`;

const ValueChart = () => {
    const poolState = useSelector((state: Store) => state.pool);
    const dispatch = useDispatch();
    let { data, status } = poolState.valueChart;
    const initialData = [{total:0, marginChange:0, blockNumber:0}];
  
    useEffect(() => {
        dispatch(fetchPoolValueChartData());
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    return(
        <Wrapper> 
        <Title level={2}>Pool Value Chart</Title>
            {isLoading(status) && <GraphLoader top={"40%"} left={"50%"} />}

            <ComposedChart 
                width={1200} 
                height={500} 
                data={data.length > 0 ? data : initialData} 
                margin={{top: 30, right: 30, bottom: 30, left: 30,}}>
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="blockNumber" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Area type="monotone" dataKey="total" fill="#ffc658" stroke="#8884d8" />
                    <Bar dataKey="marginChange" barSize={20} fill="#413ea0" />
            </ComposedChart>
        </Wrapper>
    );
};

export default ValueChart;