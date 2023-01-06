import React from "react";
import {
  DiGitBranch,
  DiCss3,
  DiBootstrap,
  DiJsBadge,
  DiGithubBadge,
  DiReact,
  DiVisualstudio,
  DiSass,
  DiTerminal,
  DiHtml5,
  DiStackoverflow,
} from "react-icons/di";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import { SiCsharp } from "react-icons/si";
import { IconContext } from "react-icons";
import "../styles/SectionStyles/TechSkills.css";

export default function TechSkills() {
  return (
    <div className="ts-container c-flex">
      <div className="">
        <p className="text-fill-gradient">
          Using the latest technologies <br />
          to bring your idea to fruition ↘︎
        </p>
      </div>
      <Fade right>
        <div className="ts-wrapper">
          <div className="ts-flex ts-flex-left flex-left c-flex marg-a">
            <IconContext.Provider value={{ className: "ts-icon" }}>
              <DiHtml5 />
              <DiReact />
              <DiVisualstudio />
              <DiTerminal />
            </IconContext.Provider>
          </div>
          <div className="ts-flex ts-flex-middle marg-a c-flex">
            <IconContext.Provider value={{ className: "ts-icon" }}>
              <DiCss3 />
              <DiBootstrap />
              <DiGitBranch />
              <DiStackoverflow />
            </IconContext.Provider>
          </div>
          <div className="ts-flex flex-right marg-a c-flex">
            <IconContext.Provider value={{ className: "ts-icon" }}>
              <DiJsBadge />
              <DiSass />
              <DiGithubBadge />
              <SiCsharp />
            </IconContext.Provider>
          </div>
        </div>
      </Fade>
    </div>
  );
}
