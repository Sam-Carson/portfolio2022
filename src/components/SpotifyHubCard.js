import React from "react";
import { IconContext } from "react-icons";
import { Spotify } from "../images/index";
import { GoChevronRight } from "react-icons/go";

import "../styles/Cards/SpotifyHubCard.css";

export default function SpotifyHubCard() {
  return (
    <div className="projectcard box-shadow">
      <div className="pc-header">
        <p>
          <span className="pc-title">SpotifyHub</span> allows you to browse your
          top tracks, artists, and playlists.
        </p>
        <ul className="tech-ul c-flex">
          <li className="tech-list-li">#React</li>
          <li className="tech-list-li">#Styled Componenet</li>
          <li className="tech-list-li">#Spotify API</li>
          <li className="tech-list-li">#Express</li>
          <li className="tech-list-li">#Heroku</li>
        </ul>
        <a
          href="https://spotifyhub.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
          className="pc-link"
        >
          Login to SpotifyHub
          <IconContext.Provider value={{ className: "pc-chevron" }}>
            <GoChevronRight />
          </IconContext.Provider>
        </a>
      </div>
      <div className="img-div">
        <img src={Spotify} alt="project illustration" className="pc-img" />
      </div>
    </div>
  );
}
