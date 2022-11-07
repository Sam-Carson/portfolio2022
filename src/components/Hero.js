import React from "react";
import { RiCodeFill } from "react-icons/ri";
import { IconContext } from "react-icons";
import { TechSkills } from "./index";

import "../styles/SectionStyles/Hero.css";

export default function Hero() {
  return (
    <section className="hero-content">
      <div className="hero-container c-flex">
        <div className="c-flex vert-line-container">
          <div className="hero-vert-line her-flex-left c-flex"></div>
          <div className="code-icon-container c-flex">
            <div className="code-icon-wrapper-mc">
              <IconContext.Provider value={{ size: "50px" }}>
                <RiCodeFill />
              </IconContext.Provider>
            </div>
          </div>
          <div className="hero-vert-line c-flex hero-vert-line-reverse her-flex-left"></div>
        </div>

        <div className="hero-flex-right">
          <h1>Developing applications for the future</h1>
          <p>
            Beautiful designs.
            <br /> Maximum performance. Clean and well documented code. Let's
            reach new heights together.
          </p>
          <TechSkills />
        </div>
      </div>
    </section>
  );
}
