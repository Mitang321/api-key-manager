import React from "react";
import "./KeyList.css";

function KeyList({ keys, filter, logUsage }) {
  const filteredKeys = keys.filter((key) => key.category.includes(filter));

  return (
    <ul className="key-list">
      {filteredKeys.length > 0 ? (
        filteredKeys.map((key, index) => (
          <li key={index} className="key-item">
            <strong>{key.apiKey}</strong> (Category: {key.category})<br />
            Usage Count: {key.usageCount}
            <button onClick={() => logUsage(index)} className="log-button">
              Log Usage
            </button>
          </li>
        ))
      ) : (
        <li className="key-item">No keys found for this category.</li>
      )}
    </ul>
  );
}

export default KeyList;
