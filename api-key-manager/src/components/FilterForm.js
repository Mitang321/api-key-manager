import React, { useState } from "react";
import "./FilterForm.css";

function FilterForm({ setFilter }) {
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilter(category);
  };

  return (
    <form onSubmit={handleSubmit} className="filter-form">
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Filter by Category"
        className="filter-input"
      />
      <button type="submit" className="filter-button">
        Filter
      </button>
    </form>
  );
}

export default FilterForm;
