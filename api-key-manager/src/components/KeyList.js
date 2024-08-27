import React from "react";
import "./KeyList.css";

function KeyList({ keys, filter, logUsage }) {
  const filteredKeys = keys
    .filter(
      (key) =>
        key.category.includes(filter.category) &&
        (!filter.search || key.apiKey.includes(filter.search))
    )
    .filter((key) => !key.expiryDate || new Date(key.expiryDate) >= new Date());

  return (
    <ul className="key-list">
      {filteredKeys.length > 0 ? (
        filteredKeys.map((key, index) => (
          <li key={index} className="key-item">
            <strong>{key.apiKey}</strong> (Category: {key.category})<br />
            Usage Count: {key.usageCount}
            <br />
            Expiry Date: {key.expiryDate || "N/A"}
            <button onClick={() => logUsage(index)} className="log-button">
              Log Usage
            </button>
          </li>
        ))
      ) : (
        <li className="key-item">No keys found for this filter.</li>
      )}
    </ul>
  );
}

export default KeyList;
