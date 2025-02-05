import React from "react";
import uwiadlogo from "../assets/uwiadlogo.png";
import insta from "../assets/insta.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.jpg";
import whatsapp from "../assets/whatsapp.png";

export default function Footer() {
  return (
    <>
      <footer id="contact">
        <div className="foot1">
          <div className="logo-content">
            <div className="for-logo">
              <img src={uwiadlogo} className="foot-logo" alt="logo" />
            </div>
            <div className="for-text">
              <div>UWIAD</div>
              <p  className="united-text"> United Women Iniative Against Depression </p>
            </div>
          </div>
          <div className="foot-links">
            <a href="" className="home-link">Home</a>
            <a href="">About</a>
            <a href="">Gallery</a>
            <a href="">Contact</a>
          </div>
        </div>
        <div className="foot2">
          <div>
            <a
              href="https://www.instagram.com/uwiad_foundation/"
              target="_blank"
            >
              <img src={insta} alt="" className="insta" />
            </a>

            <a
              href="https://www.facebook.com/share/1WW5dGSoj9/?mibextid=wwXIfr"
              target="_blank"
            >
              <img src={facebook} alt="" className="insta" />
            </a>
            <a href="#">
              <img src={twitter} alt="" className="insta" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=%2B2348158148966&context=ARAkURdC93K6PnmbOUwmp7_j6Av93oAZwRTuBQTgKn0wwGpv_RKFK38i2i7d7GkXTnheyqiKrJhDHLSsR20Eqds7FF1IBgHbnVIZ7wBGrMeTE298NeDSPrFGXor6XN-JdeR1LeL9tuKnWrQd7cyF0VL4-A&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwY2xjawIBoKlleHRuA2FlbQIxMAABHSKJulSARG7tyx0y40-0jg3BbKGknMBgoEjLHGgJO6U1VhJ_mMuR-4NuWg_aem_uIlvN3JCQQbycfxwoCmuHQ"
              target="_blank"
            >
              <img src={whatsapp} alt="" className="insta" />
            </a>
          </div>
          <div className="copy">
            <p>&copy; Copyright 2025 Uwiad Foundation </p>
          </div>
        </div>
      </footer>
    </>
  );
}
