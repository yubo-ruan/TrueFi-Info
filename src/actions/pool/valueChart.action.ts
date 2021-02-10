import { ActionTypes } from "../types";
import * as Types from "../../types/pool/valueChart.types";

// Actions
export const initFetchPoolValueChartData = (): Types.InitFetchPoolValueChartData => {
  return {
    type: ActionTypes.FETCH_POOL_VALUE_CHART_DATA_LOADING,
  };
};

export const fetchPoolValueChartData = (): Types.FetchPoolValueChartData => {
  return {
    type: ActionTypes.FETCH_POOL_VALUE_CHART_DATA,
  };
};

export const fetchPoolValueChartDataSuccess = (
  data: Types.PoolChartDataItem[]
): Types.FetchPoolValueChartDataSuccess => {
  return {
    type: ActionTypes.FETCH_POOL_VALUE_CHART_DATA_SUCCESS,
    data: data,
  };
};

export const fetchFetchPoolValueChartDataFailure = (
  message: string
): Types.FetchPoolValueChartDataError => {
  return {
    type: ActionTypes.FETCH_POOL_VALUE_CHART_DATA_ERROR,
    message: message,
  };
};