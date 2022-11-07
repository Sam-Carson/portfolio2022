import React from "react";
import "../../styles/DevToolComp/TextEditorTabs.css";

export default function TextEditorTabs() {
  return (
    <div className="tab-container c-flex">
      <ul className="c-flex">
        <li className="tab-x tab-y tab-selected">Index.html</li>
        <li className="tab-x tab-y tab-unselected">script.js</li>
        <li className="tab-x tab-y tab-unselected">package.json</li>
      </ul>
    </div>
  );
}
