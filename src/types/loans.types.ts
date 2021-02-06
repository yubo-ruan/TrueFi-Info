import { ActionTypes } from "../actions/types";

// Actions
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
  status: string;
  error: boolean;
  loans: LoanItem[];
}
