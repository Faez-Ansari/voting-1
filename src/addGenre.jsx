const [genre, setGenre] = useState("");

function handleGenreChange(genre) {
  setGenre(genre);
}

function handleGenreSubmit() {
  console.log(genre);
  setGenre("");
}

return (
  <div>
    <input
      type="text"
      placeholder="Enter candidate name"
      onChange={(e) => handleGenreChange(e.target.value)}
    />
    <button onClick={handleGenreSubmit}>Submit</button>
  </div>
);
