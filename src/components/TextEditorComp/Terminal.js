import React from "react";
import "../../styles/DevToolComp/Terminal.css";

export default function Terminal() {
  return (
    <div className="terminal-container">
      <ul className="c-flex list-margin-bottom no-padding terminal-tabs-container">
        <li className="term-3 term-selected terminal-tab">Terminal</li>
        <li className="term-3 term-unselected terminal-tab">Output</li>
        <li className="term-3 term-unselected terminal-tab">Problems</li>
        <li className="term-3 term-unselected terminal-tab">Debug Console</li>
      </ul>
      <div style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
        <div>
          <span className="color-subtle-gray terminal-font">[08:24:40]</span>
          <span className="color-subtle-gray terminal-font task-padding">
            Starting
          </span>
          <span className="color-subtle-gray terminal-font">'</span>
          <span className="color-highlight-blue terminal-font">
            watch-extension:mongoDB-database-connection
          </span>
          <span className="color-subtle-gray terminal-font">' ...</span>
        </div>
        <div>
          <span className="color-subtle-gray terminal-font">[08:24:40]</span>
          <span className="color-subtle-gray terminal-font task-padding">
            Finished
          </span>
          <span className="color-subtle-gray terminal-font">'</span>
          <span className="color-highlight-blue terminal-font">
            clean-extension:mongoDB-database-connection
          </span>
          <span className="color-subtle-gray terminal-font">' after</span>
          <span className="terminal-font font-color-time time-padding">
            302 ms
          </span>
        </div>
        <div>
          <span className="color-subtle-gray terminal-font">[08:25:12]</span>
          <span className="color-subtle-gray terminal-font task-padding">
            Starting
          </span>
          <span className="color-subtle-gray terminal-font">'</span>
          <span className="color-highlight-blue terminal-font">
            watch-extension:vscode-api-tests
          </span>
          <span className="color-subtle-gray terminal-font">' ...</span>
        </div>
        <div>
          <span className="color-subtle-gray terminal-font">[08:25:12]</span>
          <span className="color-subtle-gray terminal-font task-padding">
            Finished
          </span>
          <span className="color-subtle-gray terminal-font">'</span>
          <span className="color-highlight-blue terminal-font">
            clean-extension:javascript-language-features
          </span>
          <span className="color-subtle-gray terminal-font">' after</span>
          <span className="terminal-font font-color-time time-padding">
            279 ms
          </span>
        </div>
        <div>
          <span className="color-subtle-gray terminal-font">[08:25:12]</span>
          <span className="color-subtle-gray terminal-font task-padding">
            Starting
          </span>
          <span className="color-subtle-gray terminal-font">'</span>
          <span className="color-highlight-blue terminal-font">
            watch-extension:javascript-language-features
          </span>
          <span className="color-subtle-gray terminal-font">' ...</span>
        </div>
        <div>
          <span className="color-subtle-gray terminal-font">[08:25:12]</span>
          <span className="color-subtle-gray terminal-font task-padding">
            Finished
          </span>
          <span className="color-subtle-gray terminal-font">'</span>
          <span className="color-highlight-blue terminal-font">
            clean-extension:C#-language-features
          </span>
          <span className="color-subtle-gray terminal-font">' ...</span>
          <span className="terminal-font font-color-time time-padding">
            215 ms
          </span>
        </div>
        <div>
          <span className="color-subtle-gray terminal-font">[08:25:12]</span>
          <span className="color-subtle-gray terminal-font task-padding">
            Starting
          </span>
          <span className="color-subtle-gray terminal-font">'</span>
          <span className="color-highlight-blue terminal-font">
            watch-extension:C#-language-features
          </span>
          <span className="color-subtle-gray terminal-font">' ...</span>
        </div>
        <div>
          <span className="color-subtle-gray terminal-font">[08:25:45]</span>
          <span className="color-subtle-gray terminal-font task-padding">
            Finished
          </span>
          <span className="color-subtle-gray terminal-font">'</span>
          <span className="color-highlight-blue terminal-font">
            clean-extension:html-language-features
          </span>
          <span className="color-subtle-gray terminal-font">' ...</span>
          <span className="terminal-font font-color-time time-padding">
            361 ms
          </span>
        </div>
        <div>
          <span className="color-subtle-gray terminal-font">[08:25:45]</span>
          <span className="color-subtle-gray terminal-font task-padding">
            Starting
          </span>
          <span className="color-subtle-gray terminal-font">'</span>
          <span className="color-highlight-blue terminal-font">
            watch-extension:html-language-features
          </span>
          <span className="color-subtle-gray terminal-font">' ...</span>
        </div>
        <div>
          <span className="color-subtle-gray terminal-font">[08:26:05]</span>
          <span className="color-subtle-gray terminal-font task-padding">
            Finished
          </span>
          <span className="color-subtle-gray terminal-font">'</span>
          <span className="color-highlight-blue terminal-font">
            clean-client
          </span>
          <span className="color-subtle-gray terminal-font">' after</span>
          <span className="terminal-font font-color-time time-padding">
            4.35
          </span>
        </div>
        <div>
          <span className="color-subtle-gray terminal-font">[08:26:05]</span>
          <span className="color-subtle-gray terminal-font task-padding">
            Starting
          </span>
          <span className="color-subtle-gray terminal-font">'</span>
          <span className="color-highlight-blue terminal-font">
            watch-client
          </span>
          <span className="color-subtle-gray terminal-font">' ...</span>
        </div>
      </div>
    </div>
  );
}
