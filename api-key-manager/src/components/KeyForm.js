import React, { useState } from "react";
import "./KeyForm.css";

function KeyForm({ addKey }) {
  const [apiKey, setApiKey] = useState("");
  const [category, setCategory] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (apiKey && category) {
      addKey({ apiKey, category, usageCount: 0, expiryDate });
      setApiKey("");
      setCategory("");
      setExpiryDate("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="key-form">
      <input
        type="text"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
        placeholder="Enter API Key"
        required
        className="key-input"
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Enter Category"
        required
        className="key-input"
      />
      <input
        type="date"
        value={expiryDate}
        onChange={(e) => setExpiryDate(e.target.value)}
        className="key-input"
      />
      <button type="submit" className="key-button">
        Add Key
      </button>
    </form>
  );
}

export default KeyForm;
