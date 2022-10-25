import React from "react";

import { DescriptionContainer } from "./index";

import "../styles/ProjectComponent/ProjectComponent.scss";

export default function ProjectComponent(props) {
  return (
    <div className="project-container">
      <a href={props.link} className="img-div-link">
        <div
          className="project-img-header-container"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.32), rgba(245, 246, 252, 0.1)), url(${props.image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "50vh",
            width: "100%",
          }}
        >
          <h3>{props.title}</h3>
        </div>
      </a>
      <div className="description-container">
        <DescriptionContainer
          header={props.descriptionHeader1}
          content={props.descriptionContent1}
          contentStyleColor="white"
        />
        <DescriptionContainer
          header={props.descriptionHeader2}
          content={props.descriptionContent2}
          contentStyleColor="white"
        />
        <div className="project-links-container">
          <div>
            <a href={props.link}>Visit</a>
          </div>
          <div>
            <a href={props.gitHubLink}>Github</a>
          </div>
        </div>
      </div>
    </div>
  );
}
