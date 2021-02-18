import React from "react";

interface TickProps {
    x?: number;
    y?: number;
    payload?: {
        coordinate?: number;
        index?: number;
        isShow?: boolean;
        offset?: number;
        tickCoord?: number;
        value?: string | number;
    };
}

const CustomYaxisTick = (props: TickProps) => {
    const { x, y, payload } = props;
    let formatedData: string | number;
    formatedData = payload!.value!.toLocaleString();

    return (
        <g transform={`translate(${x},${y})`}>
            <text x={0} y={0} textAnchor="end" fill="#666">
                ${formatedData}
            </text>
        </g>
    )
};

export default CustomYaxisTick;