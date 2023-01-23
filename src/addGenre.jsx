import React, { useState } from "react";

const AddGenre = () => {
  const [genre, setGenre] = useState("");

  function handleGenreChange(genre) {
    setGenre(genre);
  }

  function handleGenreSubmit() {
    console.log(genre);
    setGenre("");
  }

  return (
    <div className="">
      <h1 className="font-bold">Add Genre</h1>
      <div>
        <input
          type="text"
          placeholder="Enter candidate name"
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          onChange={(e) => handleGenreChange(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleGenreSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddGenre;
