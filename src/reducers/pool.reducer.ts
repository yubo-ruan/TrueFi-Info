import { ActionTypes } from "../actions/types";
import { CardActions } from "../types/pool/card.types";
import { PoolValueChartActions } from "../types/pool/valueChart.types";
import { PoolStore } from "../types/pool/index.types";

const poolStore = {
  card: {
    status: ActionTypes.NOT_LOADED,
    error: false,
    totalSupply: 0,
    poolValue: 0,
  },
  valueChart: {
    status: ActionTypes.NOT_LOADED,
    error: false,
    data: []
  }
};

export const pool = (
  state: PoolStore = poolStore,
  action: CardActions | PoolValueChartActions
) => {
  switch (action.type) {
    // Pool cards
    case ActionTypes.FETCH_POOL_CARDS_LOADING: {
      return {
        ...state,
        card: {
          ...state.card,
          status: ActionTypes.IS_LOADING,
          error: false,
        },
      };
    }

    case ActionTypes.FETCH_POOL_CARDS_SUCCESS: {
      return {
        ...state,
        card: {
          ...state.card,
          status: ActionTypes.LOADED,
          error: false,
          totalSupply: action.data.totalSupply,
          poolValue: action.data.poolValue,
        },
      };
    }

    case ActionTypes.FETCH_POOL_CARDS_ERROR: {
      return {
        ...state,
        card: {
          ...state.card,
          status: ActionTypes.LOADING_FAILED,
          error: true,
        },
      };
    }
    
    // Pool value chart
    case ActionTypes.FETCH_POOL_VALUE_CHART_DATA_LOADING: {
      return {
        ...state,
        valueChart: {
          ...state.valueChart,
          status: ActionTypes.IS_LOADING,
          error: false,
        },
      };
    }

    case ActionTypes.FETCH_POOL_VALUE_CHART_DATA_SUCCESS: {
      return {
        ...state,
        valueChart: {
          ...state.valueChart,
          status: ActionTypes.LOADED,
          error: false,
          data: state.valueChart.data.concat(action.data)
        },
      };
    }

    case ActionTypes.FETCH_POOL_VALUE_CHART_DATA_ERROR: {
      return {
        ...state,
        valueChart: {
          ...state.valueChart,
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
