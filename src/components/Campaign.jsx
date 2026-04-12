import React, { useState } from "react";
import "../Campaign.css";
import can1 from "../assets/cancer1.jpeg"
import can2 from "../assets/cancer2.jpeg"
import { Link } from "react-router-dom";



export default function Campaign() {
  return (
    <>
      <section className="help-section">
        <h1 className="jelo">Help Save a Mother and Her Child</h1>
     <div className="img-divv">
        <img src={can1} alt="" className="im1" />
        <img src={can2} alt="" />

     </div>
     <div className="woman">
        <p>The woman is battling stage 4 breast cancer and recently underwent a double mastectomy. Her child also has a large tumor on her leg. A biopsy has been done, and she urgently needs surgery.

Every contribution, no matter how small, can make a real difference in their lives.</p>
     </div>
      <Link to="/payment">
            <button className="donate-btn-hero">Donate Now</button>
          </Link>
      </section>
    </>
  );
}
