import React from "react";
import {
  DevToolBrowserHeader,
  TextEditorTabs,
  TextEditor,
  Terminal,
  LivePreview,
} from "./index";
import "../../styles/DevToolComp/DevToolComp.css";

export default function DevToolComp() {
  return (
    <div className="devToolContainer">
      <DevToolBrowserHeader />
      <div className="flex-container c-flex">
        <div className="flex-left max-width-750">
          <div className="text-editor-container">
            <TextEditorTabs />
            <TextEditor />
          </div>
          <div>
            <Terminal />
          </div>
        </div>
        <div className="flex-right max-width-550">
          <div className="live-browser-container">
            <LivePreview />
          </div>
        </div>
      </div>
    </div>
  );
}
