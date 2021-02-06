import React from "react";
import styled from "styled-components";
import { Table, Typography } from "antd";

const { Title } = Typography;

const Wrapper = styled.div``;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 2rem 0;
  align-items: center;
`;

const Spinner = styled.div`
  position: absolute;
  right: 2rem;
  width: 6px;
  height: 6px;
  border-radius: 5px;
  background-color: transparent;
  color: transparent;
  box-shadow: 0 -18px 0 0 #9880ff, 12.72984px -12.72984px 0 0 #9880ff,
    18px 0 0 0 #9880ff, 12.72984px 12.72984px 0 0 rgba(152, 128, 255, 0),
    0 18px 0 0 rgba(152, 128, 255, 0),
    -12.72984px 12.72984px 0 0 rgba(152, 128, 255, 0),
    -18px 0 0 0 rgba(152, 128, 255, 0),
    -12.72984px -12.72984px 0 0 rgba(152, 128, 255, 0);
  animation: dotSpin 1.5s infinite linear;

  @keyframes dotSpin {
    0%,
    100% {
      box-shadow: 0 -18px 0 0 #9880ff, 12.72984px -12.72984px 0 0 #9880ff,
        18px 0 0 0 #9880ff, 12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
        0 18px 0 -5px rgba(152, 128, 255, 0),
        -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
        -18px 0 0 -5px rgba(152, 128, 255, 0),
        -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
    }
    12.5% {
      box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
        12.72984px -12.72984px 0 0 #9880ff, 18px 0 0 0 #9880ff,
        12.72984px 12.72984px 0 0 #9880ff, 0 18px 0 -5px rgba(152, 128, 255, 0),
        -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
        -18px 0 0 -5px rgba(152, 128, 255, 0),
        -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
    }
    25% {
      box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
        12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 0 #9880ff,
        12.72984px 12.72984px 0 0 #9880ff, 0 18px 0 0 #9880ff,
        -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
        -18px 0 0 -5px rgba(152, 128, 255, 0),
        -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
    }
    37.5% {
      box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
        12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0),
        18px 0 0 -5px rgba(152, 128, 255, 0), 12.72984px 12.72984px 0 0 #9880ff,
        0 18px 0 0 #9880ff, -12.72984px 12.72984px 0 0 #9880ff,
        -18px 0 0 -5px rgba(152, 128, 255, 0),
        -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
    }
    50% {
      box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
        12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0),
        18px 0 0 -5px rgba(152, 128, 255, 0),
        12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), 0 18px 0 0 #9880ff,
        -12.72984px 12.72984px 0 0 #9880ff, -18px 0 0 0 #9880ff,
        -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
    }
    62.5% {
      box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
        12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0),
        18px 0 0 -5px rgba(152, 128, 255, 0),
        12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
        0 18px 0 -5px rgba(152, 128, 255, 0), -12.72984px 12.72984px 0 0 #9880ff,
        -18px 0 0 0 #9880ff, -12.72984px -12.72984px 0 0 #9880ff;
    }
    75% {
      box-shadow: 0 -18px 0 0 #9880ff,
        12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0),
        18px 0 0 -5px rgba(152, 128, 255, 0),
        12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
        0 18px 0 -5px rgba(152, 128, 255, 0),
        -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
        -18px 0 0 0 #9880ff, -12.72984px -12.72984px 0 0 #9880ff;
    }
    87.5% {
      box-shadow: 0 -18px 0 0 #9880ff, 12.72984px -12.72984px 0 0 #9880ff,
        18px 0 0 -5px rgba(152, 128, 255, 0),
        12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
        0 18px 0 -5px rgba(152, 128, 255, 0),
        -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
        -18px 0 0 -5px rgba(152, 128, 255, 0),
        -12.72984px -12.72984px 0 0 #9880ff;
    }
  }
`;

interface TableItemProps {
  title: string;
  level: any;
  columns: object[];
  data: object[];
  isLoading: boolean;
  showSpinner: boolean;
}

const TableItem = (props: TableItemProps) => {
  const { title, level, columns, data, isLoading, showSpinner } = props;

  return (
    <Wrapper>
      <TitleContainer>
        <Title level={level}>{title}</Title>
        {showSpinner && <Spinner />}
      </TitleContainer>
      <Table columns={columns} dataSource={data} loading={isLoading} />
    </Wrapper>
  );
};

export default TableItem;
