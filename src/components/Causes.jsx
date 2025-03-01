import React from "react";
import "../Causes.css";
export default function Causes(){
    return(
        <>
        <section>
            <div>
                <p>Our Leading Causes</p>
            </div>
              <div className="three-aspects">
            
            
                        <div className="mission card">
                          <img src={image1} alt="" className="aspect-img" />
                          <p  className="card-text">
                          <h1>Mission</h1>
            
                          To foster a society where every woman feels empowered to seek mental health support without fear of stigma or judgement.
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
            
                          we sponsor women vocational education (and skills acquisition).
                          </p>
                        </div>
                        </div>
        </section>
        
        </>
    )
}
