import React from "react";
import Headshot from "../images/pro_headshot_square.jpg";
import "../styles/Introduction/Introduction.css";

export default function Introduction() {
  return (
    <section className="introduction-section">
      <div className="section-container">
        <div className="headers-container">
          <h3>Front-end Developer</h3>
          <p>
            Coding beautifully designed web applications with attention to
            detail and performance.
          </p>
        </div>
        <div className="avatar-container">
          <img src={Headshot} alt="avatar" />
        </div>
      </div>
    </section>
  );
}
