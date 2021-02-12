import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    background-color: #fff;
    padding: 1rem;
`;

const Text = styled.div`
    color: ${(props => props.color && props.color)};
    margin: 0.2rem 0;
`;

interface TooltipProps {
    payload?: object[],
    label?: string;
}

const CustomTooltip = (props: TooltipProps) => {
    const { payload, label} = props;
    
    return(
        <Wrapper>
        <Text>{`${label}`}</Text>
        {payload && payload.length > 0 && payload.map((item: any, index: number) => {
            return <Text color={item.color} key={`tooltip_${index}`}>
                {item.name}: {(item.name === "total" || item.name === "marginChange") && "$"}{item.value.toLocaleString()}
                </Text>
            })
        }
      </Wrapper>
    );
};

export default CustomTooltip;