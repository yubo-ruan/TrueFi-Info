import { ActionTypes } from "./types";
import * as Types from "../types/votes.types";
import { LogItem } from "../types/shared.types";

// Fetch logs
export const initFetchVoteLogs = (): Types.InitFetchVoteLogs => {
  return {
    type: ActionTypes.FETCH_VOTES_LOGS_LOADING,
  };
};

export const fetchVoteLogs = (): Types.FetchVoteLogs => {
  return {
    type: ActionTypes.FETCH_VOTES_LOGS,
  };
};

export const fetchVoteLogsSuccess = (
  data: LogItem
): Types.FetchVoteLogsSuccess => {
  return {
    type: ActionTypes.FETCH_VOTES_LOGS_SUCCESS,
    data: data,
  };
};

export const fetchVoteLogsFailure = (
  message: string
): Types.FetchVoteLogsError => {
  return {
    type: ActionTypes.FETCH_VOTES_LOGS_ERROR,
    message: message,
  };
};

// Fetch votes
export const initFetchVotes = (): Types.InitFetchVotes => {
  return {
    type: ActionTypes.FETCH_VOTES_LOADING,
  };
};

export const fetchVotes = (data: string): Types.FetchVotes => {
  return {
    type: ActionTypes.FETCH_VOTES,
    data: data,
  };
};

export const fetchVotesSuccess = (
  data: Types.VoteItem
): Types.FetchVotesSuccess => {
  return {
    type: ActionTypes.FETCH_VOTES_SUCCESS,
    data: data,
  };
};

export const fetchVotesFailure = (message: string): Types.FetchVotesError => {
  return {
    type: ActionTypes.FETCH_VOTES_ERROR,
    message: message,
  };
};
