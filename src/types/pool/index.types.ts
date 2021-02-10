import { PoolChartDataItem } from "./valueChart.types";

// Reducer state
export interface PoolStore {
    card: {
      status: string;
      error: boolean;
      totalSupply: number;
      poolValue: number;
    };
    valueChart: {
      status: string;
      error: boolean;
      data: PoolChartDataItem[];
    }
  }