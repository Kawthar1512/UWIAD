import React from "react";
import "./App.css";
import "./Nav.css"
import NavBar from "./components/Navbar.jsx";
import Section1 from "./components/Section1.jsx";
import Section2 from "./components/Section2.jsx";
import ScrollEffects from "./components/scroll.jsx";
import ImageGallery from "./components/Gallery.jsx";
import Accordion from "./components/FAQ.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <ScrollEffects />
      <NavBar />
      <Section1 />
      <Section2 />
      <ImageGallery />
      <Accordion />
      <Footer />
    </>
  );
}
