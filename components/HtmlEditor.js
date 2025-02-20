import { Card } from "antd";
import React, { useState, useRef, useEffect } from "react";

export default function HtmlEditor() {
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");
  const outputRef = useRef(null);
  useEffect(() => {
    const output = outputRef.current;
    if (output) {
      output.contentDocument.body.innerHTML =
        htmlCode + "<style>" + cssCode + "</style>";
    }
  }, [htmlCode, cssCode]);
  const run = () => {
    outputRef.current.contentWindow.eval(jsCode);
  };
  return (
    <div className="container">
      <div className="left flex p-3">
        <Card className="input-card h-full m-3">
          <h2>HTML</h2>
          <textarea
            id="html_code"
            value={htmlCode}
            onChange={(e) => setHtmlCode(e.target.value)}
            className="w-[200px] h-[250px] outline-none text-gray-400"
          />
        </Card>
        <Card className="input-card h-full m-3">
          <h2>CSS</h2>
          <textarea
            id="style_sheet"
            value={cssCode}
            onChange={(e) => setCssCode(e.target.value)}
            className="w-[200px] h-[250px] outline-none text-gray-400"
          />
        </Card>
        <Card className="input-card h-full m-3">
          <h2>JS</h2>
          <textarea
            id="JS_code"
            value={jsCode}
            onChange={(e) => setJsCode(e.target.value)}
            className="w-[200px] h-[250px] outline-none text-gray-400"
          />
        </Card>

        <button onClick={run}>Run JS</button>
        <br />
      </div>
      <div className="right">
        <label>
          <i className="fa-solid fa-play"></i> Output
        </label>
        <hr />
        <iframe id="output" ref={outputRef}></iframe>
      </div>
    </div>
  );
}
