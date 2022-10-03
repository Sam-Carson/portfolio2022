import React from "react";

import "../styles/SlideOutNav/SlideOutNav.css";

export default function SlideOutNav() {
  return (
    <div className="slide-out-nav-container">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <div className="nav-divider"></div>
        <li>
          <a href="/">Projects</a>
        </li>
        <div className="nav-divider"></div>

        <li>
          <a href="/">Skills</a>
        </li>
        <div className="nav-divider"></div>

        <li>
          <a href="/">About</a>
        </li>
      </ul>
    </div>
  );
}
