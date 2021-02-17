import { ActionTypes } from "../../actions/types";

// Actions
export interface InitFetchPoolCompositionChartData {
    type: ActionTypes.FETCH_POOL_COMPOSITION_CHART_DATA_LOADING;
}

export interface FetchPoolCompositionChartData {
    type: ActionTypes.FETCH_POOL_COMPOSITION_CHART_DATA;
}

export interface FetchPoolCompositionChartDataSuccess {
    type: ActionTypes.FETCH_POOL_COMPOSITION_CHART_DATA_SUCCESS;
    data: PoolCompositionChartDataItem[];
    loanTokens: string | number;
}

export interface FetchPoolCompositionChartDataError {
    type: ActionTypes.FETCH_POOL_COMPOSITION_CHART_DATA_ERROR;
    message: string;
}

export type PoolCompositionChartActions =
    | InitFetchPoolCompositionChartData
    | FetchPoolCompositionChartData
    | FetchPoolCompositionChartDataSuccess
    | FetchPoolCompositionChartDataError;


// Pool composition chart data item
export interface PoolCompositionChartDataItem {
    TUSD: number;
    yCRV: number;
    blockNumber: number;
    Loan5: number;
    Loan7: number;
    Loan6: number;
    Loan11: number;
    Loan15: number;
    Loan14: number;
    Loan10: number;
    Loan1: number;
    Loan12: number;
    Loan2: number;
    Loan8: number;
    Loan3: number;
    Loan13: number;
}