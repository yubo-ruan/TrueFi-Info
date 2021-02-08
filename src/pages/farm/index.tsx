import React, { useEffect} from "react";
import { Row, Col } from 'antd';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Store } from "../../reducers";
import { columns } from "./constants";
import { fetchApy, fetchTru } from "../../actions/farm.action";
import { fetchTfiPrice, fetchTruPrice } from "../../actions/price.action";
import { isLoaded, isLoading } from "../../helpers/store";
import { Card, Table } from "../../component";

const FarmPage = () => {
    const farmState = useSelector((state: Store) => state.farms);
    const priceState = useSelector((state: Store) => state.prices);
    const dispatch = useDispatch();

    const { apy, tru } =  farmState;
    const { tfiPrice, truPrice } = priceState;
    const tfiStatus = tfiPrice.status;
    const truStatus = truPrice.status;


    useEffect(() => {
        if(!isLoaded(tfiStatus) && !isLoaded(truStatus)) {
            dispatch(fetchTfiPrice());
            dispatch(fetchTruPrice());
        }
        dispatch(fetchTru());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if(isLoaded(tfiStatus) && isLoaded(truStatus)) {            
            let data = populateAPYParam();
            dispatch(fetchApy(JSON.stringify(data)));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tfiStatus, truStatus]);

    const populateAPYParam = () => {
        let data = {
            tru: {
                poolValue: truPrice.poolValue
            },
            tfi: {
                poolValue: tfiPrice.poolValue,
                price: tfiPrice.price
            }
        };

        return data;
    };
    
    return(
        <>
            <Row gutter={16}>
            <Col span={8}>
                <Card
                    title="TRU Total Supply"
                    value={tru.supply}
                    precision={2}
                    color=""
                    prefix=""
                />
            </Col>
            <Col span={8}>
                <Card
                    title="TRU Burned"
                    value={tru.burned}
                    precision={2}
                    color=""
                    prefix=""
                />
            </Col>
            <Col span={8}>
                <Card
                    title="TRU Distributed"
                    value={tru.distributed}
                    precision={2}
                    color=""
                    prefix=""
                />
            </Col>
            </Row>
            <Table
                title=""
                showSpinner={isLoading(apy.status)}
                columns={columns}
                data={apy.data}
                isLoading={isLoading(apy.status)}
            />
        </>
    );
};

export default FarmPage;