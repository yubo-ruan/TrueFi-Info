import React from "react";
import styled from "styled-components";
import { Table, Typography } from "antd";
import Loader from "../loader";

const { Title } = Typography;

const Wrapper = styled.div``;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 2rem 0;
  align-items: center;
`;

interface TableItemProps {
  title: string;
  level?: any;
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
        {showSpinner && <Loader />}
      </TitleContainer>
      <Table columns={columns} dataSource={data} loading={isLoading} />
    </Wrapper>
  );
};

export default TableItem;
