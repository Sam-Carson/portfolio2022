import React from "react";
import { DescriptionContainer } from "./index";
import "../styles/SkillsBox/SkillsBox.scss";
export default function skillsBox(props) {
  return (
    <div className="skills-box skill-1">
      <div className="illustration-container-box">
        <img src={props.img} className="illustration" alt="illustration" />
      </div>
      <h3>{props.title}</h3>
      <p>{props.titleText}</p>
      <div className="skills-breakdown-container">
        <DescriptionContainer
          header={props.descriptionHeader1}
          content={props.descriptionContent1}
          textSize={props.textSize}
          textColor={props.textColor}
        />
        <DescriptionContainer
          header={props.descriptionHeader2}
          content={props.descriptionContent2}
          textSize={props.textSize}
          textColor={props.textColor}
          style="5rem"
        />
      </div>
    </div>
  );
}
