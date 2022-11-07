import React from "react";
import { URL } from "./index";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import { IoAddSharp } from "react-icons/io5";
import "../../styles/DevToolComp/DevToolBrowserHeader.css";
import "../../App.css";
import { IconContext } from "react-icons/lib";

export default function DevToolBrowserHeader() {
  let leftArrowStyle = { paddingRight: "8px" };
  let rightArrowStyle = { paddingLeft: "8px" };
  return (
    <div className="devToolBrowserHeader-container c-flex">
      <IconContext.Provider value={{ color: "var(--white)", size: "17px" }}>
        <div className="arrow-icon-container">
          <TfiAngleLeft style={leftArrowStyle} />
          <TfiAngleRight style={rightArrowStyle} />
        </div>
      </IconContext.Provider>
      <URL />
      <IconContext.Provider value={{ color: "var(--white)", size: "25px" }}>
        <div className="plus-icon-container">
          <IoAddSharp />
        </div>
      </IconContext.Provider>
    </div>
  );
}
