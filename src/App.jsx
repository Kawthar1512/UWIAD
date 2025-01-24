import React from "react";
import "./App.css";
import NavBar from "./components/Navbar.jsx";
import Section from "./components/Section.jsx";
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
      <Section />
      <Section2 />
      <ImageGallery />
      <Accordion />
      <Footer />
    </>
  );
}
