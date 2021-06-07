// all info on audios
const audio = {
  simple: { sound: new Audio("./cat-meow.wav") },
  plus: { sound: new Audio("./cute-meow.wav") },
  clear: { sound: new Audio("./cat-purr.wav") },
  invalid: { sound: new Audio("./angry-cat.wav") },
  success: { sound: new Audio("./tambourine.wav") },
};

const playAudio = (key, onEnded) => {
  if (isAudioEnabled) {
    audio[key].sound.play();
    if (onEnded) {
      audio[key].sound.addEventListener("ended", onEnded);
    }
  } else if (onEnded) {
  }
};

const loopAudio = (key) => {
  if (isAudioEnabled) {
    audio[key].sound.loop = true;
    audio[key].sound.play();
  }
};

const stopAudio = (key) => {
  if (isAudioEnabled) {
    audio[key].sound.currentTime = 0;
    audio[key].sound.loop = false;
    audio[key].sound.pause();
  }
};

const stopAllAudio = () => {
  Object.keys(audio).forEach(stopAudio);
};

let isAudioEnabled = true;

const toggleAudio = () => {
  if (isAudioEnabled) {
    isAudioEnabled = false;
    stopAllAudio();
  } else {
    isAudioEnabled = true;
  }
};

const audioEnabledButton = document.querySelector("#audio-enabled-button");
audioEnabledButton.addEventListener("click", toggleAudio);
