import React from "react";
import { IconContext } from "react-icons";
import { FaChevronUp } from "react-icons/fa";

import "../styles/SectionStyles/Credentials.css";
import FloatingButton from "./FloatingButton";

export default function Credentials() {
  return (
    <section>
      <div className="credentials-container c-flex">
        <div className="c-flex vert-line-container">
          <div className="cs-vl column-line c-flex" />
          <div className="icon-align-container">
            <div className="code-icon-container c-flex icon-btn-container">
              <div className="code-icon-wrapper-mt orb ">
                <IconContext.Provider value={{ size: "50px" }}>
                  <FaChevronUp />
                </IconContext.Provider>
              </div>
            </div>
            <div className="float-btn-container">
              <FloatingButton
                header="Scroll to the top"
                detail="I look forward to hearing from you"
                link="#hero"
              />
            </div>
          </div>
        </div>

        <div className="flex-right">
          <div className="cs-btns-container c-flex">
            <button className="cs-btn c-flex" id="resume-btn">
              Resume
            </button>
            <button className="cs-btn c-flex" id="diploma-btn">
              Diploma
            </button>
            <button className="cs-btn c-flex" id="stackoverflow-btn">
              StackOverflow
            </button>
            <button className="cs-btn c-flex" id="github-btn">
              GitHub
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
