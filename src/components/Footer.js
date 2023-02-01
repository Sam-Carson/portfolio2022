import React from "react";
import { IconContext } from "react-icons";
import { GiDiploma } from "react-icons/gi";
import { VscGithubInverted } from "react-icons/vsc";
import { SiLinkedin } from "react-icons/si";

import "../styles/SectionStyles/Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container c-flex">
        <div className="footer-content">
          <div className="footer-icon-container c-flex">
            <IconContext.Provider value={{ className: "footer-icon" }}>
              <a
                href="https://www.linkedin.com/in/sam-carson-33152416a/"
                target="_blank"
                rel="noreferrer"
              >
                <SiLinkedin />
              </a>
              <a
                href="https://github.com/Sam-Carson"
                target="_blank"
                rel="noreferrer"
              >
                <VscGithubInverted />
              </a>

              <a href="../documents/file.pdf" target="_blank" rel="noreferrer">
                <GiDiploma />
              </a>
            </IconContext.Provider>
          </div>
          <div className="footer-details c-flex">
            <p>
              View
              <a
                href="https://github.com/Sam-Carson/portfolio2022"
                className="footer-source-code-link"
              >
                source code
              </a>
            </p>
            <p>Created by Sam Carson | 2023</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
