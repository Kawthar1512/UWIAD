import React, { useState } from "react";
import { Link } from "react-router-dom";
import uwiadlogo from "../assets/uwiadlogo.png";
import "../Nav.css";

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
            {/*   this is my Logo Section */}
            <Link to="/">
              <img src={uwiadlogo} alt="uwiad-logo" className="uwiadlogo" />
            </Link>

            {/* My Hamburger Icon for Mobile View */}
            <div className="hamburger" onClick={toggleMenu}>
              ☰
            </div>

            {/* My Navigation Links */}
            <div className={`nav-links-container ${isMenuOpen ? "show" : ""}`}>
              <a href="#home" className="nav-links active">Home</a>
              <a href="#about" className="nav-links">About us</a>
              <a href="#gallery" className="nav-links">Gallery</a>
              <a href="#contact" className="nav-links">Contact</a>
            </div>

            {/* My Buttons */}
            <div className={`navButton ${isMenuOpen ? "show" : ""}`}>
              <Link to="/payment" className="donate-btn">Donate Now</Link>
              {/* <button className="join-btn">Join Us</button> */}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
