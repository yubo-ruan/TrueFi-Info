import React, { useEffect } from 'react';
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Store } from "../../reducers";
import { fetchPoolCompositionChartData } from "../../actions/pool/compositionChart.action";
import { Area, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Typography } from 'antd';
import { GraphLoader, CustomTooltip } from "../../component";
import { isLoading } from "../../helpers/store";

const { Title } = Typography;

const Wrapper = styled.div`
    margin: 2rem 0 0 0;
    position: relative;
`;

const colors = ["#E6194B", "#3CB44B", "#FFE119", "#4363D8", "#F58231",
    "#911EB4", "#42D4F4", "#F032E6", "#BFEF45", "#FABED4",
    "#469990", "#DCBEFF", "#9A6324", "#808000", "#AAFFC3"];

const CompositionChart = () => {
    const poolState = useSelector((state: Store) => state.pool);
    const dispatch = useDispatch();
    
    let { data, status, loanTokenSet } = poolState.compositionChart;
    const initialData = [{ blockNumber: 0 }];

    useEffect(() => {
        dispatch(fetchPoolCompositionChartData());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Wrapper>
            <Title level={2}>Pool Composition Chart</Title>
            {isLoading(status) && <GraphLoader top={"40%"} left={"50%"} />}
            <AreaChart width={1200} height={500} data={data.length > 0 ? data : initialData}
                margin={{ top: 30, right: 30, left: 30, bottom: 30, }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="blockNumber" />
                <YAxis type="number" tickMargin={10} />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                {loanTokenSet.map((data: string | number, index: number) => {
                    if (data !== "TUSD" && data !== "yCRV") {
                        data = "Loan" + data;
                    }

                    return (
                        <Area type="monotone"
                            key={index}
                            dataKey={data}
                            stackId="1" stroke={colors[index]} fill={colors[index]} />
                    )
                })}
            </AreaChart>
        </Wrapper>
    );
};

export default CompositionChart;