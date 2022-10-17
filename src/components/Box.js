import React from "react";
import {
  DeveloperActivityIllustration,
  PairProgrammingIllustration,
  SolutionMindsetIllustration,
} from "../images";
import { DescriptionContainer } from "./index";
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
          <DescriptionContainer header="Frameworks:" content="React, .NET" />
          <DescriptionContainer
            header="Libraries:"
            content="MUI, Tailwind, Bootstrap"
            style="5rem"
          />
        </div>
      </div>
      <div className="skills-box skill-2">
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
          <DescriptionContainer
            header="Runtime enviornments:"
            content="Node.js"
          />
          <DescriptionContainer
            header="Frameworks:"
            content="Express, ASP.NET"
            style="5rem"
          />
        </div>
      </div>
      <div className="skills-box skill-2">
        <div className="illustration-container-box">
          <img
            src={SolutionMindsetIllustration}
            className="illustration"
            alt="illustration"
          />
        </div>
        <h3>Data Access</h3>
        <p>
          when an unknown printer took a galley of type and scrambled it to make
          a type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
        <div className="skills-breakdown-container">
          <DescriptionContainer
            header="Runtime enviornments:"
            content="Node.js"
          />
          <DescriptionContainer
            header="Frameworks:"
            content="Express, ASP.NET"
            style="5rem"
          />
        </div>
      </div>
    </div>
  );
}
