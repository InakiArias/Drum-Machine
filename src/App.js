import { useState } from 'react';
import './App.css';
import DrumPad from './asd/DrumPad';
import BUTTONS_DATA from './constants/BUTTONS_DATA';
import Display from './asd/Display';
import playAudio from './utils/playAudio';

function App() {
  const [playingPadName, setPlayingPadName] = useState("-----");

  const onClick = (letter, id) => {
    playAudio(letter);
    setPlayingPadName((prevName) => id);
  }

  const onEnded = (event) => {
    let letter = event.target.id;
    let name = BUTTONS_DATA.find(button => button.buttonLetter === letter).soundName;

    setPlayingPadName((prevName) => 
      name === prevName ? "-----" : prevName
    );
  }

  return (
    <div className="App">
      {BUTTONS_DATA.map((button) =>
        <DrumPad
          key={button.buttonLetter}
          letter={button.buttonLetter}
          id={button.soundName}
          url={button.soundUrl}
          onClick={onClick}
          onEnded={onEnded}
        />)}
      <Display playingPadName={playingPadName} />
    </div>
  );
}

export default App;
