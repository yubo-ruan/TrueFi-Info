import { ActionTypes } from "../actions/types";
import { LogItem } from "./shared.types";

// Actions
export interface InitFetchLoansLogs {
  type: ActionTypes.FETCH_LOANS_LOGS_LOADING;
}

export interface FetchLoansLogs {
  type: ActionTypes.FETCH_LOANS_LOGS;
}

export interface FetchLoansLogsSuccess {
  type: ActionTypes.FETCH_LOANS_LOGS_SUCCESS;
  data: LogItem;
}

export interface FetchLoansLogsError {
  type: ActionTypes.FETCH_LOANS_LOGS_ERROR;
  message: string;
}

export interface InitFetchLoans {
  type: ActionTypes.FETCH_LOANS_LOADING;
}

export interface FetchLoans {
  type: ActionTypes.FETCH_LOANS;
  data: string;
}

export interface FetchLoansSuccess {
  type: ActionTypes.FETCH_LOANS_SUCCESS;
  data: LoanItem;
}

export interface FetchLoansError {
  type: ActionTypes.FETCH_LOANS_ERROR;
  message: string;
}

export type LoanActions =
  | InitFetchLoansLogs
  | FetchLoansLogs
  | FetchLoansLogsSuccess
  | FetchLoansLogsError
  | InitFetchLoans
  | FetchLoans
  | FetchLoansSuccess
  | FetchLoansError;

// Loan item
export interface LoanItem {
  borrower: string;
  amount: number;
  apy: number;
  term: number;
  profit: number;
  blockNumber: number;
  status: string;
}

// Reducer state
export interface LoanStore {
  logs: {
    status: string;
    error: boolean;
    data: LogItem[];
  };
  loans: {
    status: string;
    error: boolean;
    data: LoanItem[];
  };
}
