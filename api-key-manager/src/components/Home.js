import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">API Key Manager</h1>
      <p className="home-description">
        Add, view, edit, and delete keys as needed.
      </p>
      <Link to="/keys" className="start-button">
        Manage API Keys
      </Link>
    </div>
  );
}

export default Home;
