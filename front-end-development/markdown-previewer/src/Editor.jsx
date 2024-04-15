import { useState, useEffect } from "react";

const Editor = () => {
  return (
    <div className="editor-wrapper">
      <div className="editor-header">
        <p className="editor-title">Editor</p>
        <button className="full-screen-button"></button>
      </div>
      <textarea cols="30" rows="10" className="editor-textarea"></textarea>
    </div>
  );
};

export default Editor;
