import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";  // optional, if you want custom CSS

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1>NexaTask</h1>
        <p>Your daily task manager. Stay organized, stay ahead.</p>
        <Link to="/dashboard">
          <button className="get-started-btn">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
