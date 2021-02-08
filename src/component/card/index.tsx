import React from "react";
import { Statistic, Card, Col } from "antd";

interface CardProps {
    title: string;
    value: string | number;
    precision: number;
    color: string;
    prefix: string;
};


const CardItem = (props: CardProps) => {
  const { title, value, precision, color, prefix } = props;

  return (
    <Col span={8}>
      <Card>
        <Statistic
          title={title}
          value={value}
          precision={precision}
          valueStyle={{ color: color }}
          prefix={prefix}
        />
      </Card>
    </Col>
  );
};

export default CardItem;
