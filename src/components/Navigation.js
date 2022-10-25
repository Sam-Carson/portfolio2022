import React, { useState } from "react";
import { SlideOutNav } from "./index";
import { IoIosMenu } from "react-icons/io";
import { IconContext } from "react-icons";
import "../styles/Navigation/Navigation.css";

export default function Navigation() {
  const [showMenu, setShowMenu] = useState(false);
  const [hideOnScroll, setHideOnScroll] = useState(false);
  // keeps track of previous scroll
  const [lastScroll, setLastScroll] = useState(0);

  window.addEventListener("scroll", () => {
    // scrollY returns a number from (0 - beyond) in regards to pixels on the screen
    // 0 meaning the very top and anything above that meaning farther down the page.
    const currentScroll = window.scrollY;

    // if at the top of the page
    if (currentScroll <= 0) {
      setHideOnScroll(false);
    } else if (currentScroll < lastScroll) {
      // scrolling up
      setHideOnScroll(false);
    } else if (currentScroll > lastScroll) {
      // scrolling down
      setHideOnScroll(true);
    }

    // sets the lastScroll state
    setLastScroll(currentScroll);
  });

  return (
    <nav
      className={`navigation ${showMenu ? "show" : "hide"} ${
        hideOnScroll ? "scrollHide" : "scrollShow"
      }`}
    >
      <a href="/" className="logo-nav">
        SMDC
      </a>
      <IconContext.Provider
        value={{
          className: `nav-icon ${showMenu ? "active" : "inactive"}`,
        }}
      >
        <IoIosMenu onClick={() => setShowMenu(!showMenu)} />
      </IconContext.Provider>
      {/* {showMenu && <SlideOutNav {...showMenu} />} */}
      <ul className="full-screen-nav">
        <li>Home</li>
        <div className="nav-span"></div>
        <li>About</li>
        <div className="nav-span"></div>

        <li>Skills</li>
        <div className="nav-span"></div>

        <li>Projects</li>
      </ul>
      <a href="/" className="resume-link">
        Resume
      </a>
    </nav>
  );
}
