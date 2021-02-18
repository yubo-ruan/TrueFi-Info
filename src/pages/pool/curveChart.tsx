import React, { useEffect } from 'react';
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Store } from "../../reducers";
import { fetchPoolCurveChartData } from "../../actions/pool/curveChart.action";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Typography } from 'antd';
import { GraphLoader, CustomTooltip } from "../../component";
import { isLoading } from "../../helpers/store";

const { Title } = Typography;

const Wrapper = styled.div`
    margin: 2rem 0 0 0;
    position: relative;
`;

const CurveChart = () => {
    const poolState = useSelector((state: Store) => state.pool);
    const dispatch = useDispatch();
    let { data, status } = poolState.curveChart;
    const initialData = [{ total: 0, marginChange: 0, blockNumber: 0 }];

    useEffect(() => {
        dispatch(fetchPoolCurveChartData());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Wrapper>
            <Title level={2}>Pool Interaction with Curve.fi</Title>
            {isLoading(status) && <GraphLoader top={"30%"} left={"42%"} />}

            <LineChart
                width={1000}
                height={300}
                data={data.length > 0 ? data : initialData}
                margin={{ top: 30, right: 30, left: 30, bottom: 30, }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="blockNumber" />
                <YAxis type="number" tickMargin={10} />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line type="monotone" dataKey="total" stroke="#8884d8" />
                <Line type="monotone" dataKey="marginChange" stroke="#82ca9d" />
            </LineChart>
        </Wrapper>);
};

export default CurveChart;