import React from "react";
import { FaGithub } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineBell } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import AppDevelopment from "../../images/application_development_5.png";

import "../../styles/DevToolComp/LivePreview.css";
export default function LivePreview() {
  return (
    <div className="lp-container">
      <div className="lp-header c-flex">
        <IconContext.Provider value={{ color: "var(--white)", size: "20px" }}>
          <div className="icon-padding">
            <AiOutlineMenu />
          </div>
          <div className="icon-padding">
            <FaGithub />
          </div>
          <div className="icon-padding">
            <AiOutlineBell />
          </div>
        </IconContext.Provider>
      </div>
      <div className="lp-image">
        <picture>
          <img
            src={AppDevelopment}
            alt="application development"
            className="img"
          />
        </picture>
      </div>
    </div>
  );
}
