import { ActionTypes } from "../actions/types";

// Actions
export interface InitFetchLogs {
  type: ActionTypes.FETCH_LOGS_LOADING;
}

export interface FetchLogs {
  type: ActionTypes.FETCH_LOGS;
  logType: string;
}

export interface FetchLogsSuccess {
  type: ActionTypes.FETCH_LOGS_SUCCESS;
  data: LogItem;
}

export interface FetchLogsError {
  type: ActionTypes.FETCH_LOGS_ERROR;
  message: string;
}

export type LogActions =
  | InitFetchLogs
  | FetchLogs
  | FetchLogsSuccess
  | FetchLogsError;

// Log item
export interface LogItem {
  blockNumber: number;
  blockHash: string;
  transactionIndex: number;
  removed: boolean;
  address: string;
  data: string;
  topics: Array<string>[];
  transactionHash: string;
  logIndex: number;
}

// Reducer state
export interface LogStore {
  status: string;
  error: boolean;
  logs: LogItem[];
}
