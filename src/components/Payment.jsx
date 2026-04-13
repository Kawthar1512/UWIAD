import React, { useState } from "react";
import "../Payment.css";
import { PaystackButton } from "react-paystack";
import confetti from "canvas-confetti";
import paystack from "../assets/paystack.png";

export default function Payment() {
  const [showPopup, setShowPopup] = useState(false);
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const isValid = Number(amount) >= 1000;

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
  const config = {
    reference: new Date().getTime().toString(),
    email: "customer@email.com",
    amount: Number(amount || 0) * 100,
    publicKey: "pk_test_9fd498a18de051f30f5e7a878d2449346751d969",
  };
  // const handlePayClick = () => {
  //   if (!amount || Number(amount) <= 0) {
  //     setError("Please enter an amount to continue");
  //     return;
  //   }

  //   setError(""); // clear error if valid
  // };

  const handleSuccess = (reference) => {
    console.log("Payment successful:", reference);

    // trigger your popup + confetti
    setShowPopup(true);

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  const handleClose = () => {
    console.log("Payment closed");
  };
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

        <div className="donation-form">
          <input
            type="number"
            placeholder="Enter amount (₦) || Minimum donation is ₦1000"
            value={amount}
            onChange={(e) => {
              const value = e.target.value;
              setAmount(value);

              if (Number(value) < 1000) {
                setError("Please enter an amount greater than 0");
              } else {
                setError("");
              }
            }}
          />
        </div>

        {/* <PaystackButton
  {...config}
  className="paystack-btn"
  onClick={handlePayClick}
  onSuccess={handleSuccess}
  onClose={handleClose}
>
  <img src={paystack} alt="" className="paystack-img" />
  Pay with Paystack
</PaystackButton> */}
        {error && <p className="hint">{error}</p>}
        {isValid ? (
  <PaystackButton
    {...config}
    className="paystack-btn"
    onSuccess={handleSuccess}
    onClose={handleClose}
  >
    <img src={paystack} alt="" className="paystack-img" />
    Pay with Paystack
  </PaystackButton>
) : (
  <button
    className="paystack-btn disabled"
    onClick={() => setError("Minimum donation is ₦1000")}
  >
    <img src={paystack} alt="" className="paystack-img" />
    Pay with Paystack
  </button>
)}
        {/* <div
          className="showw"
          onClick={() => {
            if (!amount || Number(amount) <= 0) {
              setError("Please enter an amount to continue");
            } else {
              setError("");
            }
          }}
        >
          <PaystackButton
            {...config}
            className="paystack-btn"
            onSuccess={handleSuccess}
            onClose={handleClose}
          >
            {" "}
            <img src={paystack} alt="" className="paystack-img" /> Pay with
            Paystack
          </PaystackButton>
        </div> */}

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
