import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  const [queryText, setQueryText] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {};
  const handleChange = (e: any) => {
    setLoading(true);
    setResults([]);
    setQueryText("");
    e.preventDefault();
    setQueryText(e.target.value);
    const requestOptions: RequestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ searchQuery: queryText }),
    };
    fetch(`/search`, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setResults(data);
        console.log(results);
        // setLoading(false);
      });
  };
  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <div className="input-container">
        <input type="text" value={queryText} onChange={handleChange}></input>
        <button type="submit"> Search </button>
      </div>
      <ul className="autocomplete">
        {results.map((result, index) => (
          <li key={index}>{result["title"]}</li>
        ))}
      </ul>
    </form>
  );
}
