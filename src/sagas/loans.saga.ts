import axios from "axios";
import { put } from "redux-saga/effects";
import * as actions from "../actions/loans.action";

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
