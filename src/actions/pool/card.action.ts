import { ActionTypes } from "../types";
import * as Types from "../../types/pool/card.types";

// Fetch APY
export const initFetchPoolCard = (): Types.InitFetchPoolCard => {
  return {
    type: ActionTypes.FETCH_POOL_CARDS_LOADING,
  };
};

export const fetchPoolCard = (): Types.FetchPoolCard => {
  return {
    type: ActionTypes.FETCH_POOL_CARDS,
  };
};

export const fetchPoolCardSuccess = (
  data: Types.PoolCardItem
): Types.FetchPoolCardSuccess => {
  return {
    type: ActionTypes.FETCH_POOL_CARDS_SUCCESS,
    data: data,
  };
};

export const fetchFetchPoolCardFailure = (
  message: string
): Types.FetchPoolCardError => {
  return {
    type: ActionTypes.FETCH_POOL_CARDS_ERROR,
    message: message,
  };
};