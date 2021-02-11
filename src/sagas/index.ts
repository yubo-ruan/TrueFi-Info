import { ActionTypes } from "../actions/types";
import { takeEvery } from "redux-saga/effects";
import { getLoanLogs, getLoans } from "./loans.saga";
import { getVoteLogs, getVotes } from "./votes.saga";
import { getTfiPrice, getTruPrice } from "./price.saga";
import { getApy, getTru } from "./farm.saga";
import { getPoolCards, getPoolValueChartData, getPoolCurveChartData } from "./pool.saga";

export function* watchers() {
  yield takeEvery(ActionTypes.FETCH_LOANS_LOGS, getLoanLogs);
  yield takeEvery(ActionTypes.FETCH_LOANS, getLoans);
  yield takeEvery(ActionTypes.FETCH_VOTES_LOGS, getVoteLogs);
  yield takeEvery(ActionTypes.FETCH_VOTES, getVotes);
  yield takeEvery(ActionTypes.FETCH_TFI_PRICE, getTfiPrice);
  yield takeEvery(ActionTypes.FETCH_TRU_PRICE, getTruPrice);
  yield takeEvery(ActionTypes.FETCH_APY, getApy);
  yield takeEvery(ActionTypes.FETCH_TRU, getTru);
  yield takeEvery(ActionTypes.FETCH_POOL_CARDS, getPoolCards);
  yield takeEvery(ActionTypes.FETCH_POOL_VALUE_CHART_DATA, getPoolValueChartData);
  yield takeEvery(ActionTypes.FETCH_POOL_CURVE_CHART_DATA, getPoolCurveChartData);
}
