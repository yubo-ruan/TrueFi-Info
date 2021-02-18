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

const CustomTick = (props: TickProps) => {
    const { x, y, payload } = props;
    let value: string | number;
    let date: string;
    let formatedData: string | number;

    value = payload!.value!;
    let timestamp: number = Number(value) * 1000;
    date = new Date(timestamp).toString();
    formatedData = date.substring(3, 7) + date.substring(10, 15);

    return (
        <g transform={`translate(${x},${y})`}>
            <text x={0} y={0} dy={16} textAnchor="end" fill="#666">
                {formatedData}
            </text>
        </g>
    )
};

export default CustomTick;