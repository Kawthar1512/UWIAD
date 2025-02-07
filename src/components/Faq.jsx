import React, { useState } from "react";
import { motion } from "framer-motion";
import faq from "../assets/faq.png";
import "../Faq.css";

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
      <motion.div
        className="panel"
        style={{ maxHeight: isActive ? "100px" : "0" }}
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isActive ? 1 : 0,
          height: isActive ? "100px" : "0",
        }}
        transition={{
          duration: 0.5, // Duration of animation
          delay: 0.2, // Delay the animation by 0.2s
          ease: "easeInOut", // Smooth easing for the animation
        }}
      >
        <p>{content}</p>
      </motion.div>
    </div>
  );
};

const Accordion = () => {
  const accordionData = [
    {
      title: "Is my Personal Information secure?",
      content: "Yes, your personal information is 100% secure on our website",
    },
    {
      title: "What payment methods do you accept?",
      content:
        "We accept payment through paystack or you can make direct transfer into the foundation's Bank account",
    },

    {
      title: "What is the minimum donation amount?",
      content:
        "We have no  minimum donation amount, you can donate any amount you can afford. ",
    },
    {
      title: "Can  I donate good/services instead of money?",
      content:
        "Absolutely! Kindly send us an email or message us on any of our social media handles",
    },
    {
      title: "Do I have to be a member to donate? ",
      content: "No, you don’t have to be a member to donate",
    },
  ];

  return (
    <section className="faq-sec">
      <img src={faq} alt="" className="faq-img" />

      <motion.h2
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Frequently Asked Questions
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mailbox"
      >
        You have other questions? Email us at{" "}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=uwiadfoundation@gmail.com"
          target="_blank"
        >
          uwiadfoundation@gmail.com{" "}
        </a>
      </motion.p>

      {accordionData.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </section>
  );
};

export default Accordion;
