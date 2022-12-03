import React from "react";
import { DiReact } from "react-icons/di";
import { IconContext } from "react-icons";

import "../styles/SectionStyles/About.css";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container c-flex">
        <div className="c-flex vert-line-container">
          <div className="as-vl column-line c-flex" />
          <div className="icon-align-container">
            <div className="code-icon-container c-flex icon-btn-container">
              <div className="code-icon-wrapper-mp orb ">
                <IconContext.Provider value={{ size: "50px" }}>
                  <DiReact />
                </IconContext.Provider>
              </div>
            </div>
            <div className="float-btn-container">
              <h3 className="section-title-header">Projects</h3>
            </div>
          </div>
        </div>

        <div className="flex-right">
          <h1>Hey, I'm Sam</h1>
          <p>I've been programming for 4+ years </p>
        </div>
      </div>
    </section>
  );
}
