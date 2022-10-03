import React, { useState } from "react";
import { SlideOutNav } from "./index";
import { FaEllipsisV } from "react-icons/fa";
import { IconContext } from "react-icons";

import "../styles/Navigation/Navigation.css";

export default function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className={`navigation ${showMenu ? "show" : "hide"} `}>
      <a href="/" className="mobile-resume-link">
        <div className="mobile-resume-container">resume</div>
      </a>
      <IconContext.Provider
        value={{
          className: `nav-icon ${showMenu ? "active" : "inactive"}`,
          size: "6rem",
        }}
      >
        <FaEllipsisV onClick={() => setShowMenu(!showMenu)} />
      </IconContext.Provider>
      {showMenu && <SlideOutNav {...showMenu} />}
    </nav>
  );
}
