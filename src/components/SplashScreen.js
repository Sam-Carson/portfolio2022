import React from "react";
import CircleLoader from "react-spinners/CircleLoader";

import "../styles/SectionStyles/SplashScreen.css";

export default function SplashScreen() {
  return (
    <div className="splashscreen">
      <div className="loader-container">
        <CircleLoader size={100} color={"#814df1"} />
      </div>
    </div>
  );
}
