import { ActionTypes } from "../actions/types";
import { FarmStore, FarmActions } from "../types/farm.types";

const farmStore = {
  apy: {
    status: ActionTypes.NOT_LOADED,
    error: false,
    data: []
  },
  tru: {
    status: ActionTypes.NOT_LOADED,
    error: false,
    supply: 0,
    burned: 0,
    distributed: 0,
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
    
    case ActionTypes.FETCH_TRU_LOADING: {
      return {
        ...state,
        tru: {
          ...state.tru,
          status: ActionTypes.IS_LOADING,
          error: false,
        },
      };
    }

    case ActionTypes.FETCH_TRU_SUCCESS: {
      return {
        ...state,
        tru: {
          ...state.tru,
          status: ActionTypes.LOADED,
          error: false,
          supply: action.data.supply,
          burned: action.data.burned,
          distributed: action.data.distributed,
        },
      };
    }

    case ActionTypes.FETCH_TRU_ERROR: {
      return {
        ...state,
        tru: {
          ...state.tru,
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
