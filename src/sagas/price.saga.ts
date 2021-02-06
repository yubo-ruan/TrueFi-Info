import axios from "axios";
import { put } from "redux-saga/effects";
import * as actions from "../actions/price.action";

export function* getTfiPrice() {
  yield put(actions.initFetchTfiPrice());

  try {
    const response = yield axios.get(
      `${process.env.REACT_APP_SERVER_URL}/tfi-price`
    );

    yield put(actions.fetchFetchTfiPriceSuccess(response.data.tfiPrice));
  } catch (error) {
    yield put(actions.fetchFetchTfiPriceFailure(error.message));
  }
}
