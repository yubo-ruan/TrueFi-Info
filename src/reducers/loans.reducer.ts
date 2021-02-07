import { ActionTypes } from "../actions/types";
import { LoanStore, LoanActions } from "../types/loans.types";

const loanStore = {
  logs: {
    status: ActionTypes.NOT_LOADED,
    error: false,
    data: [],
  },
  loans: {
    status: ActionTypes.NOT_LOADED,
    error: false,
    data: [],
  },
};

export const loans = (state: LoanStore = loanStore, action: LoanActions) => {
  switch (action.type) {
    case ActionTypes.FETCH_LOANS_LOGS_LOADING: {
      return {
        ...state,
        logs: {
          ...state.logs,
          status: ActionTypes.IS_LOADING,
          error: false,
        },
      };
    }

    case ActionTypes.FETCH_LOANS_LOGS_SUCCESS: {
      return {
        ...state,
        logs: {
          ...state.logs,
          status: ActionTypes.LOADED,
          error: false,
          data: state.logs.data.concat(action.data),
        },
      };
    }

    case ActionTypes.FETCH_LOANS_LOGS_ERROR: {
      return {
        ...state,
        logs: {
          ...state.logs,
          status: ActionTypes.LOADING_FAILED,
          error: true,
        },
      };
    }

    case ActionTypes.FETCH_LOANS_LOADING: {
      return {
        ...state,
        loans: {
          ...state.loans,
          status: ActionTypes.IS_LOADING,
          error: false,
        },
      };
    }

    case ActionTypes.FETCH_LOANS_SUCCESS: {
      return {
        ...state,
        loans: {
          ...state.loans,
          status: ActionTypes.LOADED,
          error: false,
          data: state.loans.data.concat(action.data),
        },
      };
    }

    case ActionTypes.FETCH_LOANS_ERROR: {
      return {
        ...state,
        loans: {
          ...state.loans,
          status: ActionTypes.LOADING_FAILED,
          error: true,
        },
      };
    }

    default: {
      return state;
    }
  }
};
