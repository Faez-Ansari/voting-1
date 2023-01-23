import React, { useState } from "react";
export default function Voting() {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [genre, setGenre] = useState(["Rap", "Rock", "Jazz", "Pop", "Metal"]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (isSubmitted) {
    return (
      <div>
        <h1>Selected Genre: {selectedGenre}</h1>
      </div>
    );
  }

  return (
    <div>
      <div>
        {genre.map((genre) => (
          <div key={genre}>
            <label className="genre">{genre}</label>
            <input
              type="checkbox"
              name="genre"
              value={genre}
              checked={selectedGenre == genre}
              onChange={(e) => setSelectedGenre(e.target.value)}
            />
          </div>
        ))}
      </div>
      <button
        onClick={() => setIsSubmitted(true)}
        disabled={selectedGenre === ""}
      >
        Submit
      </button>
    </div>
  );
}
