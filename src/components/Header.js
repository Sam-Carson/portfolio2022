import React from "react";
import { BsMenuDown } from "react-icons/bs";
import { IconContext } from "react-icons";
import "../styles/SectionStyles/Header.css";

export default function Header() {
  return (
    <header>
      <div className="header-wrap c-flex">
        <div className="hamburger-cont">
          <IconContext.Provider value={{ size: "50px" }}>
            <BsMenuDown className="hamburger-icon" />
          </IconContext.Provider>
        </div>
      </div>
    </header>
  );
}
