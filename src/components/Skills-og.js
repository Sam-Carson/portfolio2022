import React from "react";
import "../styles/Skills/Skills.css";

export default function Skills() {
  return (
    <section id="skills">
      <div className="skills-container">
        <div className="skills-header">
          <h3>Skills</h3>
        </div>
        <div className="skills-body">
          <div className="skill-box box1">
            <p className="skillset-header">Front-end Development</p>
            <p className="skillset-p">React, JavaScript, HTML5, CSS3, SASS</p>
          </div>
          <div className="skill-box box2">
            <p className="skillset-header">Back-end Development</p>
            <p className="skillset-p">Node.JS, Express, .NET</p>
          </div>
          <div className="skill-box box3">
            <p className="skillset-header">Data Access</p>
            <p className="skillset-p">SQL</p>
          </div>
          <div className="skill-box box4">
            <p className="skillset-header">Languages</p>
            <p className="skillset-p">C#, Java</p>
          </div>
        </div>
      </div>
    </section>
  );
}
