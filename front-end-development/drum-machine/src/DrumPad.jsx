import { useState, useEffect } from "react";
import "./DrumPad.css";

const DrumPad = (props) => {
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    setAudio(new Audio(props.url));
  }, [props.url]);

  const handleClickPlayAudio = () => {
    if (!audio.paused) audio.currentTime = 0;

    audio.play();
  };
  return (
    <button
      className="drum-button"
      onClick={() => {
        handleClickPlayAudio();
      }}
    >
      {props.text}
    </button>
  );
};

export default DrumPad;
