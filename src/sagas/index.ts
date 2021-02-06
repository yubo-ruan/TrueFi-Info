import { ActionTypes } from "../actions/types";
import { takeEvery } from "redux-saga/effects";
import { getLoanLogs, getLoans } from "./loans.saga";
import { getVoteLogs, getVotes } from "./votes.saga";

export function* watchers() {
  yield takeEvery(ActionTypes.FETCH_LOANS_LOGS, getLoanLogs);
  yield takeEvery(ActionTypes.FETCH_LOANS, getLoans);
  yield takeEvery(ActionTypes.FETCH_VOTES_LOGS, getVoteLogs);
  yield takeEvery(ActionTypes.FETCH_VOTES, getVotes);
}
