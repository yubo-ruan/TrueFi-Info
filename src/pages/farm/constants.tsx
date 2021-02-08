import { Tag, Typography } from 'antd';
const { Text } = Typography;

export interface ColumnInterface {
  title: string;
  dataIndex: string;
  key: string;
  render: (text: number) => JSX.Element;
}

export const columns: ColumnInterface[] = [
  {
      title: 'Pool',
      dataIndex: 'pool',
      key: 'pool',
      render: (text) => <Text>{text}</Text>,
  },
  {
    title: 'DailyRate',
    dataIndex: 'dailyRate',
    key: 'dailyRate',
    render: (text) => <Tag color='geekblue' key={text}>{text.toFixed(2)} %</Tag>,
  },
  {
    title: 'WeeklyRate',
    dataIndex: 'weeklyRate',
    key: 'weeklyRate',
    render: (text) => <Tag color='geekblue' key={text}>{text.toFixed(2)} %</Tag>,
  },
  {
    title: 'APY',
    dataIndex: 'APY',
    key: 'APY',
    render: (text) => <Tag color='volcano' key={text}>{text.toFixed(2)} %</Tag>,
  },
  {
      title: 'totalFarmRewards',
      dataIndex: 'totalFarmRewards',
      key: 'totalFarmRewards',
      render: (text) => <Text>{text.toFixed(0)} TRU</Text>,
  },
  {
      title: 'Pool Value',
      dataIndex: 'totalStakedValue',
      key: 'totalStakedValue',
      render: (text) => <Text>${text.toFixed(0)}</Text>,
  },
  {
      title: 'totalClaimedRewards',
      dataIndex: 'totalClaimedRewards',
      key: 'totalClaimedRewards',
      render: (text) => <Text>{text.toFixed(0)} TRU</Text>,
  },
];