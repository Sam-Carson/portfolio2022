import React from "react";
import { SpaceHero } from "../images";
import "../styles/SectionStyles/HeroBackground.css";

export default function HeroBackground() {
  return (
    <div className="hero-bkgrnd">
      <img src={SpaceHero} alt="Space" className="hero-img" />
      <div className="hero-bkgrnd-fade"></div>
    </div>
  );
}
