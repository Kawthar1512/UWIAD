import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import uwiadlogo from "../assets/uwiadlogo.png";
import "../Nav.css";
import { X, Menu } from "lucide-react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <div
        className={`ForNav ${isScrolled ? "shadow-on-scroll" : ""}`}
        ref={navRef}
      >
        <nav>
          {/* My Logo Section */}
          <Link to="/">
            <img src={uwiadlogo} alt="uwiad-logo" className="uwiadlogo" />
          </Link>

          {/* Hamburger Icon */}
          <div className="hamburger" onClick={toggleMenu}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </div>

          {/* Navigation Links */}
          <div className={`nav-links-container ${isMenuOpen ? "show" : ""}`}>
            <div className="for-links-alone">
              <Link
                to="/"
                className="nav-links active"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="nav-links"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/gallery"
                className="nav-links"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className="nav-links"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>

            {/* Donate Button */}
            <div className={`navButton ${isMenuOpen ? "show" : ""}`}>
              <Link
                to="/payment"
                className="donate-btn"
                onClick={() => setIsMenuOpen(false)}
              >
                Donate Now
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
