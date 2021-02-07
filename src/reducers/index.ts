import { combineReducers } from "redux";
import { loans } from "./loans.reducer";
import { LoanStore } from "../types/loans.types";
import { votes } from "./votes.reducer";
import { VoteStore } from "../types/votes.types";

export interface Store {
  loans: LoanStore;
  votes: VoteStore;
}

export default combineReducers<Store>({
  loans: loans,
  votes: votes,
});
