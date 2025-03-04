import React from "react";
import image1 from "../assets/IpayeDamilola.jpeg";
import image2 from "../assets/BalogunToyyibat.jpeg";
import image3 from "../assets/AminatAsude.jpeg";
import "../Directors.css";

export default function Director() {
  return (
    <>
      <section className="MainContainer">
        <h1 className="board">Board of Directors</h1>

        {/* container  for the director card */}

        <main className="container">
          {/* card one  */}
          <div className="directorCard">
            <img src={image1} alt="" />
            <div>
              <h1>Ipaye Damilola</h1>
              <p>Community outreach coordinator for Lagos State</p>
            </div>
          </div>

          {/* card two  */}
          <div className="directorCard">
            <img src={image2} alt="" />
            <div>
              <h1></h1>
            </div>
          </div>

          {/* card three  */}
          <div className="directorCard">
            <img src={image3} alt="directorImage" />
          </div>
        </main>
      </section>
    </>
  );
}
