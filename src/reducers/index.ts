import { combineReducers } from "redux";
import { loans } from "./loans.reducer";
import { LoanStore } from "../types/loans.types";
import { votes } from "./votes.reducer";
import { VoteStore } from "../types/votes.types";
import { prices } from "./price.reducer";
import { PriceStore } from "../types/price.types";
import { farms } from "./farm.reducer";
import { FarmStore} from "../types/farm.types";
import { pool } from "./pool.reducer";
import { PoolStore } from "../types/pool/index.types";

export interface Store {
  loans: LoanStore;
  votes: VoteStore;
  prices: PriceStore;
  farms: FarmStore;
  pool: PoolStore;
}

export default combineReducers<Store>({
  loans: loans,
  votes: votes,
  prices: prices,
  farms: farms,
  pool: pool
});
