import { useState, useEffect } from 'react';
import './DrumPad.css';

function DrumPad({ letter, id, url, onClick, onEnded, playingPadName }) {
  const [isPressed, setIsPressed] = useState(false);

  const buttonClick = () => {
    onClick(letter, id);
  };

  const switchPressed = () => {
    setIsPressed(isPressed => !isPressed);
  };

  useEffect(() => {
    if (playingPadName === id && !isPressed) {
      switchPressed();
      setTimeout(() => switchPressed(), 400);
    }
  });

  return (
    <div onClick={buttonClick}>
      <div className={`drum-pad ${isPressed ? "isPressed" : ""}`} id={id}>
        {letter}
        <audio src={url} className="clip" id={letter} onEnded={onEnded}>
          Your browser does not support the <code>audio</code> element.
        </audio>
      </div>
    </div>
  );
}

export default DrumPad;