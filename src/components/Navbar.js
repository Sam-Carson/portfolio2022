import React from "react";
import "../styles/Navbar/Navbar.css";

export default function navbar() {
  return (
    <div className="navbar-container">
      <div href="/home" className="logo-container">
        <div className="logo"></div>
        <p id="logo-smdc">smdc.</p>
      </div>
      <div className="navbar-links-container">
        <a href="/home" className="navbar-link">
          Home
        </a>
        <span className="navbar-link-spacer">|</span>
        <a href="/projects" className="navbar-link">
          Works
        </a>
        <span className="navbar-link-spacer">|</span>

        <a href="/skills" className="navbar-link">
          Skills
        </a>
        <span className="navbar-link-spacer">|</span>

        <a href="/aboutme" className="navbar-link">
          About
        </a>
        <span className="navbar-link-spacer">|</span>
        <a href="/contact" className="navbar-link">
          Contact
        </a>
      </div>
      <div className="resume-container">
        <div className="resume-btn">
          <a href="/resume" className="navbar-link resume-link">
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}
