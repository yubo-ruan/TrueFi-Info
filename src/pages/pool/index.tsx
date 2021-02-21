import React from 'react'
import PoolCards from "./card";
import ValueChart from "./valueChart";
import CurveChart from "./curveChart";
import CompositionChart from "./compositionChart";

const PoolPage = () => {

    return (
        <>
            <PoolCards />
            <ValueChart />
            <CompositionChart />
            <CurveChart />
        </>);
};

export default PoolPage;