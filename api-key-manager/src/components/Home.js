import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">Welcome to API Key Manager</h1>
        <p className="hero-description">
          Manage your API keys efficiently with this tool.
        </p>
        <Link to="/keys" className="get-started-button">
          Get Started
        </Link>
      </div>
      <div className="features-section">
        <div className="feature">
          <h2 className="feature-title">Organize Your Keys</h2>
          <p className="feature-description">
            Keep all your API keys neatly categorized for quick access.
          </p>
        </div>
        <div className="feature">
          <h2 className="feature-title">Monitor Usage</h2>
          <p className="feature-description">
            Track how often your API keys are used and stay within limits.
          </p>
        </div>
        <div className="feature">
          <h2 className="feature-title">View Analytics</h2>
          <p className="feature-description">
            Access detailed reports and insights to optimize your API usage.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
