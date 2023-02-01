import React from "react";
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
    <Link
      activeClass="active"
      spy={true}
      smooth={true}
      duration={500}
      to="float-btn-destination"
    >
      <div className="fb-container c-flex box-shadow">
        <p className="c-flex fb-title">{props.header}</p>
        <p className="c-flex fb-cont">{props.detail}</p>
      </div>
    </Link>
  );
}
