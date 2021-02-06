import { ActionTypes } from "../actions/types";
import { takeEvery } from "redux-saga/effects";
import { getLogs } from "./logs.saga";
import { getLoans } from "./loans.saga";

export function* watchers() {
  yield takeEvery(ActionTypes.FETCH_LOGS, getLogs);
  yield takeEvery(ActionTypes.FETCH_LOANS, getLoans);
}
