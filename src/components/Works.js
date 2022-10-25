import React from "react";
import { ProjectComponent } from "./index";
import { Spotify, SpotifyPlayer } from "../images/index";

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
          link="https://spotifyhub.herokuapp.com/"
          gitHubLink="https://github.com/Sam-Carson/spotifyHub/tree/master"
          descriptionHeader1="Built with:"
          descriptionHeader2="Software fundamentals:"
          descriptionContent1={["React", "Node.js", "Express", "Spotify API"]}
          descriptionContent2={[
            "OAuth",
            "REST API",
            "HTTP Requests",
            "Auth tokens stored locally",
          ]}
        />
        <ProjectComponent
          title="SpotifyHub"
          image={SpotifyPlayer}
          link="https://spotifyhub.herokuapp.com/"
          descriptionHeader1="Built with:"
          descriptionHeader2="Software fundamentals:"
          descriptionContent1={["React", "Node.js", "Express", "Spotify API"]}
          descriptionContent2={[
            "OAuth",
            "REST API",
            "HTTP Requests",
            "Auth tokens stored locally",
          ]}
        />
      </div>
    </section>
  );
}
