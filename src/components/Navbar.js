import React from "react";
import "../styles/Navbar.css";

export default function navbar() {
  return (
    <div className="navbar-container">
      <a href="/home" className="navbar-link">
        Home
      </a>
      <a href="/projects" className="navbar-link">
        Projects
      </a>
      <a href="/skills" className="navbar-link">
        Skills
      </a>
      <a href="/aboutme" className="navbar-link">
        About Me
      </a>
      <a href="/resume" className="navbar-link">
        Resume
      </a>
    </div>
  );
}
