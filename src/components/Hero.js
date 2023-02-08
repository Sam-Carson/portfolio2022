import React from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { RiCodeFill } from "react-icons/ri";
import { IconContext } from "react-icons";
import { FloatingButton } from "./index";

import "../styles/Transitions/TransitionStyles";
import "../styles/SectionStyles/Hero.css";

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-container c-flex width-70">
        <div className="c-flex vert-line-container">
          <Fade bottom>
            <div className="as-vl column-line c-flex" />
          </Fade>
          <div className="icon-align-container">
            <div className="code-icon-container c-flex ">
              <Zoom delay={1000} duration={1500}>
                <div className="code-icon-wrapper-mc orb">
                  <IconContext.Provider value={{ className: "orb-icon" }}>
                    <RiCodeFill />
                  </IconContext.Provider>
                </div>
              </Zoom>
            </div>
            <div className="float-btn-container">
              <Fade right delay={800} duration={1500}>
                <FloatingButton
                  header="Skip to the projects"
                  detail="The proof is in the pudding."
                />
              </Fade>
            </div>
          </div>
        </div>

        <div className="flex-right" id="hero-flex-right">
          <Fade up delay={500} duration={500}>
            <h1 className="hero-header">
              Developing applications <br className="hh-br" />
              for the
              <span className="hero-header" id="future">
                FUTURE
              </span>
            </h1>
          </Fade>
          <Fade up delay={700} duration={500}>
            <p id="hero-description" className="fadeup-enter">
              Beautiful designs.
              <br /> Maximum performance. <br />
              Clean and well documented code. <br />
              Let's reach new heights together.
            </p>
          </Fade>
        </div>
      </div>
    </section>
  );
}
