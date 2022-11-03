import React from "react";
import "../style/Navbar.css";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="navbar-container">
      <div className="nav_cont">
        <img src="./pingu_logo.png" alt="" width="300rem" />
        <div className="nav_orange">
          <p className="nav-title">Penguin</p>
          <p>They can’t fly, you can</p>
          <Link to={`/about`} className="nav-link">
            <p>About</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
