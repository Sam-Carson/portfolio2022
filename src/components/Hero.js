import React from "react";
import image from "../images/pro_headshot_square.jpg";
import "../styles/Hero/Hero.css";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="banner">
        <div className="hero-section-left">
          <div className="header-container">
            <h1 className="header">I'M SAM.</h1>
          </div>
          <div className="header-container">
            <h2 className="header">
              A FRONT<span className="header-spans">-</span>END DEVELOPER
            </h2>
          </div>
          <div className="header-container">
            <h2 className="header">BASED IN BELLINGHAM</h2>
          </div>
          <div className="hero-staples">
            <h5 id="hero-staples-first">FRONT-END</h5>
            <div className="hero-staples-star"></div>
            <h5>REACT</h5>
            <div className="hero-staples-star"></div>
            <h5>DESIGN</h5>
          </div>
          <div className="hero-btn-container">
            <div className="hero-resume-btn">
              <a href="/resume">Resume</a>
            </div>
            <div className="hero-contact-btn">
              <a href="/contact">Contact</a>
            </div>
          </div>
        </div>
        <div className="hero-section-right">
          <div className="img-background-layer-1"></div>
          <div className="img-background-layer-2"></div>
          <div className="img-background-layer-3"></div>
          <div className="headshot-img">
            <img src={image} className="img" alt="headshot"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
