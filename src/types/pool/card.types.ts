import { ActionTypes } from "../../actions/types";

// Actions
export interface InitFetchPoolCard {
  type: ActionTypes.FETCH_POOL_CARDS_LOADING;
}

export interface FetchPoolCard {
  type: ActionTypes.FETCH_POOL_CARDS;
}

export interface FetchPoolCardSuccess {
  type: ActionTypes.FETCH_POOL_CARDS_SUCCESS;
  data: PoolCardItem;
}

export interface FetchPoolCardError {
  type: ActionTypes.FETCH_POOL_CARDS_ERROR;
  message: string;
}

export type CardActions =
  | InitFetchPoolCard
  | FetchPoolCard
  | FetchPoolCardSuccess
  | FetchPoolCardError;


// Pool card item
export interface PoolCardItem {
  totalSupply: number;
  poolValue: number;
}

