import { ActionTypes } from "./types";
import * as Types from "../types/loans.types";
import { LogItem } from "../types/shared.types";

// Fetch logs
export const initFetchLoanLogs = (): Types.InitFetchLoansLogs => {
  return {
    type: ActionTypes.FETCH_LOANS_LOGS_LOADING,
  };
};

export const fetchLoanLogs = (): Types.FetchLoansLogs => {
  return {
    type: ActionTypes.FETCH_LOANS_LOGS,
  };
};

export const fetchLoanLogsSuccess = (
  data: LogItem
): Types.FetchLoansLogsSuccess => {
  return {
    type: ActionTypes.FETCH_LOANS_LOGS_SUCCESS,
    data: data,
  };
};

export const fetchLoanLogsFailure = (
  message: string
): Types.FetchLoansLogsError => {
  return {
    type: ActionTypes.FETCH_LOANS_LOGS_ERROR,
    message: message,
  };
};

// Fetch loans
export const initFetchLoans = (): Types.InitFetchLoans => {
  return {
    type: ActionTypes.FETCH_LOANS_LOADING,
  };
};

export const fetchLoans = (data: string): Types.FetchLoans => {
  return {
    type: ActionTypes.FETCH_LOANS,
    data: data,
  };
};

export const fetchLoansSuccess = (
  data: Types.LoanItem
): Types.FetchLoansSuccess => {
  return {
    type: ActionTypes.FETCH_LOANS_SUCCESS,
    data: data,
  };
};

export const fetchLoansFailure = (message: string): Types.FetchLoansError => {
  return {
    type: ActionTypes.FETCH_LOANS_ERROR,
    message: message,
  };
};
