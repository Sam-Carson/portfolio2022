import React from "react";
import { RiCodeFill } from "react-icons/ri";
import { IconContext } from "react-icons";
import { TechSkills, FloatingButton } from "./index";
import { FaRegUser } from "react-icons/fa";

import "../styles/SectionStyles/Hero.css";

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-container c-flex">
        <div className="c-flex vert-line-container">
          <div className="hero-vert-line column-line c-flex"></div>

          <div className="icon-align-container">
            <div className="code-icon-container c-flex ">
              <div className="code-icon-wrapper-mc orb">
                <IconContext.Provider value={{ size: "50px" }}>
                  <RiCodeFill />
                </IconContext.Provider>
              </div>
            </div>
            <div className="float-btn-container">
              <FloatingButton
                header="Skip to the projects"
                detail="The proof is in the pudding."
                link="#projects"
              />
            </div>
          </div>

          <div className="column-line c-flex hs-vl2" />

          <div className="icon-align-container">
            <div className="code-icon-container c-flex icon-btn-container">
              <div className="code-icon-wrapper-gy orb ">
                <IconContext.Provider value={{ size: "50px" }}>
                  <FaRegUser />
                </IconContext.Provider>
              </div>
            </div>
            <div className="float-btn-container">
              <h3 className="section-title-header">Introduction</h3>
            </div>
          </div>
        </div>

        <div className="flex-right">
          <h1>Developing applications for the future</h1>
          <p>
            Beautiful designs.
            <br /> Maximum performance. <br />
            Clean and well documented code. Let's reach new heights together.
          </p>
          <TechSkills />
        </div>
      </div>
    </section>
  );
}
