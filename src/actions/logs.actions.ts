import { ActionTypes } from "./types";
import * as Types from "../types/logs.types";

// Fetch logs
export const initFetchLogs = (): Types.InitFetchLogs => {
  return {
    type: ActionTypes.FETCH_LOGS_LOADING,
  };
};

export const fetchLogs = (logType: string): Types.FetchLogs => {
  return {
    type: ActionTypes.FETCH_LOGS,
    logType: logType,
  };
};

export const fetchLogsSuccess = (
  data: Types.LogItem
): Types.FetchLogsSuccess => {
  return {
    type: ActionTypes.FETCH_LOGS_SUCCESS,
    data: data,
  };
};

export const fetchLogsFailure = (message: string): Types.FetchLogsError => {
  return {
    type: ActionTypes.FETCH_LOGS_ERROR,
    message: message,
  };
};
