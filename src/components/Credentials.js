import React from "react";
import { IconContext } from "react-icons";
import { FaChevronUp } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

import "../styles/SectionStyles/Credentials.css";
import FloatingButton from "./FloatingButton";

export default function Credentials() {
  return (
    <section id="credentials-section">
      <div className="credentials-container c-flex">
        <div className="c-flex vert-line-container">
          <div className="cs-vl column-line c-flex" />
          <div className="icon-align-container">
            <div className="code-icon-container c-flex icon-btn-container">
              <Zoom>
                <div className="code-icon-wrapper-mt orb ">
                  <IconContext.Provider value={{ size: "50px" }}>
                    <FaChevronUp />
                  </IconContext.Provider>
                </div>
              </Zoom>
            </div>
            <div className="float-btn-container">
              <Fade>
                <FloatingButton
                  header="Scroll to the top"
                  detail="I look forward to hearing from you"
                  link="#hero"
                />
              </Fade>
            </div>
          </div>
        </div>

        <div className="flex-right">
          <div className="cs-btns-container c-flex">
            <button className="cs-btn c-flex box-shadow" id="resume-btn">
              Resume
            </button>
            <button className="cs-btn c-flex box-shadow" id="diploma-btn">
              Diploma
            </button>
            <a href="https://stackoverflow.com/users/12082203/sam">
              <button
                className="cs-btn c-flex box-shadow"
                id="stackoverflow-btn"
              >
                StackOverflow
              </button>
            </a>
            <a href="https://github.com/Sam-Carson">
              <button className="cs-btn c-flex box-shadow" id="github-btn">
                GitHub
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
