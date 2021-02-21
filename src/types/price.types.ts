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

// Tru price
export interface FetchTfiPriceError {
  type: ActionTypes.FETCH_TFI_PRICE_ERROR;
  message: string;
}

export interface InitFetchTruPrice {
  type: ActionTypes.FETCH_TRU_PRICE_LOADING;
}

export interface FetchTruPrice {
  type: ActionTypes.FETCH_TRU_PRICE;
}

export interface FetchTruPriceSuccess {
  type: ActionTypes.FETCH_TRU_PRICE_SUCCESS;
  data: TruPriceItem;
}

export interface FetchTruPriceError {
  type: ActionTypes.FETCH_TRU_PRICE_ERROR;
  message: string;
}

export type PriceActions =
  | InitFetchTfiPrice
  | FetchTfiPrice
  | FetchTfiPriceSuccess
  | FetchTfiPriceError
  | InitFetchTruPrice
  | InitFetchTruPrice
  | FetchTruPriceSuccess
  | FetchTruPriceError;

// Price item
export interface TfiPriceItem {
  price: number;
  poolValue: number;
}

export interface TruPriceItem {
  priceInEth: number;
  priceInUsd: number;
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
  truPrice: {
    status: string;
    error: boolean;
    priceInEth: number;
    priceInUsd: number;
    poolValue: number;
  };
}
