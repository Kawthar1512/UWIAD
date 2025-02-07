import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./Nav.css";
import NavBar from "./components/Navbar.jsx";
import Section1 from "./components/Section1.jsx";
import Section2 from "./components/Section2.jsx";
import ScrollEffects from "./components/Scroll.jsx";
import ImageGallery from "./components/Gallery.jsx";
import Accordion from "./components/FAQ.jsx";
import Footer from "./components/Footer.jsx";
import Payment from "./components/Payment.jsx";

export default function App() {
  return (
    <Router>
      <ScrollEffects />
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Section1 />
              <Section2 />
              <ImageGallery />
              <Accordion />
              <Footer />
            </>
          }
        />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}
