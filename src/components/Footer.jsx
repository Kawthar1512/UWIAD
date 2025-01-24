import React from "react";
import uwiadlogo from "../assets/uwiadlogo.png";
import insta from "../assets/insta.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="foot1">
          <div className="logo-content">
            <div className="for-logo">
              <img src={uwiadlogo} className="foot-logo" alt="logo" />
            </div>
            <div className="for-text">
              <div>UWIAD</div>
              <p> United Women Iniative Against Depression </p>
            </div>
          </div>
          <div>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Gallery</a>
            <a href="">Contact</a>
          </div>
        </div>
        <div className="foot2">
          <a href="http://">
            <img src={insta} alt="" className="insta"/>
          </a>

          <a href="http://">
            <img src={facebook} alt="" className="insta"/>
          </a>
          <a href="http://">
            <img src={twitter} alt="" className="insta"/>
          </a>
        </div>
      </footer>
    </>
  );
}
