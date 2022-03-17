import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <header>
        <nav className="navbar">
          <h3>Surfing to the Countries</h3>
          <ul className="ullist">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Region</a>
            </li>
            <li>
              <a href="/">Continent</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
