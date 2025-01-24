import React from "react";
import children from "../assets/children.png";
import woman2 from "../assets/women2.jpg";
import chart from "../assets/UWIADCHART.png";
import hope from "../assets/hopee.png";

// import children from "../assets/uwaid-children-img.png";


export default function Section2() {
  return (
    <>
      <section id="about" className="section2">
            <img src={chart} alt="" className="children" />

        <div className="section2-text">
          <h2>About Us</h2>
        <div className="for-hope">
        <h1 >You are the Hope for others </h1>
            <img src={hope} alt="hope-logo" className="hopee"/>
         
          </div>  
          {/* <img src={hope} alt="" /> */}
          <p >
           <span className="title">United Women Iniative Against Depression </span> 
              is a dedicated non-profit commited to support women and families
            in need. We provide essential resources, including food, clothing,
            shelter and educational opportunites, to empower those facing
            challenges. our mission is to empower women & create safe spaces,
            create awareness on mental health and support women battling
            depression & anxiety.
          </p>
          <button className="discover">Discover More</button>
        </div>
      </section>
    </>
  );
}
