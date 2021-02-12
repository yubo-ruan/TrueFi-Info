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
    // console.log("payload", payload);
    
    let timestamp: any = payload!.value;
    // console.log("timestamp", timestamp);
    
    timestamp = timestamp * 1000;
    let date: any = new Date(timestamp);
    // console.log("date", date);
    
    let formatDate = date.toLocaleDateString();

    return(
        <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="#666">
          {formatDate}
        </text>
      </g>
    )
};

export default CustomTick;