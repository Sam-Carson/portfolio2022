import React from "react";
import { ProjectComponent } from "./index";
import { Spotify } from "../images/index";

import "../styles/Works/Works.scss";

export default function Projects() {
  return (
    <section className="projects-section">
      <div className="section-container">
        <div className="header-container">
          <h3>Projects</h3>
        </div>
        <ProjectComponent
          title="SpotifyHub"
          image={Spotify}
          alt="spotifyHub"
          link="https://spotifyhub.herokuapp.com/"
          stack="React, SpotifyHub, Express"
        />
      </div>
    </section>
  );
}
