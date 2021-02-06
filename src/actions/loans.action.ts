import { ActionTypes } from "./types";
import * as Types from "../types/loans.types";

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
