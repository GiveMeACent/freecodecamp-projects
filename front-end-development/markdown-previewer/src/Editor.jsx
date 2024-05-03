import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faExpand } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import "./Editor.css";

const Editor = (props) => {
  useEffect(() => {
    props.setCode("");
  }, []);

  return (
    <div className="editor-wrapper">
      <div className="editor-header">
        <div className="editor-icon-title-wrapper">
          <div className="editor-icon">
            <FontAwesomeIcon icon={faCode} />
          </div>
          <p className="editor-title">Editor</p>
        </div>
        <button className="editor-full-screen-button">
          <FontAwesomeIcon icon={faExpand} />
        </button>
      </div>
      <textarea
        cols="62"
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
