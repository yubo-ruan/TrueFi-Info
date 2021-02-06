import { Tag, Typography } from "antd";
const { Text, Link } = Typography;

export const loanColumns = [
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
    render: (text: any[]) => <Text>${text}</Text>,
  },
  {
    title: "Term",
    dataIndex: "term",
    key: "term",
    render: (text: number) => (
      <Tag color="geekblue" key={text}>
        {text.toFixed(0)} Days
      </Tag>
    ),
  },
  {
    title: "Apy",
    dataIndex: "apy",
    key: "apy",
    render: (text: number) => (
      <Tag color="geekblue" key={text}>
        {text.toFixed(2)} %
      </Tag>
    ),
  },
  {
    title: "Borrower",
    key: "borrower",
    dataIndex: "borrower",
    render: (text: string) => (
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
    render: (text: number) => <Text>${text.toFixed(0)}</Text>,
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (text: string) => (
      <Tag color="volcano" key={text}>
        {text}
      </Tag>
    ),
  },
];

export const voteColumns = [
  {
    title: "Vote",
    dataIndex: "vote",
    key: "vote",
    render: (text: string) => <Text>{text}</Text>,
  },
  {
    title: "Staked",
    key: "staked",
    dataIndex: "staked",
    render: (text: number) => <Text>{text.toFixed(2)} TRU</Text>,
  },
  {
    title: "Voter",
    key: "voter",
    dataIndex: "voter",
    render: (text: string) => (
      <Link href={"https://etherscan.io/address/" + text} target="_blank">
        {text}
      </Link>
    ),
  },
  {
    title: "Loan Token Address",
    key: "loanId",
    dataIndex: "loanId",
    render: (text: string) => (
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
];
