import { combineReducers } from "redux";
import { logs } from "./logs.reducer";
import { LogStore } from "../types/logs.types";
import { loans } from "./loans.reducer";
import { LoanStore } from "../types/loans.types";

export interface Store {
  logs: LogStore;
  loans: LoanStore;
}

export default combineReducers<Store>({
  logs: logs,
  loans: loans,
});
