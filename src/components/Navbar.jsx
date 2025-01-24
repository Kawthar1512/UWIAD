import React from "react"
import uwiadlogo from "../assets/uwiadlogo.png"

let section = document.querySelectorAll('section');
let menu = document.querySelectorAll('header nav a');
export default function NavBar(){
    return(
        <>
            <header>
                <div className="ForNav">

              
                <nav>
                    <a href="#">
                    <img src={uwiadlogo} alt="uwiad-logo" className="uwiadlogo"/>
                    </a>
                    <div className="nav-links-container">
                    <a href="#home" className="nav-links active"  >Home</a>
                    <a href="#about" className="nav-links">About  us</a>
                    <a href="#gallery"  className="nav-links">Gallery</a>
                    <a href="#contact"  className="nav-links">Contact</a>
                    </div>
                    <div className="navButton">
                    <button className="donate-btn">Donate Now</button>
                    <button className="join-btn">Join Us</button>



                    </div>

                  
                    
                    
                </nav>
                </div>
            </header>
        </>
    )
}