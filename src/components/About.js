import React from "react";
import { FaRegUser } from "react-icons/fa";
import { IconContext } from "react-icons";

import "../styles/SectionStyles/About.css";

export default function About() {
  return (
    <section className="about-section c-flex">
      <div>
        <div className="code-icon-container c-flex">
          <div className="about-icon code-icon-wrapper-gy">
            <IconContext.Provider value={{ size: "50px" }}>
              <FaRegUser />
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </section>
  );
}
