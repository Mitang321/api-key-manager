import React from "react";
import "./Analytics.css";

function Analytics({ keys }) {
  const totalKeys = keys.length;
  const totalUsage = keys.reduce((sum, key) => sum + key.usageCount, 0);

  return (
    <div className="analytics">
      <h2>Usage Analytics</h2>
      <p>Total API Keys: {totalKeys}</p>
      <p>Total Usage Count: {totalUsage}</p>
    </div>
  );
}

export default Analytics;
