import React, { useState } from "react";
// import './Accordion.css';
import faq from "../assets/faq.png";

const AccordionItem = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <button
        className={`accordion ${isActive ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        {title}
        <span>{isActive ? "\u2212" : "\u002B"}</span>
      </button>
      <div className="panel" style={{ maxHeight: isActive ? "100px" : "0" }}>
        <p>{content}</p>
      </div>
    </div>
  );
};

const Accordion = () => {
  const accordionData = [
    {
      title: "Is my Personal Information secure?",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "What payment methods do you accept?",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    
    {
      title: "What is the minimum donation amount?",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      title: "Can  I donate good/services instead of money?",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      title: "Do I have to be a member to donate? ",
      content:
        "No, you don’t have to be a member to donate. There are many additional ways to help build the Internet and make it stronger. You can follow us on social media",
    },
  ];

  return (
    <section className="faq-sec">
            <img src={faq} alt="" className="faq-img" />

      <h2>Frequently Asked Questions</h2>
      <p>You have other questions? Email us at <a href="#">uwiadfoundation@gmail.com </a></p>

      {accordionData.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </section>
  );
};

export default Accordion;
