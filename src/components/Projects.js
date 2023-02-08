import React from "react";
import Fade from "react-reveal/Fade";
import { FloatingButton } from "./index";
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
            className="as-vl3 column-line c-flex line-height"
            id="final-line"
          />
          <div className="icon-align-container">
            <div className="code-icon-container c-flex " />
          </div>
        </div>
        <div className="flex-right c-flex project-div">
          <div id="project-card-left">
            <Fade right>
              <SpotifyHubCard />
            </Fade>
          </div>
          <div id="project-card-right">
            <Fade right>
              <SpotifyHubCard />
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}
