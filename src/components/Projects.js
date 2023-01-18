import React from "react";
import { IconContext } from "react-icons";
import { RiCodeFill } from "react-icons/ri";
import { SpotifyHubCard } from "./index";

import "../styles/SectionStyles/Projects.css";

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="project-container c-flex">
        <div className="c-flex vert-line-container">
          <div
            className="as-vl column-line c-flex line-height"
            id="final-line"
          />
          <div className="icon-align-container">
            <div className="code-icon-container c-flex ">
              <div className="code-icon-wrapper-mc orb">
                <IconContext.Provider value={{ className: "orb-icon" }}>
                  <RiCodeFill />
                </IconContext.Provider>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-right">
          <SpotifyHubCard />
        </div>
      </div>
    </section>
  );
}
