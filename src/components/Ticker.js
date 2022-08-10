import React from "react";
import "../styles/Ticker/Ticker.css";
export default function Ticker() {
  const skills = [];
  skills.push(
    "REACT",
    "HTML5",
    "CSS3",
    "JAVASCRIPT",
    "C#",
    "SQL",
    "NODE.JS",
    "SASS",
    "EXPRESS"
  );
  return (
    <section className="ticker-container">
      <div className="marquee">
        <div className="ticker-banner">
          <div className="ticker-spacer ticker-item"></div>
          <div className="ticker-text ticker-item">REACT</div>
          <div className="ticker-spacer ticker-item"></div>
          <div className="ticker-text ticker-item">HTML5</div>
          <div className="ticker-spacer ticker-item"></div>
          <div className="ticker-text ticker-item">CSS3</div>
          <div className="ticker-spacer ticker-item"></div>
          <div className="ticker-text ticker-item">JAVASCRIPT</div>
          <div className="ticker-spacer ticker-item"></div>
          <div className="ticker-text ticker-item">C#</div>
          <div className="ticker-spacer ticker-item"></div>
          <div className="ticker-text ticker-item">ASP.NET</div>
          <div className="ticker-spacer ticker-item"></div>
          <div className="ticker-text ticker-item">SQL</div>
          <div className="ticker-spacer ticker-item"></div>
          <div className="ticker-text ticker-item">NODE.JS</div>
          <div className="ticker-spacer ticker-item"></div>
          <div className="ticker-text ticker-item">SASS</div>
          <div className="ticker-spacer ticker-item"></div>
          <div className="ticker-text ticker-item ticker-express">EXPRESS</div>
        </div>
        <div className="ticker-banner">
          <div className="ticker-spacer ticker-item"></div>
          <div className="ticker-text ticker-item">REACT</div>
          <div className="ticker-spacer ticker-item"></div>
          <div className="ticker-text ticker-item">HTML5</div>
          <div className="ticker-spacer ticker-item"></div>
          <div className="ticker-text ticker-item">CSS3</div>
          <div className="ticker-spacer ticker-item"></div>
          <div className="ticker-text ticker-item">JAVASCRIPT</div>
          <div className="ticker-spacer ticker-item"></div>
          <div className="ticker-text ticker-item">C#</div>
          <div className="ticker-spacer ticker-item"></div>
          <div className="ticker-text ticker-item">ASP.NET</div>
          <div className="ticker-spacer ticker-item"></div>
          <div className="ticker-text ticker-item">SQL</div>
          <div className="ticker-spacer ticker-item"></div>
          <div className="ticker-text ticker-item">NODE.JS</div>
          <div className="ticker-spacer ticker-item"></div>
          <div className="ticker-text ticker-item">SASS</div>
          <div className="ticker-spacer ticker-item"></div>
          <div className="ticker-text ticker-item">EXPRESS</div>
        </div>
      </div>
    </section>

    // <div className="ticker-container">
    //   <div className="ticker-banner">
    //     <div className="ticker-spacer"></div> <h5>REACT</h5>
    //     <div className="ticker-spacer"></div> <h5>HTML5</h5>
    //     <div className="ticker-spacer"></div> <h5>CSS3</h5>
    //     <div className="ticker-spacer"></div> <h5>JAVASCRIPT</h5>
    //     <div className="ticker-spacer"></div> <h5>C#</h5>
    //     <div className="ticker-spacer"></div> <h5>ASP.NET</h5>
    //     <div className="ticker-spacer"></div> <h5>SQL</h5>
    //     <div className="ticker-spacer"></div> <h5>NODE.JS</h5>
    //     <div className="ticker-spacer"></div> <h5>SASS</h5>
    //     <div className="ticker-spacer"></div> <h5>EXPRESS</h5>
    //   </div>
    // </div>
  );
}
