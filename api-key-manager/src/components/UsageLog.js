import React from "react";
import "./UsageLog.css";

function UsageLog({ log }) {
  return (
    <div className="usage-log">
      <h2>Usage Log</h2>
      <ul>
        {log.length > 0 ? (
          log.map((entry, index) => (
            <li key={index} className="log-entry">
              {entry}
            </li>
          ))
        ) : (
          <li>No usage recorded yet.</li>
        )}
      </ul>
    </div>
  );
}

export default UsageLog;
