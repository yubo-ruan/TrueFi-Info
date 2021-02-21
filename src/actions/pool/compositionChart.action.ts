import { ActionTypes } from "../types";
import * as Types from "../../types/pool/compositionChart.types";

// Actions
export const initFetchPoolCompositionChartData = (): Types.InitFetchPoolCompositionChartData => {
    return {
        type: ActionTypes.FETCH_POOL_COMPOSITION_CHART_DATA_LOADING,
    };
};

export const fetchPoolCompositionChartData = (): Types.FetchPoolCompositionChartData => {
    return {
        type: ActionTypes.FETCH_POOL_COMPOSITION_CHART_DATA,
    };
};

export const fetchPoolCompositionChartDataSuccess = (
    data: Types.PoolCompositionChartDataItem[],
    loanTokens: string | number
): Types.FetchPoolCompositionChartDataSuccess => {
    return {
        type: ActionTypes.FETCH_POOL_COMPOSITION_CHART_DATA_SUCCESS,
        data: data,
        loanTokens: loanTokens
    };
};

export const fetchFetchPoolCompositionChartDataFailure = (
    message: string
): Types.FetchPoolCompositionChartDataError => {
    return {
        type: ActionTypes.FETCH_POOL_COMPOSITION_CHART_DATA_ERROR,
        message: message,
    };
};