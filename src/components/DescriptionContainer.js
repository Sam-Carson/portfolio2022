import { React } from "react";

import "../styles/DescriptionContainer/DescriptionContainer.scss";

export default function DescriptionContainer(props) {
  const content = Array.from(props.content);

  function ListItem(props) {
    return <li>{props.value}</li>;
  }

  const listItems = content.map((cont) => (
    <ListItem key={cont.id} value={cont} />
  ));

  return (
    <div
      className="description-wrapper"
      style={{ marginBottom: `${props.style}` }}
    >
      <p className="breakdown-headers" style={props.headerStyleColor}>
        {props.header}
      </p>
      <ul
        className={`project-fundamentals ${props.textSize} ${props.textColor}`}
      >
        {listItems}
      </ul>
    </div>
  );
}
