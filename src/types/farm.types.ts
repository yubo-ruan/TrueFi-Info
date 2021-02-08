import { ActionTypes } from "../actions/types";

// Actions
export interface InitFetchApy {
  type: ActionTypes.FETCH_APY_LOADING;
}

export interface FetchApy {
  type: ActionTypes.FETCH_APY;
  data: string;
}

export interface FetchApySuccess {
  type: ActionTypes.FETCH_APY_SUCCESS;
  data: ApyItem;
}

export interface FetchApyError {
  type: ActionTypes.FETCH_APY_ERROR;
  message: string;
}

export type FarmActions =
  | InitFetchApy
  | FetchApy
  | FetchApySuccess
  | FetchApyError;


// Price item
export interface ApyItem {
  pool: string;
  dailyRate: number;
  weeklyRate: number;
  APY: number;
  totalFarmRewards: number;
  totalStakedValue: number;
  totalClaimedRewards: number;
}

// Reducer state
export interface FarmStore {
  apy: {
    status: string;
    error: boolean;
    data: ApyItem[];
  };
  // tru: {
  //   status: string;
  //   error: boolean;
  //   priceInEth: number;
  //   priceInUsd: number;
  //   poolValue: number;
  // };
}
