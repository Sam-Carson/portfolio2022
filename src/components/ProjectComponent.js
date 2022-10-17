import React from "react";
import { DescriptionContainer } from "./index";

import "../styles/ProjectComponent/ProjectComponent.scss";

export default function ProjectComponent(props) {
  return (
    <div className="project-container">
      <div
        className="project-img-header-container"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.32), rgba(245, 246, 252, 0.1)), url(${props.image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderRadius: "25px",
          height: "50vh",
          width: "100%",
        }}
      >
        <h3>{props.title}</h3>
      </div>
      <div className="description-container">
        <DescriptionContainer
          header="Stack"
          content={props.stack}
          contentStyleColor="white"
        />

        <div className="project-links-container">
          <ul>
            <li>
              <a href={props.link}>Visit</a>
            </li>
            <li>
              <a href={props.gitHubLink}>Github</a>
            </li>
          </ul>

          {/* <a href={props.link}>Visit</a> */}
          {/* <a href={props.gitHubLink}>GitHub</a> */}
        </div>
      </div>
    </div>
  );
}
