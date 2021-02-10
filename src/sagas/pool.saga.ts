import axios from "axios";
import { put } from "redux-saga/effects";
import * as cardActions from "../actions/pool/card.action";
import * as valueChartActions from "../actions/pool/valueChart.action";
import * as curveChartActions from "../actions/pool/curveChart.action";

// Pool cards
export function* getPoolCards() {
  yield put(cardActions.initFetchPoolCard());

  try {
    const response = yield axios.get(
      `${process.env.REACT_APP_SERVER_URL}/pool-values`
    );

    yield put(cardActions.fetchPoolCardSuccess(response.data.poolValues));
  } catch (error) {
    yield put(cardActions.fetchFetchPoolCardFailure(error.message));
  }
}

// Pool value chart
export function* getPoolValueChartData() {
  yield put(valueChartActions.initFetchPoolValueChartData());

  try {
    const response = yield axios.get(
      `${process.env.REACT_APP_SERVER_URL}/pool-value-chart`
    );

    yield put(valueChartActions.fetchPoolValueChartDataSuccess(response.data.data));
  } catch (error) {
    yield put(valueChartActions.fetchFetchPoolValueChartDataFailure(error.message));
  }
}

// Pool curve chart
export function* getPoolCurveChartData() {
  yield put(curveChartActions.initFetchPoolCurveChartData());

  try {
    const response = yield axios.get(
      `${process.env.REACT_APP_SERVER_URL}/pool-interaction-chart`
    );

    yield put(curveChartActions.fetchPoolCurveChartDataSuccess(response.data.data));
  } catch (error) {
    yield put(curveChartActions.fetchFetchPoolCurveChartDataFailure(error.message));
  }
}