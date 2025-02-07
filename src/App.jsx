import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./Nav.css";
import NavBar from "./components/Navbar.jsx";
import Section1 from "./components/Section1.jsx";
import Section2 from "./components/Section2.jsx";
import ImageGallery from "./components/Gallery.jsx";
import Accordion from "./components/Faq.jsx";
import Footer from "./components/Footer.jsx";
import Payment from "./components/Payment.jsx";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div id="home">
                <Section1 />
              </div>
              <div id="about">
                <Section2 />
              </div>
              <div id="gallery">
                <ImageGallery />
              </div>
              <div id="contact">
                <Accordion />
                <Footer />
              </div>
            </>
          }
        />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}
