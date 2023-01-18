import React from "react";
import { RiCodeFill } from "react-icons/ri";
import { IDCard } from "./index";
import { IconContext } from "react-icons";
import "../styles/SectionStyles/About.css";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container c-flex">
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
          </div>
        </div>
        <div className="flex-right">
          <p className="chat-bubble chat-left chat-top my-text box-shadow">
            Hey, I'm Sam! <br />
            <br />
            I've been tinkering around with web technologies for over 5+ years
            and love what I do. I began coding when I decided to build my first
            website out of pure currosity. Not long after I realized the joy and
            potential of creating things for the web!
          </p>
          <p className="chat-bubble chat-right box-shadow">
            That's awesome Sam! What technologies do you have experince with?
          </p>
          <p className="chat-bubble chat-left my-text box-shadow">
            I started off learning the basics: HTML, CSS, and JavaScript. Fast
            forward to today and I've created full stack appliactions with
            React, Node.js, C# and the .NET ecosystem.
          </p>
          <p className="chat-bubble chat-right box-shadow">
            Well done, those are very in demand skills. What about database
            access and working with API's?
          </p>
          <p className="chat-bubble chat-left my-text box-shadow">
            I've worked with SQL and Firebase for databases but have also
            touched based on MongoDB as well.
          </p>
          <p className="chat-bubble chat-right box-shadow">
            Excellent to know. What do you think is the most important skill to
            acquire as a developer?
          </p>
          <p className="chat-bubble chat-left my-text box-shadow">
            I would say problem solving, but it isn't easy to narrow it down to
            one. You must have the technical skills and basic understanding of
            the web to fully implement the opperations you are trying to
            achieve.
          </p>
          <p className="chat-bubble chat-right box-shadow chat-end">
            Great to hear, we'll be in touch.
          </p>
          <p
            className="chat-bubble chat-left box-shadow my-text chat-end"
            id="chat-final"
          >
            Great, here is my card!
          </p>
          <IDCard />
        </div>
      </div>
    </section>
  );
}
