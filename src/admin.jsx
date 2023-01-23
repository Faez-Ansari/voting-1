import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Username",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "Vote",
    dataIndex: "vote",
    key: "vote",
  },
];

const data = [
  {
    key: "1",
    username: "john brown",
    vote: "rock",
  },
  {
    key: "2",
    username: "jim green",
    vote: "metal",
  },
  {
    key: "3",
    username: "Joe Black",
    vote: "rock",
  },
];

const App = () => <Table columns={columns} dataSource={data} />;

export default App;
