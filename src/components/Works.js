import React from "react";
import "../styles/Works/Works.css";

export default function Works() {
  return (
    <section className="projects-container">
      <div className="works-header">
        <h3>Portfolio</h3>
      </div>
      <div className="flex-container">
        <div className="project-img" />
        <div className="section-title">SpotifyHub</div>
      </div>
      <div className="flex-container">
        <div className="project-img" />
        <div className="section-title">Preston Food Bank</div>
      </div>
    </section>
  );
}
