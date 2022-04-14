import { useEffect, useState } from 'react';
import './App.css';
import DrumPad from './components/DrumPad';
import BUTTONS_DATA from './constants/BUTTONS_DATA';
import Display from './components/Display';
import playAudio from './utils/playAudio';
import setFocus from './utils/setFocus';

function App() {
  const [playingPadName, setPlayingPadName] = useState("-----");
  useEffect(setFocus, []);

  const onClick = (letter, id) => {
    playAudio(letter);
    setPlayingPadName((prevName) => id);
  }

  const onKeyDown = (event) => {
    let letter = event.key.toUpperCase();

    let name = BUTTONS_DATA.find(button => button.buttonLetter === letter).soundName;

    setPlayingPadName((prevName) => name);

    playAudio(letter);
  }

  const onEnded = (event) => {
    let letter = event.target.id;
    let name = BUTTONS_DATA.find(button => button.buttonLetter === letter).soundName;

    setPlayingPadName((prevName) => 
      name === prevName ? "-----" : prevName
    );
  }

  return (
    <div 
        id="drum-machine"
        tabIndex={0}
        onBlur={(e) => setFocus()}
        onKeyDown={onKeyDown}
        onClick={(e) => setFocus()}
    >
      {BUTTONS_DATA.map((button) =>
        <DrumPad
          key={button.buttonLetter}
          letter={button.buttonLetter}
          id={button.soundName}
          url={button.soundUrl}
          onClick={onClick}
          onEnded={onEnded}
          playingPadName={playingPadName}
        />)}
      <Display playingPadName={playingPadName} />
    </div>
  );
}

export default App;
