import { ActionTypes } from "../actions/types";
import { CardActions } from "../types/pool/card.types";
import { PoolValueChartActions } from "../types/pool/valueChart.types";
import { PoolCurveChartActions } from "../types/pool/curveChart.types";
import { PoolCompositionChartActions } from './../types/pool/compositionChart.types';
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
  },
  curveChart: {
    status: ActionTypes.NOT_LOADED,
    error: false,
    data: []
  },
  compositionChart: {
    status: ActionTypes.NOT_LOADED,
    error: false,
    data: [],
    loanTokenSet: []
  }
};

export const pool = (
  state: PoolStore = poolStore,
  action: CardActions | PoolValueChartActions | PoolCurveChartActions | PoolCompositionChartActions
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

    // Pool curve chart
    case ActionTypes.FETCH_POOL_CURVE_CHART_DATA_LOADING: {
      return {
        ...state,
        curveChart: {
          ...state.curveChart,
          status: ActionTypes.IS_LOADING,
          error: false,
        },
      };
    }

    case ActionTypes.FETCH_POOL_CURVE_CHART_DATA_SUCCESS: {
      return {
        ...state,
        curveChart: {
          ...state.curveChart,
          status: ActionTypes.LOADED,
          error: false,
          data: state.valueChart.data.concat(action.data)
        },
      };
    }

    case ActionTypes.FETCH_POOL_CURVE_CHART_DATA_ERROR: {
      return {
        ...state,
        curveChart: {
          ...state.curveChart,
          status: ActionTypes.LOADING_FAILED,
          error: true,
        },
      };
    }

    // Pool composition chart
    case ActionTypes.FETCH_POOL_COMPOSITION_CHART_DATA_LOADING: {
      return {
        ...state,
        compositionChart: {
          ...state.compositionChart,
          status: ActionTypes.IS_LOADING,
          error: false,
        },
      };
    }

    case ActionTypes.FETCH_POOL_COMPOSITION_CHART_DATA_SUCCESS: {
      return {
        ...state,
        compositionChart: {
          ...state.compositionChart,
          status: ActionTypes.LOADED,
          error: false,
          data: state.compositionChart.data.concat(action.data),
          loanTokenSet: state.compositionChart.loanTokenSet.concat(action.loanTokens),
        },
      };
    }

    case ActionTypes.FETCH_POOL_COMPOSITION_CHART_DATA_ERROR: {
      return {
        ...state,
        compositionChart: {
          ...state.compositionChart,
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
