import React, { useEffect } from "react";
import { Table } from "antd";
import AddGenre from "./addGenre";
import { Link, useNavigate } from "react-router-dom";

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

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:2000/login", {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data === "Unauthorized") {
          navigate("/");
        }

        if (res.data.role !== "admin") {
          navigate("/");
        }
      });
  }, []);

  return (
    <div>
      <button>
        <Link
          className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700"
          to={"/"}
        >
          Home
        </Link>
      </button>
      <h1 className="font-bold text-3xl text-center">Votes</h1>
      <Table columns={columns} dataSource={data} />
      <AddGenre />
    </div>
  );
};

export default App;
