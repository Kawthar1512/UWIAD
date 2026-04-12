import React from "react";
import "../Campaign.css";
import can1 from "../assets/cancer1.jpeg";
import can2 from "../assets/cancer2.jpeg";
import { Link } from "react-router-dom";

export default function Campaign() {
 const raised = 3700000;   // 3.7 million
const goal = 7000000;     // 7 million
const percent = (raised / goal) * 100;

  return (
    <section className="help-section">
      <h1 className="jelo">Help Save a Mother and Her Child</h1>

{/* PROGRESS BAR */}
      <div className="progress-container">
     <p>
  ₦{(raised / 1000000).toFixed(1)}M raised out of ₦{(goal / 1000000).toFixed(1)}M needed
</p>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${percent}%` }}></div>
        </div>
      </div>
      {/* IMAGE SECTION */}
      <div className="img-divv">
        <img src={can1} alt="patient 1" className="img1" />
        <img src={can2} alt="patient 2" className="img2" />
      </div>

 

      {/* STORY */}
      <div className="woman">
        <p>
          The woman is battling stage 4 breast cancer and recently underwent a
          double mastectomy. Her child also has a large tumor on her leg. A
          biopsy has been done, and she urgently needs surgery.
        </p>

        <p>
          Every contribution, no matter how small, can make a real difference in
          their lives.
        </p>
      </div>

     
      {/* DONATE BUTTON */}
      <Link to="/payment">
        <button className="donate-btn-hero">Donate Now</button>
      </Link>
    </section>
  );
}
