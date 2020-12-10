import React, { useState, useEffect } from 'react'
import {Statistic, Card, Row, Col} from 'antd'
import {getTruPrice, getTfiPrice} from '../hooks/price'


export const PricePage: React.FC = () => {

    const [truPrice, setTruPrice] = useState({priceInEth:0, priceInUsd:0, poolValue:0})
    const [tfiPrice, setTfiPrice] = useState({price:0,poolValue:0})

    useEffect(() => {
        getTruPrice().then(res => setTruPrice(res))
        getTfiPrice().then(res => setTfiPrice(res))
    }, []);

   
  return(
    <>
    <Row gutter={16}>
        <Col span={8}>
            <Card>
            <Statistic title="TRU in USD" value={truPrice.priceInUsd} precision={3} valueStyle={{ color: '#3f8600' }} prefix="$"/>
            </Card>
        </Col>
        <Col span={8}>
            <Card>
            <Statistic title="TRU in ETH" value={truPrice.priceInEth} precision={6} valueStyle={{ color: '#3f8600' }}/>
            </Card>
        </Col>
        <Col span={8}>
            <Card>
                <Statistic title="TFI in TUSD" value={tfiPrice.price} precision={4} valueStyle={{ color: '#3f8600' }} prefix="$"/>
            </Card>
        </Col>
        <Col span={8}>
            <Card>
                <Statistic title="Uniswap TUSD/TFI Pool Value" value={tfiPrice.poolValue} precision={0} valueStyle={{ color: 'red' }} prefix="$"/>
            </Card>
        </Col>
        <Col span={8}>
            <Card>
                <Statistic title="Uniswap TRU/ETH Pool Value" value={truPrice.poolValue} precision={0} valueStyle={{ color: 'red' }} prefix="$"/>
            </Card>
        </Col>
    </Row>
    </>
  )
};

