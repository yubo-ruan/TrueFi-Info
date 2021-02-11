import React from 'react'
import PoolCards from "./card";
import ValueChart from "./valueChart";
import CurveChart from "./curveChart";

const PoolPage = () => {
    
    return(
    <>
        <PoolCards />
        <ValueChart />
        <CurveChart />
    </>);
};

export default PoolPage;