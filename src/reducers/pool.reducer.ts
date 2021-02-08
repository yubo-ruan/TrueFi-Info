import { ActionTypes } from "../actions/types";
import { CardActions } from "../types/pool/card.types";
import { PoolStore } from "../types/pool/index.types";

const priceStore = {
  card: {
    status: ActionTypes.NOT_LOADED,
    error: false,
    totalSupply: 0,
    poolValue: 0,
  }
};

export const pool = (
  state: PoolStore = priceStore,
  action: CardActions
) => {
  switch (action.type) {
    case ActionTypes.FETCH_POOL_CARDS_LOADING: {
      return {
        ...state,
        card: {
          ...state.card,
          status: ActionTypes.IS_LOADING,
          error: false,
        },
      };
    }

    case ActionTypes.FETCH_POOL_CARDS_SUCCESS: {
      return {
        ...state,
        card: {
          ...state.card,
          status: ActionTypes.LOADED,
          error: false,
          totalSupply: action.data.totalSupply,
          poolValue: action.data.poolValue,
        },
      };
    }

    case ActionTypes.FETCH_POOL_CARDS_ERROR: {
      return {
        ...state,
        card: {
          ...state.card,
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
