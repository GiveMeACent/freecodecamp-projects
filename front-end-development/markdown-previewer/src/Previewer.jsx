import { useState, useEffect } from "react";
import "./MarkdownPreviewer.css";

const Previewer = () => {
  return (
    <div className="previewer-wrapper">
      <div className="previewer-header">
        <p className="previewer-title">Previewer</p>
        <button className="full-screen-button"></button>
      </div>
      <div className="code"></div>
    </div>
  );
};

export default Previewer;
