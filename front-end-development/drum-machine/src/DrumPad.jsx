import { useState, useEffect } from "react";
import "./DrumPad.css";

const DrumPad = (props) => {
  const [audio, setAudio] = useState(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    setAudio(new Audio(props.url));
  }, [props.url]);

  const handleClickPlayAudio = () => {
    if (playing) {
      audio.pause();
      audio.currentTime = 0;
    } else audio.play();

    setPlaying(!setPlaying);
  };
  return (
    <button
      className="drum-button"
      onClick={() => {
        handleClickPlayAudio();
      }}
    ></button>
  );
};

export default DrumPad;
