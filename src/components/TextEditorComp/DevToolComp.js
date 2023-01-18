import React from "react";
import {
  DevToolBrowserHeader,
  TextEditorTabs,
  TextEditor,
  Terminal,
  LivePreview,
} from "./index";
import { Spotify } from "../../images/index";
import "../../styles/DevToolComp/DevToolComp.css";

export default function DevToolComp() {
  return (
    <div className="devToolContainer">
      <DevToolBrowserHeader />
      <div className="flex-container c-flex">
        <div className="flex-left">
          <div className="text-editor-container">
            <TextEditorTabs />
            <TextEditor />
          </div>
          <div>
            <Terminal />
          </div>
        </div>
        <div className="te-flex-right max-width-550">
          <div className="live-browser-container"></div>
        </div>
      </div>
    </div>
  );
}
