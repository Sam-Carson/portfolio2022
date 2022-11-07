import React from "react";
import { FiLock } from "react-icons/fi";
import { TfiReload } from "react-icons/tfi";
import { IconContext } from "react-icons/lib";

import "../../styles/DevToolComp/URL.css";

export default function URL() {
  return (
    <div className="url-container">
      <IconContext.Provider value={{ color: "var(--icon-gray)", size: "15px" }}>
        <FiLock />
        <div className="text-truncate">
          app-dev-github-github-g59jpq2w5w7.github.dev
        </div>
        <TfiReload />
      </IconContext.Provider>
    </div>
  );
}
