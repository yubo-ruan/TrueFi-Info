import axios from "axios";
import { put } from "redux-saga/effects";
import * as actions from "../actions/loans.action";

export function* getLoanLogs() {
  yield put(actions.initFetchLoanLogs());

  try {
    const response = yield axios.get(
      `${process.env.REACT_APP_SERVER_URL}/logs?type=loan`
    );

    yield put(actions.fetchLoanLogsSuccess(response.data.logs));
  } catch (error) {
    yield put(actions.fetchLoanLogsFailure(error.message));
  }
}

export function* getLoans(action: any) {
  yield put(actions.initFetchLoans());

  try {
    const response = yield axios.post(
      `${process.env.REACT_APP_SERVER_URL}/loans`,
      `{"logs":${action.data}}`
    );

    yield put(actions.fetchLoansSuccess(response.data.loans));
  } catch (error) {
    yield put(actions.fetchLoansFailure(error.message));
  }
}
