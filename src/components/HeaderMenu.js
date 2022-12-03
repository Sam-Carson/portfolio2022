import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { IconContext } from "react-icons";

import "../styles/SectionStyles/HeaderMenu.css";

export default function MobileMenu() {
  return (
    <div className="mm-container">
      <nav>
        <ul className="mm-ul">
          <li>
            <button className="mm-btn mm-btn-home">
              Home
              <div className="hm-chevron-container">
                <IconContext.Provider
                  value={{ size: "60px", color: "var(--gray)" }}
                >
                  <svg width="0" height="0">
                    <linearGradient
                      id="p-gradient"
                      x1="100%"
                      y1="100%"
                      x2="0%"
                      y2="0%"
                    >
                      <stop stopColor="#7a6ded" offset="0%" />
                      <stop stopColor="#591885" offset="100%" />
                    </linearGradient>
                  </svg>
                  <FiChevronRight style={{ stroke: "url(#p-gradient" }} />
                </IconContext.Provider>
              </div>
            </button>
          </li>
          <li>
            <button className="mm-btn mm-btn-about">
              About
              <div className="hm-chevron-container">
                <IconContext.Provider
                  value={{ size: "60px", color: "var(--gray)" }}
                >
                  <svg width="0" height="0">
                    <linearGradient
                      id="gy-gradient"
                      x1="100%"
                      y1="100%"
                      x2="0%"
                      y2="0%"
                    >
                      <stop stopColor="rgb(133, 190, 249)" offset="0%" />
                      <stop stopColor="rgb(238, 134, 228)" offset="100%" />
                    </linearGradient>
                  </svg>
                  <FiChevronRight style={{ stroke: "url(#gy-gradient" }} />
                </IconContext.Provider>
              </div>
            </button>
          </li>
          <li>
            <button className="mm-btn mm-btn-projects">
              Projects
              <div className="hm-chevron-container">
                <IconContext.Provider
                  value={{ size: "60px", color: "var(--gray)" }}
                >
                  <svg width="0" height="0">
                    <linearGradient
                      id="pb-gradient"
                      x1="100%"
                      y1="100%"
                      x2="0%"
                      y2="0%"
                    >
                      <stop stopColor="rgb(71, 227, 84)" offset="0%" />
                      <stop stopColor="rgb(251, 237, 83)" offset="100%" />
                    </linearGradient>
                  </svg>
                  <FiChevronRight style={{ stroke: "url(#pb-gradient" }} />
                </IconContext.Provider>
              </div>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
