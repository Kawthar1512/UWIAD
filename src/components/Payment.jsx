import React from "react";
import "../Payment.css";
import paystack from "../assets/paystack.png";
import { footer } from "framer-motion/client";
import Footer from "../components/Footer";

export default function Payment() {
  const payment = document.getElementsByClassName("payment-section");
  const disp = document.getElementsByClassName("paystack-btn");
  function DiplayError() {
    alert("Paystack is not available at the moment, kindly transfer direct to the Foundation Account details provided, Thank you!")
  }

  return (
    <>
      <section className="payment-section">
        <h2>You are about to save a life!</h2>
        <p>
          You can make donation through any of the payment gateways provided
          below.{" "}
        </p>
        <p>
          You donate through paystack or transfer directly into the foundation
          bank account
        </p>
        <button className="paystack-btn" onClick={DiplayError}>
          <img src={paystack} alt="" className="paystack-img" />
          Pay with Paystack
        </button>
        <p className="separator-text">OR</p>
        <p>Transfer directly to the Foundation Bank Account:</p>

        <div className="account-details">
          <h4>Account Details</h4>
          <h2 className="account-number">1304616483</h2>
          <p>BANK NAME: PROVIDUS BANK</p>
          <h3>United Women Initiative Against Depression Foundation</h3>
        </div>
      </section>
      <Footer />
    </>
  );
}
