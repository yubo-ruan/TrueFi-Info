import { PoolChartDataItem } from "./valueChart.types";
import { PoolCurvedChartDataItem } from "./curveChart.types";
import { PoolCompositionChartDataItem } from "./compositionChart.types";

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
  };
  curveChart: {
    status: string;
    error: boolean;
    data: PoolCurvedChartDataItem[];
  },
  compositionChart: {
    status: string;
    error: boolean;
    data: PoolCompositionChartDataItem[];
    loanTokenSet: Array<string | number>
  }
}