import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logout from "./components/logout";
export default function Voting() {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [genre, setGenre] = useState(["Rap", "Rock", "Jazz", "Pop", "Metal"]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:2000/login", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("id_token")}`,
        },
      })
      .catch((err) => {
        if (err.response.status === 401) {
          navigate("/");
        }
      });
  }, []);

  if (isSubmitted) {
    return (
      <div className="flex items-center justify-center">
        <h1>Selected Genre: {selectedGenre}</h1>
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
          onClick={() => setIsSubmitted(true)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled={selectedGenre === ""}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
