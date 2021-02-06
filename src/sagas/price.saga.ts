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

export function* getTruPrice() {
  yield put(actions.initFetchTruPrice());

  try {
    const response = yield axios.get(
      `${process.env.REACT_APP_SERVER_URL}/tru-price`
    );

    yield put(actions.fetchFetchTruPriceSuccess(response.data.truPrice));
  } catch (error) {
    yield put(actions.fetchFetchTruPriceFailure(error.message));
  }
}
