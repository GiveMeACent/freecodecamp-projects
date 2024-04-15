import { useEffect } from "react";

const Editor = (props) => {
  useEffect(() => {
    props.setCode("");
  }, []);

  return (
    <div className="editor-wrapper">
      <div className="editor-header">
        <p className="editor-title">Editor</p>
        <button className="full-screen-button"></button>
      </div>
      <textarea
        cols="30"
        rows="10"
        className="editor-textarea"
        onChange={(e) => {
          props.setCode(e.target.value);
        }}
      ></textarea>
    </div>
  );
};

export default Editor;
