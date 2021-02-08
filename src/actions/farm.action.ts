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
