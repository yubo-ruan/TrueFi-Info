export enum ActionTypes {
  // Status
  LOADED = "LOADED",
  NOT_LOADED = "NOT_LOADED",
  IS_LOADING = "IS_LOADING",
  LOADING_FAILED = "LOADING_FAILED",

  // Fetch logs for loans
  FETCH_LOANS_LOGS_LOADING = "FETCH_LOANS_LOGS_LOADING",
  FETCH_LOANS_LOGS = "FETCH_LOANS_LOGS",
  FETCH_LOANS_LOGS_SUCCESS = "FETCH_LOANS_LOGS_SUCCESS",
  FETCH_LOANS_LOGS_ERROR = "FETCH_LOANS_LOGS_ERROR",

  // Fetch loans
  FETCH_LOANS_LOADING = "FETCH_LOANS_LOADING",
  FETCH_LOANS = "FETCH_LOANS",
  FETCH_LOANS_SUCCESS = "FETCH_LOANS_SUCCESS",
  FETCH_LOANS_ERROR = "FETCH_LOANS_ERROR",

  // Fetch logs for votes
  FETCH_VOTES_LOGS_LOADING = "FETCH_VOTES_LOGS_LOADING",
  FETCH_VOTES_LOGS = "FETCH_VOTES_LOGS",
  FETCH_VOTES_LOGS_SUCCESS = "FETCH_VOTES_LOGS_SUCCESS",
  FETCH_VOTES_LOGS_ERROR = "FETCH_VOTES_LOGS_ERROR",

  // Fetch votes
  FETCH_VOTES_LOADING = "FETCH_VOTES_LOADING",
  FETCH_VOTES = "FETCH_VOTES",
  FETCH_VOTES_SUCCESS = "FETCH_VOTES_SUCCESS",
  FETCH_VOTES_ERROR = "FETCH_VOTES_ERROR",

  // Fetch TFI price
  FETCH_TFI_PRICE_LOADING = "FETCH_TFI_PRICE_LOADING",
  FETCH_TFI_PRICE = "FETCH_TFI_PRICE",
  FETCH_TFI_PRICE_SUCCESS = "FETCH_TFI_PRICE_SUCCESS",
  FETCH_TFI_PRICE_ERROR = "FETCH_TFI_PRICE_ERROR",

  // Fetch TRU price
  FETCH_TRU_PRICE_LOADING = "FETCH_TRU_PRICE_LOADING",
  FETCH_TRU_PRICE = "FETCH_TRU_PRICE",
  FETCH_TRU_PRICE_SUCCESS = "FETCH_TRU_PRICE_SUCCESS",
  FETCH_TRU_PRICE_ERROR = "FETCH_TRU_PRICE_ERROR",
  
  // Fetch APY
  FETCH_APY_LOADING = "FETCH_APY_LOADING",
  FETCH_APY = "FETCH_APY",
  FETCH_APY_SUCCESS = "FETCH_APY_SUCCESS",
  FETCH_APY_ERROR = "FETCH_APY_ERROR",
  
  // Fetch TRU
  FETCH_TRU_LOADING = "FETCH_TRU_LOADING",
  FETCH_TRU = "FETCH_TRU",
  FETCH_TRU_SUCCESS = "FETCH_TRU_SUCCESS",
  FETCH_TRU_ERROR = "FETCH_TRU_ERROR",
  
  // Fetch pool card
  FETCH_POOL_CARDS_LOADING = "FETCH_POOL_CARDS_LOADING",
  FETCH_POOL_CARDS = "FETCH_POOL_CARDS",
  FETCH_POOL_CARDS_SUCCESS = "FETCH_POOL_CARDS_SUCCESS",
  FETCH_POOL_CARDS_ERROR = "FETCH_POOL_CARDS_ERROR", 
  
  // Fetch pool value chart data
  FETCH_POOL_VALUE_CHART_DATA_LOADING = "FETCH_POOL_VALUE_CHART_DATA_LOADING",
  FETCH_POOL_VALUE_CHART_DATA = "FETCH_POOL_VALUE_CHART_DATA",
  FETCH_POOL_VALUE_CHART_DATA_SUCCESS = "FETCH_POOL_VALUE_CHART_DATA_SUCCESS",
  FETCH_POOL_VALUE_CHART_DATA_ERROR = "FETCH_POOL_VALUE_CHART_DATA_ERROR", 
  
  // Fetch pool composition chart data
  FETCH_POOL_COMPOSITION_CHART_DATA_LOADING = "FETCH_POOL_COMPOSITION_CHART_DATA_LOADING",
  FETCH_POOL_COMPOSITION_CHART_DATA = "FETCH_POOL_COMPOSITION_CHART_DATA",
  FETCH_POOL_COMPOSITION_CHART_DATA_SUCCESS = "FETCH_POOL_COMPOSITION_CHART_DATA_SUCCESS",
  FETCH_POOL_COMPOSITION_CHART_DATA_ERROR = "FETCH_POOL_COMPOSITION_CHART_DATA_ERROR",
  
  // Fetch pool value curve data
  FETCH_POOL_CURVE_CHART_DATA_LOADING = "FETCH_POOL_CURVE_CHART_DATA_LOADING",
  FETCH_POOL_CURVE_CHART_DATA = "FETCH_POOL_CURVE_CHART_DATA",
  FETCH_POOL_CURVE_CHART_DATA_SUCCESS = "FETCH_POOL_CURVE_CHART_DATA_SUCCESS",
  FETCH_POOL_CURVE_CHART_DATA_ERROR = "FETCH_POOL_CURVE_CHART_DATA_ERROR",
}
