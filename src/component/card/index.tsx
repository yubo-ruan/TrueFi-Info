import React from "react";
import { Statistic, Card } from "antd";

interface CardProps {
    title: string;
    value: string | number;
    precision: number;
    color?: string;
    prefix?: string;
    suffix?: string;
};


const CardItem = (props: CardProps) => {
  const { title, value, precision, color, prefix, suffix } = props;

  return (
      <Card>
        <Statistic
          title={title}
          value={value}
          precision={precision}
          valueStyle={{ color: color }}
          prefix={prefix}
          suffix={suffix}
        />
      </Card>
  );
};

export default CardItem;
