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
        <p className="previewer-title">Previewer</p>
        <button className="full-screen-button"></button>
      </div>
      <div className="code" dangerouslySetInnerHTML={{ __html: markedCode }} />
    </div>
  );
};

export default Previewer;
