import { ActionTypes } from "../actions/types";
import { LogItem } from "./shared.types";

// Actions
export interface InitFetchVoteLogs {
  type: ActionTypes.FETCH_VOTES_LOGS_LOADING;
}

export interface FetchVoteLogs {
  type: ActionTypes.FETCH_VOTES_LOGS;
}

export interface FetchVoteLogsSuccess {
  type: ActionTypes.FETCH_VOTES_LOGS_SUCCESS;
  data: LogItem;
}

export interface FetchVoteLogsError {
  type: ActionTypes.FETCH_VOTES_LOGS_ERROR;
  message: string;
}

export interface InitFetchVotes {
  type: ActionTypes.FETCH_VOTES_LOADING;
}

export interface FetchVotes {
  type: ActionTypes.FETCH_VOTES;
  data: string;
}

export interface FetchVotesSuccess {
  type: ActionTypes.FETCH_VOTES_SUCCESS;
  data: VoteItem;
}

export interface FetchVotesError {
  type: ActionTypes.FETCH_VOTES_ERROR;
  message: string;
}

export type VoteActions =
  | InitFetchVoteLogs
  | FetchVoteLogs
  | FetchVoteLogsSuccess
  | FetchVoteLogsError
  | InitFetchVotes
  | FetchVotes
  | FetchVotesSuccess
  | FetchVotesError;

// Vote item
export interface VoteItem {
  vote: string;
  staked: string;
  voter: string;
  loanId: string;
  blockNumber: number;
}

// Reducer state
export interface VoteStore {
  logs: {
    status: string;
    error: boolean;
    data: LogItem[];
  };
  votes: {
    status: string;
    error: boolean;
    data: VoteItem[];
  };
}
