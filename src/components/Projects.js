import React from "react";
import { IconContext } from "react-icons";
import { BsNewspaper } from "react-icons/bs";
import { DevToolComp, ProjectCard } from "./index";
import { Spotify } from "../images/index";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

import "../styles/SectionStyles/Projects.css";
import { SiP5Dotjs } from "react-icons/si";

export default function Projects() {
  return (
    <section className="projects-container" id="projects">
      <div className="project-container c-flex">
        <div className="c-flex vert-line-container">
          <div className="ps-vl column-line c-flex" />
          <div className="icon-align-container">
            <div className="code-icon-container c-flex icon-btn-container">
              <Zoom>
                <div className="code-icon-wrapper-mm orb ">
                  <IconContext.Provider value={{ size: "50px" }}>
                    <BsNewspaper />
                  </IconContext.Provider>
                </div>
              </Zoom>
              <Fade>
                <div className="float-btn-container">
                  <h3 className="section-title-header">Credentials</h3>
                </div>
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
