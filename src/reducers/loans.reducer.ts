import { ActionTypes } from "../actions/types";
import { LoanStore, LoanActions } from "../types/loans.types";

const loanStore = {
  status: ActionTypes.NOT_LOADED,
  error: false,
  loans: [],
};

export const loans = (state: LoanStore = loanStore, action: LoanActions) => {
  switch (action.type) {
    case ActionTypes.FETCH_LOANS_LOADING: {
      return {
        ...state,
        status: ActionTypes.IS_LOADING,
        error: false,
        message: null,
      };
    }

    case ActionTypes.FETCH_LOANS_SUCCESS: {
      return {
        ...state,
        status: ActionTypes.LOADED,
        error: false,
        loans: state.loans.concat(action.data),
      };
    }

    case ActionTypes.FETCH_LOANS_ERROR: {
      return {
        ...state,
        status: ActionTypes.LOADING_FAILED,
        error: true,
      };
    }

    default: {
      return state;
    }
  }
};
