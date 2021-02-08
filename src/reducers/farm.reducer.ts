import { ActionTypes } from "../actions/types";
import { FarmStore, FarmActions } from "../types/farm.types";

const farmStore = {
  apy: {
    status: ActionTypes.NOT_LOADED,
    error: false,
    data: []
  }
};

export const farms = (
  state: FarmStore = farmStore,
  action: FarmActions
) => {
  switch (action.type) {
    case ActionTypes.FETCH_APY_LOADING: {
      return {
        ...state,
        apy: {
          ...state.apy,
          status: ActionTypes.IS_LOADING,
          error: false,
        },
      };
    }

    case ActionTypes.FETCH_APY_SUCCESS: {
      return {
        ...state,
        apy: {
          ...state.apy,
          status: ActionTypes.LOADED,
          error: false,
          data: state.apy.data.concat(action.data),

        },
      };
    }

    case ActionTypes.FETCH_APY_ERROR: {
      return {
        ...state,
        apy: {
          ...state.apy,
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
