import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faExpand } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import "./Previewer.css";

const Previewer = (props) => {
  const [markedCode, setMarkedCode] = useState("");

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
        <button className="previewer-full-screen-button">
          <FontAwesomeIcon icon={faExpand} />
        </button>
      </div>
      <div className="code" dangerouslySetInnerHTML={{ __html: markedCode }} />
    </div>
  );
};

export default Previewer;
