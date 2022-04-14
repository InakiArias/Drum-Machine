import { useState } from 'react';
import './DrumPad.css';

function DrumPad({letter, id, url, onClick, onEnded}) {

  const [isPressed, setIsPressed] = useState(false);

  const buttonClick = () => {
    onClick(letter, id);
  };

  return (
    <div onClick={buttonClick} id={id}>
        <div
          className={`drum-pad ${isPressed ? "isPressed" : ""}`}
         >
          {letter}
          <audio
            src={url}
            className="clip"
            id={letter}
            onEnded={onEnded}
          >
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </div>
       </div>
  );
}

export default DrumPad;