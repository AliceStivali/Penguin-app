import React from "react";
import '../style/Navbar.css'

export function Navbar() {
  return (
    <div className="navbar-container">
      <div className='nav_cont'>
        <img src="./pingu_logo.png" alt="" width="300rem" />
        <div className="nav_orange">
            <p>Penguin</p>
            <p>They can’t fly, you can</p>
            <p>About</p>
        </div>
      </div>
    </div>
  );
}
