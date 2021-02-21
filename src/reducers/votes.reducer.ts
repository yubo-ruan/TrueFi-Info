import { ActionTypes } from "../actions/types";
import { VoteStore, VoteActions } from "../types/votes.types";

const voteStore = {
  logs: {
    status: ActionTypes.NOT_LOADED,
    error: false,
    data: [],
  },
  votes: {
    status: ActionTypes.NOT_LOADED,
    error: false,
    data: [],
  },
};

export const votes = (state: VoteStore = voteStore, action: VoteActions) => {
  switch (action.type) {
    case ActionTypes.FETCH_VOTES_LOGS_LOADING: {
      return {
        ...state,
        logs: {
          ...state.logs,
          status: ActionTypes.IS_LOADING,
          error: false,
        },
      };
    }

    case ActionTypes.FETCH_VOTES_LOGS_SUCCESS: {
      return {
        ...state,
        logs: {
          ...state.logs,
          status: ActionTypes.LOADED,
          error: false,
          data: state.logs.data.concat(action.data),
        },
      };
    }

    case ActionTypes.FETCH_VOTES_LOGS_ERROR: {
      return {
        ...state,
        logs: {
          ...state.logs,
          status: ActionTypes.LOADING_FAILED,
          error: true,
        },
      };
    }

    case ActionTypes.FETCH_VOTES_LOADING: {
      return {
        ...state,
        votes: {
          ...state.votes,
          status: ActionTypes.IS_LOADING,
          error: false,
        },
      };
    }

    case ActionTypes.FETCH_VOTES_SUCCESS: {
      return {
        ...state,
        votes: {
          ...state.votes,
          status: ActionTypes.LOADED,
          error: false,
          data: state.votes.data.concat(action.data),
        },
      };
    }

    case ActionTypes.FETCH_VOTES_ERROR: {
      return {
        ...state,
        votes: {
          ...state.votes,
          status: ActionTypes.LOADING_FAILED,
          error: true,
        },
      };
    }

    default: {
      return state;
    }
  }
};
