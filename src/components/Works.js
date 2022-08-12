import React from "react";
import "../styles/Works/Works.css";

export default function Works() {
  return (
    <div className="works-section">
      <div className="works-header">
        <h3>Portfolio</h3>
        <p>Completed Works</p>
      </div>
      <div className="works-container">
        <div className="project-container">
          <div className="img-tester"></div>
          <div className="project-tech-container">
            <div className="project-tech">React</div>
            <div className="project-tech">Spotify API</div>
            <div className="project-tech">Node.js</div>
          </div>
          <h3>SpotifyHub</h3>
          <p>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged.
          </p>
          <div className="hero-btn-container">
            <div className="hero-resume-btn">
              <a href="https://github.com/Sam-Carson/spotifyHub">GitHub</a>
            </div>
            <div className="hero-contact-btn">
              <a href="/contact">Visit</a>
            </div>
          </div>
        </div>
      </div>
      <div className="works-container">
        <div className="project-container">
          <div className="img-tester"></div>
          <div className="project-tech-container">
            <div className="project-tech">React</div>
            <div className="project-tech">Azure</div>
            <div className="project-tech">Node.js</div>
            <div className="project-tech">SQL</div>
          </div>
          <h3>Preston Food Bank</h3>
          <p>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged.
          </p>
          <div className="hero-btn-container">
            <div className="hero-resume-btn">
              <a href="https://github.com/Sam-Carson/spotifyHub">GitHub</a>
            </div>
            <div className="hero-contact-btn">
              <a href="/contact">Visit</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
