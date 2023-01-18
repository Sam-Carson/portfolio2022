import React from "react";
import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import "../styles/SectionStyles/FloatingButton.css";

export default function FloatingButton(props) {
  return (
    <a href={props.link}>
      <div className="fb-container c-flex box-shadow">
        <p className="c-flex fb-title">{props.header}</p>
        <p className="c-flex fb-cont">{props.detail}</p>
      </div>
    </a>
  );
}
