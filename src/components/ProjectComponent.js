import { withWidth } from "@material-ui/core";
import React from "react";

import "../styles/ProjectComponent/ProjectComponent.scss";

export default function ProjectComponent(props) {
  return (
    <div className="project-container">
      <div className="project-img-header-container">
        <img
          alt={props.alt}
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.62), rgba(245, 246, 252, 0.1)), url(${props.image})`,
            backgroundRepeat: "no-repeat",
            height: "60rem",
            width: "100%",
          }}
        />
        <h3>{props.title}</h3>
      </div>
      <div className="description-container">
        <p>Stack</p>
        <p>{props.stack}</p>
        {/* <a href={props.link}>Visit</a> */}
      </div>
    </div>
  );
}
