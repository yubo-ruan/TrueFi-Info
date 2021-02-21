import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Store } from "../../reducers";
import { voteColumns } from "./constants";
import { fetchVoteLogs, fetchVotes } from "../../actions/votes.action";
import { isLoading } from "../../helpers/store";
import { Table } from "../../component";

const Votes = () => {
  const voteState = useSelector((state: Store) => state.votes);
  const dispatch = useDispatch();

  const { logs, votes } = voteState;
  const logsData = logs.data;
  const votesData = votes.data;

  useEffect(() => {
    dispatch(fetchVoteLogs());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (logsData.length > 0) {
      dispatch(fetchVotes(JSON.stringify(logsData)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logsData]);

  return (
    <Table
      level={4}
      title="Historical Votes"
      showSpinner={isLoading(votes.status)}
      columns={voteColumns}
      data={votesData}
      isLoading={isLoading(logs.status)}
    />
  );
};

export default Votes;
