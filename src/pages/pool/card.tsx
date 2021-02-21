import React, { useEffect } from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Store } from "../../reducers";
import { fetchPoolCard } from "../../actions/pool/card.action";
import { Row, Col } from 'antd';
import { Card } from "../../component";

const PoolCards = () => {
    const poolState = useSelector((state: Store) => state.pool);
    const dispatch = useDispatch();
    const { card } = poolState;
  
    useEffect(() => {
        dispatch(fetchPoolCard());
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    return(
    <>
        <Row gutter={16}>
            <Col span={12}>
                <Card
                    title="Pool Value"
                    value={card.poolValue}
                    precision={2}
                    suffix="TUSD"
                />
            </Col>
            <Col span={12}>
                <Card
                    title="TFI-LP Total Supply"
                    value={card.totalSupply}
                    precision={2}
                />
            </Col>
        </Row>
    </>);
};

export default PoolCards;