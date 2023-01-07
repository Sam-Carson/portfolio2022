import React from "react";
import { IconContext } from "react-icons";
import { FaChevronUp } from "react-icons/fa";
import { DevToolComp, ProjectCard } from "./index";
import { Spotify } from "../images/index";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

import "../styles/SectionStyles/Projects.css";
import FloatingButton from "./FloatingButton";

export default function Projects() {
  return (
    <section className="projects-container" id="projects">
      <div className="project-container c-flex">
        <div className="c-flex vert-line-container">
          <div className="ps-vl column-line c-flex" />
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
        {/* <div className="flex-right p-flex-right">
          <DevToolComp />
        </div> */}
        <div className="p-card-container c-flex">
          <ProjectCard
            title="SpotifyHub"
            description="allows you to browse your top tracks, artists, and playlists."
            visit="Login to "
            img={Spotify}
            href="https://spotifyhub.herokuapp.com/"
          />

          <ProjectCard
            title="SpotifyHub"
            description="allows you to browse your top tracks, artists, and playlists."
            visit="Login to "
            img={Spotify}
            href="https://spotifyhub.herokuapp.com/"
          />
        </div>
      </div>
    </section>
  );
}
