import React, { useEffect, useState } from "react";
import { Table } from "antd";
import AddGenre from "./addGenre";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Logout from "./components/logout";

const voteCountColumn = [
  {
    title: "Genre",
    dataIndex: "genreName",
    key: "genre",
  },
  {
    title: "Count",
    dataIndex: "count",
    key: "count",
  },
];

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
  const [genres, setGenres] = useState([]);
  const [votes, setVotes] = useState([]);
  const [voteCount, setVoteCount] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:2000/login", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("id_token")}`,
        },
      })
      .then((res) => {
        if (res.data.user.role !== "admin") {
          navigate("/");
        } else {
          axios.get("http://localhost:2000/genres").then((res) => {
            setGenres(res.data.genres);
          });
          axios.get("http://localhost:2000/votecount").then((res) => {
            console.log(res.data);
            setVoteCount(res.data.data);
          });
          axios.get("http://localhost:2000/votes").then((res) => {
            console.log(res.data);

            let votes = res.data.data.map((vote) => {
              return {
                username: vote.user,
                vote: vote.genreName,
              };
            });

            setVotes(votes);
          });
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          navigate("/");
        }
      });
  }, []);

  return (
    <div>
      <button>
        <Logout />
      </button>
      <h1 className="font-bold text-3xl text-center">Votes</h1>
      <Table columns={columns} dataSource={votes} />
      <h1 className="font-bold text-3xl text-center">Vote Count</h1>
      <Table columns={voteCountColumn} dataSource={voteCount} />
      <AddGenre />
    </div>
  );
};

export default App;
