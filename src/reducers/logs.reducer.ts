import { ActionTypes } from "../actions/types";
import { LogStore, LogActions } from "../types/logs.types";

const logStore = {
  status: ActionTypes.NOT_LOADED,
  error: false,
  logs: [],
};

export const logs = (state: LogStore = logStore, action: LogActions) => {
  switch (action.type) {
    case ActionTypes.FETCH_LOGS_LOADING: {
      return {
        ...state,
        status: ActionTypes.IS_LOADING,
        error: false,
        message: null,
      };
    }

    case ActionTypes.FETCH_LOGS_SUCCESS: {
      return {
        ...state,
        status: ActionTypes.LOADED,
        error: false,
        logs: state.logs.concat(action.data),
      };
    }

    case ActionTypes.FETCH_LOGS_ERROR: {
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
