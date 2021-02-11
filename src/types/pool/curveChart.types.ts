import { ActionTypes } from "../../actions/types";

// Actions
export interface InitFetchPoolCurveChartData {
  type: ActionTypes.FETCH_POOL_CURVE_CHART_DATA_LOADING;
}

export interface FetchPoolCurveChartData  {
  type: ActionTypes.FETCH_POOL_CURVE_CHART_DATA;
}

export interface FetchPoolCurveChartDataSuccess  {
  type: ActionTypes.FETCH_POOL_CURVE_CHART_DATA_SUCCESS;
  data: PoolCurvedChartDataItem[];
}

export interface FetchPoolCurveChartDataError {
  type: ActionTypes.FETCH_POOL_CURVE_CHART_DATA_ERROR;
  message: string;
}

export type PoolCurveChartActions =
  | InitFetchPoolCurveChartData
  | FetchPoolCurveChartData
  | FetchPoolCurveChartDataSuccess
  | FetchPoolCurveChartDataError;


// Pool curved chart data item
export interface PoolCurvedChartDataItem {
  total: number;
  marginChange: number;
  blockNumber: number;
}