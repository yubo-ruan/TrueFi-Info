import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Store } from "../../reducers";
import { fetchLogs } from "../../actions/logs.actions";
import { fetchLoans } from "../../actions/loans.action";
import { Table, Typography } from "antd";
import { loanColumns, voteColumns } from "./constants";
import { isLoading, isLoaded } from "../../helpers/store";

const { Title } = Typography;

const Wrapper = styled.div``;

const LoanPage = () => {
  const logState = useSelector((state: Store) => state.logs);
  const loanState = useSelector((state: Store) => state.loans);

  const [logCount, setLogCount] = useState(0);
  let [startCount, setStartCount] = useState(0);
  let [endCount, setEndCount] = useState(1);

  const dispatch = useDispatch();
  const { logs } = logState;
  let logStatus = logState.status;
  const { loans, status } = loanState;

  useEffect(() => {
    dispatch(fetchLogs("loan"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isLoaded(logStatus)) {
      setLogCount(logs.length);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logStatus]);

  useEffect(() => {
    if (isLoaded(logStatus)) {
      if (loans.length === 0) {
        let item = logs.slice(startCount, endCount);
        dispatch(fetchLoans(JSON.stringify(item)));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logStatus]);

  useEffect(() => {
    if (isLoaded(status)) {
      if (endCount <= logCount) {
        setStartCount(++startCount);
        setEndCount(++endCount);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  useEffect(() => {
    if (loans.length > 0) {
      let item = logs.slice(startCount, endCount);
      dispatch(fetchLoans(JSON.stringify(item)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startCount, endCount]);

  return (
    <Wrapper>
      <Title level={4}>Outstanding Loans</Title>

      <Table
        columns={loanColumns}
        dataSource={loans}
        loading={isLoading(logStatus)}
      />
      <Title level={4}>Historical Votes</Title>
      {/* <Table columns={voteColumns} dataSource={vote} /> */}
    </Wrapper>
  );
};

export default LoanPage;
