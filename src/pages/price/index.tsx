import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Store } from "../../reducers";
import { Row } from "antd";
import { fetchTfiPrice } from "../../actions/price.action";
import CardItem from "./cardItem";

const PricePage = () => {
  const dispatch = useDispatch();
  const priceState = useSelector((state: Store) => state.prices);
  const { tfiPrice } = priceState;

  useEffect(() => {
    dispatch(fetchTfiPrice());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Row gutter={16}>
      <CardItem
        title="TRU in USD"
        value={0}
        precision={3}
        color="#3f8600"
        prefix="$"
      />
      <CardItem
        title="TRU in ETH"
        value={0}
        precision={6}
        color="#3f8600"
        prefix=""
      />
      <CardItem
        title="TFI in TUSD"
        value={tfiPrice.price}
        precision={4}
        color="#3f8600"
        prefix="$"
      />
      <CardItem
        title="Uniswap TUSD/TFI Pool Value"
        value={tfiPrice.poolValue}
        precision={0}
        color="red"
        prefix="$"
      />
      <CardItem
        title="Uniswap TRU/ETH Pool Value"
        value={0}
        precision={0}
        color="red"
        prefix="$"
      />
    </Row>
  );
};

export default PricePage;
