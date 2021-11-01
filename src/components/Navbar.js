import React from "react";
import { Link } from "react-router-dom";
import "./components.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/">
          <h1>React Blog</h1>
        </Link>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/write">Write</Link>
        </div>
      </div>
    </div>
  );
}
