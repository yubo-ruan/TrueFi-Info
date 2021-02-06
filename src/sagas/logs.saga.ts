import axios from "axios";
import { put } from "redux-saga/effects";
import * as actions from "../actions/logs.actions";
import { FetchLogs } from "../types/logs.types";

export function* getLogs(action: FetchLogs) {
  yield put(actions.initFetchLogs());

  try {
    const response = yield axios.get(
      `${process.env.REACT_APP_SERVER_URL}/logs?type=${action.logType}`
    );

    yield put(actions.fetchLogsSuccess(response.data.logs));
  } catch (error) {
    yield put(actions.fetchLogsFailure(error.message));
  }
}
