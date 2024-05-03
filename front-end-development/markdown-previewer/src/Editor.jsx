import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faExpand,
  faMinimize,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import "./Editor.css";

const Editor = (props) => {
  useEffect(() => {
    props.setCode(props.defaultCode);
  }, []);

  const [fullScreenState, setFullScreenState] = useState(false);
  const [textareaRows, setTextareaRows] = useState("10");

  const handleClickFullscreen = () => {
    if (!fullScreenState) setTextareaRows("75");
    else setTextareaRows("10");
    setFullScreenState(!fullScreenState);
  };

  return (
    <div className="editor-wrapper">
      <div className="editor-header">
        <div className="editor-icon-title-wrapper">
          <div className="editor-icon">
            <FontAwesomeIcon icon={faCode} />
          </div>
          <p className="editor-title">Editor</p>
        </div>
        <button
          className="editor-full-screen-button"
          onClick={() => {
            handleClickFullscreen();
          }}
        >
          <FontAwesomeIcon icon={fullScreenState ? faMinimize : faExpand} />
        </button>
      </div>
      <textarea
        cols="62"
        rows={textareaRows}
        className="editor-textarea"
        id="editor"
        onChange={(e) => {
          props.setCode(e.target.value);
        }}
        defaultValue={props.defaultCode}
      ></textarea>
    </div>
  );
};

export default Editor;
