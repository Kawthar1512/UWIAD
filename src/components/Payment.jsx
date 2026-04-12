import React, { useState } from "react";
import "../Payment.css";

import confetti from "canvas-confetti";
import paystack from "../assets/paystack.png";

export default function Payment() {
  const [showPopup, setShowPopup] = useState(false);

  function handleDonateClick() {
    setShowPopup(true);

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  }

  // const payment = document.getElementsByClassName("payment-section");
  // const disp = document.getElementsByClassName("paystack-btn");
  function DiplayError() {
    alert(
      "Paystack is not available at the moment, kindly transfer direct to the Foundation Account details provided, Thank you!",
    );
  }

  return (
    <>
      <section className="payment-section">
        <h1 className="thankyou">Thank you for your generosity!</h1>
        <p className="paym">
          You can make donation through any of the payment gateways provided
          below.
        </p>
        <p>
          You donate through paystack or transfer directly into the foundation
          bank account
        </p>
        <button className="paystack-btn" onClick={DiplayError}>
          <img src={paystack} alt="" className="paystack-img" />
          Pay with Paystack
        </button>
        {/* <p className="separator-text">OR</p> */}
        <p>Transfer directly to the Foundation Bank Account:</p>

        <div className="account-details">
          <h4>Account Details</h4>
          <h2 className="account-number">1304616483</h2>
          <h3>BANK NAME: PROVIDUS</h3>
          <h3>United Women Initiative Against Depression Foundation</h3>
        </div>
        <p className="separator-text">OR</p>
        <div className="account-details bb">
          <h2 className="account-number">1030014395</h2>
          <h3>BANK NAME: UBA</h3>
          <h3>United Women Initiative Against Depression Foundation</h3>
        </div>
        <p className="after">
          After making payment, please click on the I have made payment buton
          below
        </p>

        <button className="donated" onClick={handleDonateClick}>
          I have donated
        </button>
        {showPopup && (
          <div className="popup-overlay">
            <div className="popup">
              <h2>🎉 Yippee!</h2>
              <p>You just saved a life ❤️</p>
              <p className="small-text">
                Thank you for your kindness and support.
              </p>
            </div>
          </div>
        )}
      </section>
      {/* <Footer /> */}
    </>
  );
}
