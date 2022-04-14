function playAudio(letter) {
    let el = document.getElementById(letter);
  
    if (el !== null) {
      el.play();
      el.currentTime = 0;
    }
  } //Play the audio that corresponds to the letter passed in

  export default playAudio;