import React from "react";
import {
  DeveloperActivityIllustration,
  PairProgrammingIllustration,
  SolutionMindsetIllustration,
} from "../images";
import { DescriptionContainer, SkillsBox } from "./index";
import "../styles/Box/Box.scss";
export default function Box() {
  //////////////Front-end
  //Frameworks
  const frontEndContent1 = ["React", ".NET"];
  //Libraries
  const frontEndContent2 = ["MUI", "Tailwind", "Bootstrap"];
  //////////////Back-end
  // Runtime Enviornemnts
  const backEndContent1 = ["Node.js"];
  //Libraries
  const backEndContent2 = ["Express", "ASP.NET"];
  //////////////Data Access
  //Runtime Enviornmentes
  const dataAccessContent1 = ["Node.js", "Express"];
  //
  const dataAccessContent2 = ["SQL", "Firebase", "MongoDB", "SSMS"];

  return (
    <div className="box-container">
      <SkillsBox
        img={DeveloperActivityIllustration}
        textSize="small"
        textColor="black"
        title="Front-end"
        titleText="when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but
        also the leap into electronic typesetting, remaining essentially
        unchanged."
        descriptionHeader1="Frameworks:"
        descriptionContent1={frontEndContent1}
        descriptionHeader2="Libraries:"
        descriptionContent2={frontEndContent2}
      />

      <SkillsBox
        img={PairProgrammingIllustration}
        textSize="small"
        textColor="black"
        title="Back-end"
        titleText="when an unknown printer took a galley of type and scrambled it to make
                a type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged."
        descriptionHeader1="Runtime enviornments:"
        descriptionContent1={backEndContent1}
        descriptionHeader2="Libraries:"
        descriptionContent2={backEndContent2}
      />

      <SkillsBox
        img={SolutionMindsetIllustration}
        textSize="small"
        textColor="black"
        title="Data Access"
        titleText="when an unknown printer took a galley of type and scrambled it to make
              a type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged."
        descriptionHeader1="Runtime enviornments:"
        descriptionContent1={dataAccessContent1}
        descriptionHeader2="Frameworks:"
        descriptionContent2={dataAccessContent2}
      />
    </div>
  );
}
