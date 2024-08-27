import React, { useState } from "react";
import "./KeyList.css";

function KeyList({ keys, logUsage, editKey, deleteKey }) {
  const [revealedKeys, setRevealedKeys] = useState({});

  const handleReveal = (index) => {
    setRevealedKeys({
      ...revealedKeys,
      [index]: !revealedKeys[index],
    });
  };

  const handleEdit = (index) => {
    const newKey = prompt("Edit API Key:", keys[index].apiKey);
    const newCategory = prompt("Edit Category:", keys[index].category);
    if (newKey && newCategory) {
      editKey(index, { apiKey: newKey, category: newCategory });
    }
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this API key?")) {
      deleteKey(index);
    }
  };

  return (
    <ul className="key-list">
      {keys.map((key, index) => (
        <li key={index} className="key-item">
          <strong>{key.category}</strong>
          <span onClick={() => handleReveal(index)} className="key-text">
            {revealedKeys[index] ? key.apiKey : "****-****-****-****"}
          </span>
          <span className="key-usage">Usage: {key.usageCount}</span>
          <button className="log-button" onClick={() => logUsage(index)}>
            Log Usage
          </button>
          <button className="edit-button" onClick={() => handleEdit(index)}>
            Edit
          </button>
          <button className="delete-button" onClick={() => handleDelete(index)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default KeyList;
