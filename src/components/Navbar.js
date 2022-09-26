import React from "react";
import { Link } from "react-scroll";
import "../styles/Navbar/Navbar.css";

export default function navbar() {
  return (
    <div className="navbar-container">
      <div href="/home" className="logo-container">
        <div className="logo"></div>
        <p id="logo-smdc">smdc.</p>
      </div>
      <div className="navbar-links-container">
        <Link
          className="navbar-link"
          to="home"
          spy={true}
          smooth={true}
          offset={50}
          duration={600}
        >
          Home
        </Link>
        <span className="navbar-link-spacer">|</span>
        <Link
          className="navbar-link"
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-115}
          duration={600}
        >
          Portfolio
        </Link>
        <span className="navbar-link-spacer">|</span>

        <Link
          className="navbar-link"
          to="skills"
          spy={true}
          smooth={true}
          offset={-15}
          duration={600}
        >
          Skills
        </Link>
        <span className="navbar-link-spacer">|</span>

        <Link
          className="navbar-link"
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={600}
        >
          About
        </Link>
        <span className="navbar-link-spacer">|</span>
        <a href="/" className="navbar-link">
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
