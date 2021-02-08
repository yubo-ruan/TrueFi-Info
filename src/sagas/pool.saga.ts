import axios from "axios";
import { put } from "redux-saga/effects";
import * as actions from "../actions/pool/card.action";

export function* getPoolCards() {
  yield put(actions.initFetchPoolCard());

  try {
    const response = yield axios.get(
      `${process.env.REACT_APP_SERVER_URL}/pool-values`
    );

    yield put(actions.fetchPoolCardSuccess(response.data.poolValues));
  } catch (error) {
    yield put(actions.fetchFetchPoolCardFailure(error.message));
  }
}