import React from "react";
import "../styles/Skills/Skills.css";

export default function Skills() {
  return (
    <section>
      <div className="skills-container">
        <div className="skills-header">
          <h3>Skills</h3>
        </div>
        <div className="skills-body">
          <div className="skill-box">
            <p className="skillset-header">Front-end Development</p>
            <p className="skillset-p">HTML5, CSS3, SASS, JavaScript, React</p>
          </div>
          <div className="skill-box">
            <p className="skillset-header">Back-end Development</p>
            <p className="skillset-p">Node.JS, Express</p>
          </div>
          <div className="skill-box">
            <p className="skillset-header">Data Access</p>
            <p className="skillset-p">SQL</p>
          </div>
          <div className="skill-box">
            <p className="skillset-header">Languages</p>
            <p className="skillset-p">C#, Java</p>
          </div>
        </div>
      </div>
    </section>
  );
}
