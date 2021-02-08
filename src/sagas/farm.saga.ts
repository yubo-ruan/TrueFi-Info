import axios from "axios";
import { put } from "redux-saga/effects";
import * as actions from "../actions/farm.action";

export function* getApy(action: any) {
  yield put(actions.initFetchApy());

  try {
    const response = yield axios.post(
      `${process.env.REACT_APP_SERVER_URL}/apy`,
      action.data
    );

    yield put(actions.fetchFetchApySuccess(response.data.apy));
  } catch (error) {
    yield put(actions.fetchFetchApyFailure(error.message));
  }
}
