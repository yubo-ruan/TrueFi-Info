import React from "react";
import { Statistic, Card, Col } from "antd";

const CardItem = (props: any) => {
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
