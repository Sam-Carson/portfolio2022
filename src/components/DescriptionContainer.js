import React from "react";

import "../styles/DescriptionContainer/DescriptionContainer.scss";

export default function DescriptionContainer(props) {
  return (
    <div
      className="description-wrapper"
      style={{ marginBottom: `${props.style}` }}
    >
      <p className="breakdown-headers" style={props.headerStyleColor}>
        {props.header}
      </p>
      <p
        className="breakdown-descriptions"
        style={{ color: `${props.contentStyleColor}` }}
      >
        {props.content}
      </p>
    </div>
  );
}
