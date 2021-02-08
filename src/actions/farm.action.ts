import { ActionTypes } from "./types";
import * as Types from "../types/farm.types";

// Fetch APY
export const initFetchApy = (): Types.InitFetchApy => {
  return {
    type: ActionTypes.FETCH_APY_LOADING,
  };
};

export const fetchApy = (data: string): Types.FetchApy => {
  return {
    type: ActionTypes.FETCH_APY,
    data: data
  };
};

export const fetchFetchApySuccess = (
  data: Types.ApyItem
): Types.FetchApySuccess => {
  return {
    type: ActionTypes.FETCH_APY_SUCCESS,
    data: data,
  };
};

export const fetchFetchApyFailure = (
  message: string
): Types.FetchApyError => {
  return {
    type: ActionTypes.FETCH_APY_ERROR,
    message: message,
  };
};

// Fetch TRU
export const initFetchTru = (): Types.InitFetchTru => {
  return {
    type: ActionTypes.FETCH_TRU_LOADING,
  };
};

export const fetchTru = (): Types.FetchTru => {
  return {
    type: ActionTypes.FETCH_TRU,
  };
};

export const fetchFetchTruSuccess = (
  data: Types.TruItem
): Types.FetchTruSuccess => {
  return {
    type: ActionTypes.FETCH_TRU_SUCCESS,
    data: data,
  };
};

export const fetchFetchTruFailure = (
  message: string
): Types.FetchTruError => {
  return {
    type: ActionTypes.FETCH_TRU_ERROR,
    message: message,
  };
};
