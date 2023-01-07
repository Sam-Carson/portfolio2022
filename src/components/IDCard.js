import React from "react";
import { Headshot } from "../images/index";
import "../styles/Cards/AvatarCard.css";

export default function IDCard() {
  return (
    <div className="card c-flex">
      <div className="column-container">
        <img id="avatar-img" src={Headshot} alt="avatar" />
        <p id="header-p">Hey, I'm Sam!</p>
        <p id="description-p">
          I've been programming for 4+ years and plan on doing it for a lot
          longer! I have hands on experince building projects for a consumer.
        </p>
      </div>
      <div className="credits-row c-flex">
        <div className="credit" id="left-credit">
          <p>Resume</p>
        </div>
        <div className="credit">
          <p>Github</p>
        </div>
        <div className="credit">
          <p>StackOverflow</p>
        </div>
        <div className="credit" id="right-credit">
          <p>Diploma</p>
        </div>
      </div>
    </div>
  );
}
