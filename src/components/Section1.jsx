// import React from "react";
import { Link } from "react-router-dom";

import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpg";
import world from "../assets/world.png";
import volunteer from "../assets/volunteer.png";
import fund from "../assets/fundraising.png";
import donate from "../assets/donate.png";
import "../Section1.css"
// import {gsap} from "gsap"
import React, { useRef, useEffect } from "react";
import { gsap, Circ } from "gsap";




export default function Section() {
  const myHeaderRef = useRef(null);

  useEffect(() => {
    gsap.to(myHeaderRef.current,{ rotation: 360, duration: 3, ease:Circ.easeOut });
  }, []);


  return (
    <>
      <section  id="home" className="first-section">
        <div className="first-section-text">
          <h1  className="myHeader">Envision a brighter future for everyone.</h1>
          <p className="giving-back">
            Giving back is a noble act. Your selfless contribution, however
            small, has a profound impact on the lives of others. Let's join
            hands and create a better world.{" "}
            <img src={world} alt="" className="worldImg" />

          </p>
          <Link to="/payment">
          <button className="donate-btn-hero">Donate</button>
          </Link>
        </div>

        <div ref={myHeaderRef} className="img1Div">
          <img src={img1} alt="" />
        </div>
        <div className="img2Div">
          <img src={img2} alt="" />
        </div>
      </section>

      <section className="sec-mini">
        <div className="volunteer">
          <div className="volunteer-img-div">
            <img src={volunteer} alt="" className="volunteer-img" />
          </div>
          <div className="volunteer-text">
            <h4>Become a Volunteer</h4>
            <p>You can volunteer by joining the foundation.</p>
          </div>
        </div>
        <div className="volunteer for-ml">
          <div className="volunteer-img-div">
            <img src={fund} alt="" className="volunteer-img" />
          </div>
          <div className="volunteer-text">
            <h4>Quick Fundraise</h4>
            <p>You can volunteer by joining the foundation.</p>
          </div>
        </div>
        <div className="volunteer for-ml" >
          <div className="volunteer-img-div">
            <img src={donate} alt="" className="volunteer-img" />
          </div>
          <div className="volunteer-text">
            <h4>Start Donating</h4>
            <p>You can volunteer by joining the foundation.</p>
          </div>
        </div>
      </section>
    </>
  );
}
