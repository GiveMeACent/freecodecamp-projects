import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faExpand,
  faMinimize,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import "./Previewer.css";

const Previewer = (props) => {
  const [markedCode, setMarkedCode] = useState("");
  const [fullScreenState, setFullScreenState] = useState(false);
  const [codeDivHeight, setcodeDivHeight] = useState("50vh");

  const handleClickFullscreen = () => {
    if (!fullScreenState) setcodeDivHeight("100vh");
    else setcodeDivHeight("50vh");
    setFullScreenState(!fullScreenState);
  };

  useEffect(() => {
    setMarkedCode(window.marked.parse(props.code));
  }, [props.code]);

  return (
    <div className="previewer-wrapper">
      <div className="previewer-header">
        <div className="previewer-icon-title-wrapper">
          <div className="previewer-icon">
            <FontAwesomeIcon icon={faCode} />
          </div>
          <p className="previewer-title">Previewer</p>
        </div>
        <button
          className="previewer-full-screen-button"
          onClick={() => {
            handleClickFullscreen();
          }}
        >
          <FontAwesomeIcon icon={fullScreenState ? faMinimize : faExpand} />
        </button>
      </div>
      <div
        className="code"
        id="preview"
        dangerouslySetInnerHTML={{ __html: markedCode }}
        style={{ height: codeDivHeight }}
      />
    </div>
  );
};

export default Previewer;
