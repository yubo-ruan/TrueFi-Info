// Reducer state
export interface PoolStore {
    card: {
      status: string;
      error: boolean;
      totalSupply: number;
      poolValue: number;
    };
  }