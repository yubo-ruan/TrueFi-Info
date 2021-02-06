import { ActionTypes } from "./types";
import * as Types from "../types/price.types";

// Fetch Tfi price
export const initFetchTfiPrice = (): Types.InitFetchTfiPrice => {
  return {
    type: ActionTypes.FETCH_TFI_PRICE_LOADING,
  };
};

export const fetchTfiPrice = (): Types.FetchTfiPrice => {
  return {
    type: ActionTypes.FETCH_TFI_PRICE,
  };
};

export const fetchFetchTfiPriceSuccess = (
  data: Types.TfiPriceItem
): Types.FetchTfiPriceSuccess => {
  return {
    type: ActionTypes.FETCH_TFI_PRICE_SUCCESS,
    data: data,
  };
};

export const fetchFetchTfiPriceFailure = (
  message: string
): Types.FetchTfiPriceError => {
  return {
    type: ActionTypes.FETCH_TFI_PRICE_ERROR,
    message: message,
  };
};
