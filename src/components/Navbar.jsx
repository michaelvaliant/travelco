import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk toggle menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle state
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h1>Travel Co</h1>
      </div>
      <div className="navbar__menu-icon" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul
        className={`navbar__links ${isMenuOpen ? "navbar__links--active" : ""}`}
      >
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/search">Search</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
