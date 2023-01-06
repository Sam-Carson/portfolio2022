import React from "react";
import { DiReact } from "react-icons/di";
import { IconContext } from "react-icons";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { IDCard } from "./index";
import "../styles/SectionStyles/About.css";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container c-flex">
        <div className="c-flex vert-line-container">
          <div className="as-vl column-line c-flex" />
          <div className="icon-align-container">
            <div className="code-icon-container c-flex icon-btn-container">
              <Zoom>
                <div className="code-icon-wrapper-mp orb ">
                  <IconContext.Provider value={{ size: "50px" }}>
                    <DiReact />
                  </IconContext.Provider>
                </div>
              </Zoom>
            </div>
            <div className="float-btn-container">
              <Fade>
                <h3 className="section-title-header">Projects</h3>
              </Fade>
            </div>
          </div>
        </div>

        <IDCard />
      </div>
    </section>
  );
}
