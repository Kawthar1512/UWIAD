import React from "react";
import image1 from "../assets/IpayeDamilola.jpeg";
import image2 from "../assets/BalogunToyyibat.jpeg";
import image3 from "../assets/AminatAsude.jpeg";
import image4 from "../assets/adebimpe.jpeg";
import "../Directors.css";

export default function Director() {
  return (
    <>
      <section className="MainContainer">
        <h1 className="board">Board of Directors</h1>

        {/* container  for the director card */}

        <main className="container">

          <div className="directorCard card3">
            <img src={image3} alt="directorImage" />
            <div className="dName">
              <h4>Aminat Asude</h4>
              <p>Board of Director</p>
            </div>
          </div>
          {/* card one  */}
          <div className="directorCard">
            <img src={image2} alt="" />
            <div className="dName">
              <h4>Balogun Toyyibat </h4>
              <p>Assistant Director</p>
            </div>
          </div>
  <div className="directorCard card4">
            <img src={image4} alt="" />
            <div className="dName">
              <h5>Adebimpe-Oyewole Robiat</h5>
              <p>Programme Coordinator</p>
            </div>
          </div>



          <div className="directorCard">
            <img src={image1} alt="" />
            <div className="dName">
              <h3>Ipaye Damilola</h3>
              <p>Community outreach coordinator for Lagos State</p>
            </div>
          </div>

          {/* card two  */}

          

          {/* card three  */}
          
        
        </main>
      </section>
    </>
  );
}
