import "./index.css";
import DrumPad from "./DrumPad";

function App() {
  return (
    <div className="app">
      <div className="drums-container">
        <DrumPad
          url="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
          text="Q"
        />
        <DrumPad
          url="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
          text="W"
        />
        <DrumPad
          url="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
          text="E"
        />
        <DrumPad
          url="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
          text="A"
        />
        <DrumPad
          url="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
          text="S"
        />
        <DrumPad
          url="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
          text="D"
        />
        <DrumPad
          url="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
          text="Z"
        />
        <DrumPad
          url="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
          text="X"
        />
        <DrumPad
          url="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
          text="C"
        />
      </div>
    </div>
  );
}

export default App;
