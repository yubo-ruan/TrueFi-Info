import { ActionTypes } from "../actions/types";

// Actions
export interface InitFetchTfiPrice {
  type: ActionTypes.FETCH_TFI_PRICE_LOADING;
}

export interface FetchTfiPrice {
  type: ActionTypes.FETCH_TFI_PRICE;
}

export interface FetchTfiPriceSuccess {
  type: ActionTypes.FETCH_TFI_PRICE_SUCCESS;
  data: TfiPriceItem;
}

export interface FetchTfiPriceError {
  type: ActionTypes.FETCH_TFI_PRICE_ERROR;
  message: string;
}

export type PriceActions =
  | InitFetchTfiPrice
  | FetchTfiPrice
  | FetchTfiPriceSuccess
  | FetchTfiPriceError;

// Price item
export interface TfiPriceItem {
  price: number;
  poolValue: number;
}

// Reducer state
export interface PriceStore {
  tfiPrice: {
    status: string;
    error: boolean;
    price: number;
    poolValue: number;
  };
}
