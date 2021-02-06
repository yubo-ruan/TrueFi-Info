import axios from "axios";
import { put } from "redux-saga/effects";
import * as actions from "../actions/votes.action";

export function* getVoteLogs() {
  yield put(actions.initFetchVoteLogs());

  try {
    const response = yield axios.get(
      `${process.env.REACT_APP_SERVER_URL}/logs?type=vote`
    );

    yield put(actions.fetchVoteLogsSuccess(response.data.logs));
  } catch (error) {
    yield put(actions.fetchVoteLogsFailure(error.message));
  }
}

export function* getVotes(action: any) {
  yield put(actions.initFetchVotes());

  try {
    const response = yield axios.post(
      `${process.env.REACT_APP_SERVER_URL}/votes`,
      `{"logs":${action.data}}`
    );

    yield put(actions.fetchVotesSuccess(response.data.votes));
  } catch (error) {
    yield put(actions.fetchVotesFailure(error.message));
  }
}
