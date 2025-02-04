import React from "react";

export default function Payment() {
  return (
    <section className="payment-section">
      <h1>Make a Donation</h1>
      <button className="paystack-btn">Pay with Paystack</button>
      <p className="separator-text">OR</p>
      <p>Transfer directly to the Foundation Bank Account:</p>

      <div className="account-details">
        <h4>Account Details</h4>
        <h2 className="account-number">1304616483</h2>
        <p>BANK NAME: PROVIDUS BANK</p>
        <h3>United Women Initiative Against Depression Foundation</h3>
      </div>
    </section>
  );
}
