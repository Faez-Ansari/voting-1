import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Voting() {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [genre, setGenre] = useState(["Rap", "Rock", "Jazz", "Pop", "Metal"]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (isSubmitted) {
    return (
      <div className="flex items-center justify-center">
        <h1>Selected Genre: {selectedGenre}</h1>
      </div>
    );
  }

  return (
    <div className="">
      <button>
        <Link
          className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700"
          to={"/"}
        >
          Home
        </Link>
      </button>
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
