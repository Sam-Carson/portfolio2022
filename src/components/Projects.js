import React from "react";
import { IconContext } from "react-icons";
import { BsNewspaper } from "react-icons/bs";

import "../styles/SectionStyles/Projects.css";

export default function Projects() {
  return (
    <section className="projects-container" id="projects">
      <div className="project-container c-flex">
        <div className="c-flex vert-line-container">
          <div className="ps-vl column-line c-flex" />
          <div className="icon-align-container">
            <div className="code-icon-container c-flex icon-btn-container">
              <div className="code-icon-wrapper-mm orb ">
                <IconContext.Provider value={{ size: "50px" }}>
                  <BsNewspaper />
                </IconContext.Provider>
              </div>
            </div>
            <div className="float-btn-container">
              <h3 className="section-title-header">Credentials</h3>
            </div>
          </div>
          <div className="flex-right"></div>
        </div>
      </div>
    </section>
  );
}
