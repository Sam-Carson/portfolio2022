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
            <IconContext.Provider
              value={{ size: "80px", color: "var(--gray)" }}
            >
              <DiHtml5 className="ts-icon" />
              <DiReact className="ts-icon" />
              <DiVisualstudio className="ts-icon" />
              <DiTerminal className="ts-icon" />
            </IconContext.Provider>
          </div>
          <div className="ts-flex ts-flex-middle marg-a c-flex">
            <IconContext.Provider
              value={{ size: "80px", color: "var(--gray)" }}
            >
              <DiCss3 className="ts-icon" />
              <DiBootstrap className="ts-icon" />
              <DiGitBranch className="ts-icon" />
              <DiStackoverflow className="ts-icon" />
            </IconContext.Provider>
          </div>
          <div className="ts-flex flex-right marg-a c-flex">
            <IconContext.Provider
              value={{ size: "80px", color: "var(--gray)" }}
            >
              <DiJsBadge className="ts-icon" />
              <DiSass className="ts-icon" />
              <DiGithubBadge className="ts-icon" />
              <SiCsharp className="ts-icon" />
            </IconContext.Provider>
          </div>
        </div>
      </Fade>
    </div>
  );
}
