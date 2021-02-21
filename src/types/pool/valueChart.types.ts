import { ActionTypes } from "../../actions/types";

// Actions
export interface InitFetchPoolValueChartData {
  type: ActionTypes.FETCH_POOL_VALUE_CHART_DATA_LOADING;
}

export interface FetchPoolValueChartData  {
  type: ActionTypes.FETCH_POOL_VALUE_CHART_DATA;
}

export interface FetchPoolValueChartDataSuccess  {
  type: ActionTypes.FETCH_POOL_VALUE_CHART_DATA_SUCCESS;
  data: PoolChartDataItem[];
}

export interface FetchPoolValueChartDataError {
  type: ActionTypes.FETCH_POOL_VALUE_CHART_DATA_ERROR;
  message: string;
}

export type PoolValueChartActions =
  | InitFetchPoolValueChartData
  | FetchPoolValueChartData
  | FetchPoolValueChartDataSuccess
  | FetchPoolValueChartDataError;


// Pool chart data item
export interface PoolChartDataItem {
  total: number;
  marginChange: number;
  blockNumber: number;
}