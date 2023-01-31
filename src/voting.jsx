import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logout from "./components/logout";
export default function Voting() {
  const [user, setUser] = useState({});
  const [selectedGenre, setSelectedGenre] = useState("");
  const [genre, setGenre] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:2000/login", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("id_token")}`,
        },
      })
      .then((res) => {
        setUser(res.data.user);
        axios.get("http://localhost:2000/genres").then((res) => {
          setGenre(res.data.genres);
          setLoading(false);
        });
      })
      .catch((err) => {
        if (err.response.status === 401) {
          navigate("/");
        }
      });
  }, []);

  async function handleSubmit() {
    await axios.post("http://localhost:2000/vote", {
      genreName: selectedGenre,
      username: user.username,
    });
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <div className="flex items-center justify-center">
        <h1>Selected Genre: {selectedGenre}</h1>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center fixed h-full left-0 w-full justify-center">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (user?.vote) {
    return (
      <div className="flex flex-col fixed h-full w-full items-center justify-center">
        <h1>You have already voted</h1>
        <Logout />
      </div>
    );
  }

  return (
    <div className="">
      <Logout />
      <div className="flex flex-col h-screen justify-center items-center">
        {genre.map((genre) => (
          <div key={genre}>
            <input
              type="checkbox"
              name="genre"
              value={genre}
              checked={selectedGenre == genre}
              onChange={(e) => setSelectedGenre(e.target.value)}
            />
            <label className="genre">{genre}</label>
          </div>
        ))}
        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled={selectedGenre === ""}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
