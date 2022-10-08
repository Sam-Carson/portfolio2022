import React from "react";
import {
  DeveloperActivityIllustration,
  PairProgrammingIllustration,
} from "../images";
import "../styles/Box/Box.scss";
export default function Box() {
  return (
    <div className="box-container">
      <div className="skills-box skill-1">
        <div className="illustration-container-box">
          <img
            src={DeveloperActivityIllustration}
            className="illustration"
            alt="illustration"
          />
        </div>
        <h3>Front-end</h3>
        <p>
          when an unknown printer took a galley of type and scrambled it to make
          a type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
        <div className="skills-breakdown-container">
          <div className="frameworks-breakdown">
            <p className="breakdown-headers">Frameworks:</p>
            <p className="breakdown-descriptions">React, .NET</p>
          </div>
          <div className="libraries-breakdown">
            <p className="breakdown-headers">Libraries:</p>
            <p className="breakdown-descriptions">MUI, Tailwind, Bootstrap</p>
          </div>
        </div>
      </div>
      {/* <div className="skills-box skill-2">
        <div className="illustration-container-box">
          <img
            src={PairProgrammingIllustration}
            className="illustration"
            alt="illustration"
          />
        </div>
        <h3>Back-end</h3>
        <p>
          when an unknown printer took a galley of type and scrambled it to make
          a type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
        <div className="skills-breakdown-container">
          <div className="runtime-breakdown">
            <p className="breakdown-headers">Runtime enviornments:</p>
            <p className="breakdown-descriptions">Node.js</p>
          </div>
          <div className="frameworks-breakdown">
            <p className="breakdown-headers">Frameworks:</p>
            <p className="breakdown-descriptions">Express, ASP.NET</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}
