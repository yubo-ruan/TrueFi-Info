import { ActionTypes } from "../types";
import * as Types from "../../types/pool/curveChart.types";

// Actions
export const initFetchPoolCurveChartData = (): Types.InitFetchPoolCurveChartData => {
  return {
    type: ActionTypes.FETCH_POOL_CURVE_CHART_DATA_LOADING,
  };
};

export const fetchPoolCurveChartData = (): Types.FetchPoolCurveChartData => {
  return {
    type: ActionTypes.FETCH_POOL_CURVE_CHART_DATA,
  };
};

export const fetchPoolCurveChartDataSuccess = (
  data: Types.PoolCurvedChartDataItem[]
): Types.FetchPoolCurveChartDataSuccess => {
  return {
    type: ActionTypes.FETCH_POOL_CURVE_CHART_DATA_SUCCESS,
    data: data,
  };
};

export const fetchFetchPoolCurveChartDataFailure = (
  message: string
): Types.FetchPoolCurveChartDataError => {
  return {
    type: ActionTypes.FETCH_POOL_CURVE_CHART_DATA_ERROR,
    message: message,
  };
};