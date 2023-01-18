import React from "react";
import { RiCodeFill } from "react-icons/ri";
import { IconContext } from "react-icons";
import { FloatingButton } from "./index";
// import { FaRegUser } from "react-icons/fa";
// import Fade from "react-reveal/Fade";
// import Zoom from "react-reveal/Zoom";

import "../styles/Transitions/TransitionStyles";
import "../styles/SectionStyles/Hero.css";

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-container c-flex">
        <div className="c-flex vert-line-container">
          <div className="as-vl column-line c-flex" />

          <div className="icon-align-container">
            <div className="code-icon-container c-flex ">
              <div className="code-icon-wrapper-mc orb">
                <IconContext.Provider value={{ className: "orb-icon" }}>
                  <RiCodeFill />
                </IconContext.Provider>
              </div>
            </div>
            <div className="float-btn-container">
              <FloatingButton
                header="Skip to the projects"
                detail="The proof is in the pudding."
                link="#projects"
              />
            </div>
          </div>
        </div>

        <div className="flex-right">
          <h1>
            Developing applications <br className="hh-br" />
            for the future
          </h1>
          <p id="hero-description" className="fadeup-enter">
            Beautiful designs.
            <br /> Maximum performance. <br />
            Clean and well documented code. <br />
            Let's reach new heights together.
          </p>
          {/* <div className="intro-section">
            <p>Hey, I'm Sam!</p>
            <p>
              I've been tinkering around with web technologies for over 5+ years
              and love what I do. I started coding when I decided to try and
              build my first website out of pure currosity. Not long after I
              realized the joy and potential of creating things for the web!
            </p>
            <p>
              That's awesome Sam! What technologies do you have experince with?
            </p>
            <p>
              I started off learning the basics: HTML, CSS, and JavaScript. Fast
              forward to today and I've created full stack appliactions with
              React, Node.js, C# and the .NET ecosystem.
            </p>
            <p>
              Well done, those are very in demand skills. What about database
              access and working with API's?
            </p>
            <p>
              I've worked with SQL and Firebase for databases but have also
              touched based on MongoDB as well.
            </p>
            <p>
              Excellent to know. What do you think is the most important skill
              to acquire as a developer?
            </p>
            <p>
              I would say problem solving, but it isn't easy to narrow it down
              to one. You must have the technical skills and basic understanding
              of the web to fully implement the opperations you are trying to
              achieve.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}
