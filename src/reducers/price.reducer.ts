import { ActionTypes } from "../actions/types";
import { PriceStore, PriceActions } from "../types/price.types";

const priceStore = {
  tfiPrice: {
    status: ActionTypes.NOT_LOADED,
    error: false,
    price: 0,
    poolValue: 0,
  },
};

export const prices = (
  state: PriceStore = priceStore,
  action: PriceActions
) => {
  switch (action.type) {
    case ActionTypes.FETCH_TFI_PRICE_LOADING: {
      return {
        ...state,
        tfiPrice: {
          ...state.tfiPrice,
          status: ActionTypes.IS_LOADING,
          error: false,
        },
      };
    }

    case ActionTypes.FETCH_TFI_PRICE_SUCCESS: {
      return {
        ...state,
        tfiPrice: {
          ...state.tfiPrice,
          status: ActionTypes.LOADED,
          error: false,
          price: action.data.price,
          poolValue: action.data.poolValue,
        },
      };
    }

    case ActionTypes.FETCH_TFI_PRICE_ERROR: {
      return {
        ...state,
        tfiPrice: {
          ...state.tfiPrice,
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
