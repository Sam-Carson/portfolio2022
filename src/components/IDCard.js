import React from "react";
import { Headshot } from "../images/index";
import { BsCheck } from "react-icons/bs";
import { IconContext } from "react-icons";
import { GiDiploma } from "react-icons/gi";
import { VscGithubInverted } from "react-icons/vsc";
import { SiLinkedin } from "react-icons/si";
import "../styles/Cards/IDCard.css";

export default function IDCard() {
  function Techs(props) {
    return (
      <li>
        <BsCheck />
        {props.stack}
      </li>
    );
  }

  function TechList() {
    const techStack = [
      "React",
      "Node.js",
      "JavaScript (ES6+)",
      "SASS",
      "C# (.NET ecosystem)",
      "SQL",
      "Express",
      "API",
    ];
    return (
      <ul className="skills-list">
        <IconContext.Provider value={{ className: "checks" }}>
          {techStack.map((tech) => (
            <Techs stack={tech} />
          ))}
        </IconContext.Provider>
      </ul>
    );
  }

  return (
    <div className="card c-flex box-shadow">
      <div className="column-container">
        <img
          id="avatar-img"
          className="box-shadow"
          src={Headshot}
          alt="avatar"
        />
        <p id="header-p">Sam Carson</p>
        <p className="description-p">
          Bachelor of Applied Science <br />
          <span className="dp-highlight-2">
            Information Systems & Technology
          </span>
        </p>
        <div className="skills-wrapper">
          <p className="skills-list-header">
            Technologies I've been working with recently:
          </p>
          <TechList />
        </div>
        <p className="description-p">
          <span className="dp-highlight">
            I aim to be an asset at my position and those around me.
          </span>
          I've worked an array of different positions in different industries
          accumulating a repuitire of valuable skills. From road construction to
          sales, fast forward to today and you'll find me managing the craft
          cocktail bar at Storia Cucina.
        </p>
      </div>
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
  );
}
