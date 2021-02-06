import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Store } from "../../reducers";
import { loanColumns } from "./constants";
import { fetchLoanLogs, fetchLoans } from "../../actions/loans.action";
import { isLoading, isLoaded } from "../../helpers/store";
import TableItem from "./tableItem";

const Loans = () => {
  const dispatch = useDispatch();
  const loanState = useSelector((state: Store) => state.loans);

  const { logs, loans } = loanState;
  const { data, status } = logs;
  const loansData = loans.data;
  const loanStatus = loans.status;

  const [logCount, setLogCount] = useState(0);
  let [startCount, setStartCount] = useState(0);
  let [endCount, setEndCount] = useState(1);

  useEffect(() => {
    dispatch(fetchLoanLogs());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isLoaded(status)) {
      setLogCount(data.length);

      if (loansData.length === 0) {
        let item = data.slice(startCount, endCount);
        dispatch(fetchLoans(JSON.stringify(item)));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  useEffect(() => {
    if (isLoaded(loanStatus)) {
      if (endCount <= logCount) {
        setStartCount(++startCount);
        setEndCount(++endCount);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loanStatus]);

  useEffect(() => {
    if (loansData.length > 0) {
      let item = data.slice(startCount, endCount);
      dispatch(fetchLoans(JSON.stringify(item)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startCount, endCount]);

  return (
    <TableItem
      level={4}
      title="Outstanding Loans"
      showSpinner={isLoaded(status) && endCount <= logCount}
      columns={loanColumns}
      data={loansData}
      isLoading={isLoading(status)}
    />
  );
};

export default Loans;
