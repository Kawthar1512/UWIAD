import React from "react";
import "../Section2.css";
import image1 from "../assets/image1.png";
import image4 from '../assets/image4.png';
import women from '../assets/women.avif';




export default function Section2() {
  return (
    <>
      <section id="about" className="section2">

        <div className="section2-text">
          <div className="top-text">
          <h2 className="about-text">About Us</h2>
           <p>We are a  dedicated non-profit commited to support women and families in need. We provide essential resources, including food, clothing, shelter and educational opportunites, 
            to empower those facing challenges. 
            our mission is to empower women & create safe spaces, create awareness on mental health and support women battling depression & anxiety.</p>
            </div>
          <div className="three-aspects">


            <div className="mission card">
              <img src={image1} alt="" className="aspect-img" />
              <p  className="card-text">
              <h1>Mission</h1>

                To provide a supportive community where women can openly discuss
                their mental health challenges, find comfort and resources, and
                access education to improve mental wellness.
              </p>
            </div>
            <div className="vision card">
              <img src={image4} alt="" className="aspect-img"/>
              
              <p className="card-text">
              <h1>Vision</h1>
                To provide a supportive community where women can openly discuss
                their mental health challenges, find comfort and resources, and
                access education to improve mental wellness.
              </p>
            </div>
            <div className="upliftment card">
              <img src={women} alt="" className="aspect-img"/>
              <p className="card-text">
              <h1 className="women-text">Women Empowerment</h1>

                To provide a supportive community where women can openly discuss
                their mental health challenges, find comfort and resources, and
                access education to improve mental wellness.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
