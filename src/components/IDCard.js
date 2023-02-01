import React from "react";
import { Headshot } from "../images/index";
import { BsCheck } from "react-icons/bs";
import { IconContext } from "react-icons";
import { GiDiploma } from "react-icons/gi";
import { VscGithubInverted } from "react-icons/vsc";
import { SiLinkedin } from "react-icons/si";
import "../styles/Cards/AvatarCard.css";

export default function IDCard() {
  return (
    <div className="card c-flex box-shadow">
      <svg width="0" height="0">
        <linearGradient id="blue-gradient" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop stopColor="#7a6ded" offset="0%" />
          <stop stopColor="#591885" offset="100%" />
        </linearGradient>
      </svg>
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
          <ul className="skills-list">
            <IconContext.Provider value={{ className: "checks" }}>
              <li>
                <BsCheck />
                JavaScript (ES6+)
              </li>
              <li>
                <BsCheck />
                Node.js
              </li>

              <li>
                <BsCheck />
                C# (.NET ecosystem)
              </li>
              <li>
                <BsCheck />
                SASS
              </li>
              <li>
                <BsCheck />
                React
              </li>

              <li>
                <BsCheck />
                Express
              </li>
              <li>
                <BsCheck />
                SQL
              </li>
              <li>
                <BsCheck />
                API
              </li>
            </IconContext.Provider>
          </ul>
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
        <a
          href="https://www.linkedin.com/in/sam-carson-33152416a/"
          target="_blank"
          rel="noreferrer"
          className="credit"
          id="left-credit"
        >
          <IconContext.Provider value={{ className: "credit-icon" }}>
            <SiLinkedin />
          </IconContext.Provider>
        </a>

        <a
          href="https://github.com/Sam-Carson"
          target="_blank"
          className="credit"
          rel="noreferrer"
        >
          <IconContext.Provider value={{ className: "credit-icon" }}>
            <VscGithubInverted />
          </IconContext.Provider>
        </a>
        <a
          href="../documents/file.pdf"
          target="_blank"
          rel="noreferrer"
          className="credit"
          id="right-credit"
        >
          <IconContext.Provider value={{ className: "credit-icon" }}>
            <GiDiploma />
          </IconContext.Provider>
        </a>
      </div>
    </div>
  );
}
