import React from "react";
import styled from "styled-components";
import { Loader } from "../index"

const Backdrop = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #f8f8f8;
    opacity: 0.3;
    z-index: 10;
`;

const LoaderContainer = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

interface GraphLoaderProps {
    top?: string;
    left?: string;
    right?: string;
};

const GraphLoader = (props: GraphLoaderProps) => {
    const { top, left, right } = props;

    return(
        <Backdrop> 
            <LoaderContainer>
                <Loader top={top} left={left} right={right} />
            </LoaderContainer>
        </Backdrop>
    );
};

export default GraphLoader;