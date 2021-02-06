import { Tag, Typography } from "antd";
const { Text, Link } = Typography;

export interface LoanColumnInterface {
  title: string;
  dataIndex: string;
  key: string;
  render?: (text: number) => JSX.Element;
}

export const loanColumns: LoanColumnInterface[] = [
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
    render: (text) => <Text>${text}</Text>,
  },
  {
    title: "Term",
    dataIndex: "term",
    key: "term",
    render: (text) => (
      <Tag color="geekblue" key={text}>
        {text.toFixed(0)} Days
      </Tag>
    ),
  },
  {
    title: "Apy",
    dataIndex: "apy",
    key: "apy",
    render: (text) => (
      <Tag color="geekblue" key={text}>
        {text.toFixed(2)} %
      </Tag>
    ),
  },
  {
    title: "Borrower",
    key: "borrower",
    dataIndex: "borrower",
    render: (text) => (
      <Link href={"https://etherscan.io/address/" + text} target="_blank">
        {text}
      </Link>
    ),
  },
  {
    title: "Blocknumber",
    key: "blockNumber",
    dataIndex: "blockNumber",
  },
  {
    title: "Profit",
    key: "profit",
    dataIndex: "profit",
    render: (text) => <Text>${text.toFixed(0)}</Text>,
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (text) => (
      <Tag color="volcano" key={text}>
        {text}
      </Tag>
    ),
  },
];

export interface VoteColumnsInterface {
  title: string;
  dataIndex: string;
  key: string;
  render?: (text: number) => JSX.Element;
}
export const voteColumns: VoteColumnsInterface[] = [
  {
    title: "Vote",
    dataIndex: "vote",
    key: "vote",
    render: (text) => (
      <>
        <Text>{text}</Text>
      </>
    ),
  },
  {
    title: "Staked",
    key: "staked",
    dataIndex: "staked",
    render: (text) => <Text>{text.toFixed(2)} TRU</Text>,
  },
  {
    title: "Voter",
    key: "voter",
    dataIndex: "voter",
    render: (text) => (
      <>
        <Link href={"https://etherscan.io/address/" + text} target="_blank">
          {text}
        </Link>
      </>
    ),
  },
  {
    title: "Loan Token Address",
    key: "loanId",
    dataIndex: "loanId",
    render: (text) => (
      <>
        <Link href={"https://etherscan.io/address/" + text} target="_blank">
          {text}
        </Link>
      </>
    ),
  },
  {
    title: "Blocknumber",
    key: "blockNumber",
    dataIndex: "blockNumber",
  },
];
