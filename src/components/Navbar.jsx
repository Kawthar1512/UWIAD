import React, { useState } from "react";
import uwiadlogo from "../assets/uwiadlogo.png";
import "../Nav.css"; // Ensure your CSS file path is correct

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        <div className="ForNav">
          <nav>
            <a href="#">
              <img src={uwiadlogo} alt="uwiad-logo" className="uwiadlogo" />
            </a>

            {/* Hamburger Icon for Mobile View */}
            <div className="hamburger" onClick={toggleMenu}>
              ☰
            </div>

            {/* Navigation Links */}
            <div className={`nav-links-container ${isMenuOpen ? "show" : ""}`}>
              <a href="#home" className="nav-links active">Home</a>
              <a href="#about" className="nav-links">About us</a>
              <a href="#gallery" className="nav-links">Gallery</a>
              <a href="#contact" className="nav-links">Contact</a>
            </div>

            {/* Buttons */}
            <div className={`navButton ${isMenuOpen ? "show" : ""}`}>
              <button className="donate-btn">Donate Now</button>
              <button className="join-btn">Join Us</button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
