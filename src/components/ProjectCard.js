import React from "react";
import { GoChevronRight } from "react-icons/go";

import "../styles/Cards/ProjectCard.css";

export default function ProjectCard(props) {
  return (
    <div className="projectcard">
      <div className="pc-header">
        <p>
          <span className="pc-title">{props.title}</span> {props.description}
        </p>
        <a href={props.href} className="pc-link">
          {props.visit} {props.title}
          <GoChevronRight
            size="30px"
            style={{ transform: "translateY(3px)" }}
          />
        </a>
      </div>
      <img src={props.img} alt="project illustration" className="pc-img" />
    </div>
  );
}
