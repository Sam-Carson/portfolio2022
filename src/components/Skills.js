import React from "react";
import "../styles/Skills/Skills.css";

export default function Skills() {
  return (
    <section>
      <div className="skills-container">
        <div className="header-container">
          <h3>Skills</h3>
        </div>
        <div className="skills-body">
          <div className="skill-box">
            <p>Front-end Development</p>
            <p>HTML5, CSS3(SASS), JavaScript, React</p>
          </div>
          <div className="skill-box">
            <p>Back-end Development</p>
          </div>
          <div className="skill-box">
            <p>Data Access</p>
          </div>
          <div className="skill-box">
            <p>Languages</p>
            <p>JavaScript, C#, Java</p>
          </div>
        </div>
      </div>
    </section>
  );
}
