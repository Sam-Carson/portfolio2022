import React, { useState } from "react";
import { HeaderMenu } from ".";
import { BsMenuDown } from "react-icons/bs";
import { IconContext } from "react-icons";
import "../styles/SectionStyles/Header.css";

export default function Header() {
  const [showNav, setShowNav] = useState(false);

  return (
    <header>
      <div className="header-wrap c-flex">
        <button className="hamburger-cont">
          <IconContext.Provider value={{ size: "50px" }}>
            <BsMenuDown className="hamburger-icon" />
          </IconContext.Provider>
        </button>
      </div>
      {/* <div>{showNav ? <></> : <HeaderMenu />}</div> */}
    </header>
  );
}
