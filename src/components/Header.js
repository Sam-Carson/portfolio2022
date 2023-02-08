import React, { useState } from "react";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import { IconContext } from "react-icons";
import { GiDiploma } from "react-icons/gi";
import { VscGithubInverted } from "react-icons/vsc";
import { SiLinkedin } from "react-icons/si";
import Fade from "react-reveal/Fade";
import { Headshot } from "../images/index";

import "../styles/SectionStyles/Header.css";

export default function Header() {
  const [revealIsland, setRevealIsland] = useState(false);

  const DownArrow = () => {
    return (
      <div className="arrow-container">
        <IconContext.Provider value={{ className: "dropdown-icon" }}>
          <FiArrowDown />
        </IconContext.Provider>
      </div>
    );
  };

  const UpArrow = () => {
    return (
      <div className="arrow-container" id="upArrowContainer">
        <IconContext.Provider
          value={{ className: "dropdown-icon", id: "upArrow" }}
        >
          <FiArrowUp />
        </IconContext.Provider>
      </div>
    );
  };

  const DevDetails = () => {
    return (
      <div>
        <UpArrow />
        <div className="dd-cont">
          <img id="dd-img" className="box-shadow" src={Headshot} alt="avatar" />
          <p id="header-p">Sam Carson</p>
          <p className="description-p">
            Bachelor of Applied Science <br />
            <br />
            <span className="dp-highlight-2">
              Information Systems & Technology
              <br />
              Application Development
            </span>
          </p>
          <div className="credits-row c-flex">
            <IconContext.Provider value={{ className: "credit-icon" }}>
              <a
                href="https://www.linkedin.com/in/sam-carson-33152416a/"
                target="_blank"
                rel="noreferrer"
                className="credit"
                id="left-credit"
              >
                <SiLinkedin />
              </a>
              <a
                href="https://github.com/Sam-Carson"
                target="_blank"
                className="credit"
                rel="noreferrer"
              >
                <VscGithubInverted />
              </a>
              <a
                href="../documents/file.pdf"
                target="_blank"
                rel="noreferrer"
                className="credit"
                id="right-credit"
              >
                <GiDiploma />
              </a>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    );
  };
  return (
    <header className="c-flex">
      <Fade down delay={1000} duration={1500}>
        <div
          className={`box-shadow border-radius border island ` + revealIsland}
          onClick={() => setRevealIsland(!revealIsland)}
        >
          {revealIsland ? <DevDetails /> : <DownArrow />}
        </div>
      </Fade>
    </header>
  );
}
