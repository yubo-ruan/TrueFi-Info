import React from "react";
import styled from "styled-components";
import { Typography, Tabs, Layout } from "antd";
import "antd/dist/antd.css";
import { LoanPage, PricePage, FarmPage, PoolPage } from "./pages";

const { TabPane } = Tabs;
const { Title } = Typography;
const { Content } = Layout;

const StyledContent = styled(Content)`
  padding: 25px 25px;
`;

const App = () => {
  return (
    <StyledContent>
      <Title>TrueFi Info</Title>
      <Tabs tabPosition="left">
        <TabPane tab="Pool Value" key="2">
          <PoolPage />
        </TabPane>
        <TabPane tab="Loan Stat" key="1">
          <LoanPage />
        </TabPane>
        <TabPane tab="Farm" key="3">
          <FarmPage />
        </TabPane>
        <TabPane tab="Price Info" key="4">
          <PricePage />
        </TabPane>
      </Tabs>
    </StyledContent>
  );
};

export default App;
