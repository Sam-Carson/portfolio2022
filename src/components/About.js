import React from "react";
import Diploma from "../documents/file.pdf";
import "../styles/About/About.scss";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <h3>
          Hey, I'm Sam. <br />
        </h3>
        <p>
          Since beginning my coding journey 4 years ago, I've delve into a
          variety of languages, platforms, frameworks and libraries. I enjoy
          tinkering with new technologies to expand my toolbox and to create
          unique user experinces.
          <p>
            I graduated from Bellevue College with a Bachelors of Applied
            Science - Information Systems and Technologies - Appliaction
            Development
          </p>
        </p>

        <div className="diploma-link-container">
          <a href={Diploma} className="diploma-link">
            View Diploma
          </a>
        </div>
      </div>
    </section>
  );
}
