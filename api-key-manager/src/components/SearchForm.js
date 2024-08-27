import React, { useState } from "react";
import "./SearchForm.css";

function SearchForm({ setSearch }) {
  const [keyword, setKeyword] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(keyword);
  };

  return (
    <form onSubmit={handleSearch} className="search-form">
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search API Key"
        className="search-input"
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
