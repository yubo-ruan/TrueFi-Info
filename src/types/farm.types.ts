import { ActionTypes } from "../actions/types";

// APY Actions
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

// TRU Actions
export interface InitFetchTru {
  type: ActionTypes.FETCH_TRU_LOADING;
}

export interface FetchTru {
  type: ActionTypes.FETCH_TRU;
}

export interface FetchTruSuccess {
  type: ActionTypes.FETCH_TRU_SUCCESS;
  data: TruItem;
}

export interface FetchTruError {
  type: ActionTypes.FETCH_TRU_ERROR;
  message: string;
}

export type FarmActions =
  | InitFetchApy
  | FetchApy
  | FetchApySuccess
  | FetchApyError 
  | InitFetchTru
  | FetchTru
  | FetchTruSuccess
  | FetchTruError;


// APY item
export interface ApyItem {
  pool: string;
  dailyRate: number;
  weeklyRate: number;
  APY: number;
  totalFarmRewards: number;
  totalStakedValue: number;
  totalClaimedRewards: number;
}

// TRU item
export interface TruItem {
  supply: number;
  burned: number;
  distributed: number;
}

// Reducer state
export interface FarmStore {
  apy: {
    status: string;
    error: boolean;
    data: ApyItem[];
  };
  tru: {
    status: string;
    error: boolean;
    supply: number;
    burned: number;
    distributed: number;
  };
}
