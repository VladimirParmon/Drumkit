import { runClock } from "./scripts/clock.js";
import { getSoundsArray, playFromClick, keyToIdentifier } from "./scripts/sounds.js";
import { handleIndicatorLooks, showSlider } from "./scripts/volume.js";
import { changeSlide, flipButton } from "./scripts/slider.js";

const volume = document.querySelector("#volume-control");
volume.addEventListener("input", function (e) {
  ricardo.volume = e.currentTarget.value / 100;
});
volume.oninput = handleIndicatorLooks;

//=============================================================//

let isRicardoScreen = false;
const transitionButton = document.querySelector("#transitionButton");
const ricardo = document.getElementById("ricardo");
ricardo.volume = 0.1;

transitionButton.addEventListener("click", (event) => {
  changeSlide();
  isRicardoScreen = !isRicardoScreen;
  flipButton(isRicardoScreen, event);
  showSlider(isRicardoScreen, volume);
  isRicardoScreen ? ricardo.play() : ricardo.pause();
});

//=============================================================//

const pianoSounds = getSoundsArray(12, true);
const gachiSounds = getSoundsArray(19, false);

const pianoKeys = document.querySelectorAll(".pianoKey");
const memeButtons = document.querySelectorAll(".button");
pianoKeys.forEach((key) =>
  key.addEventListener("click", (event) => playFromClick(event.target.id, pianoSounds))
);
memeButtons.forEach((button) =>
  button.addEventListener("click", (event) => playFromClick(event.target.id, gachiSounds))
);

//=============================================================//

window.addEventListener("keydown", (e) => {
  setStyleAndPlay(keyToIdentifier[e.code]);
});

window.addEventListener("keyup", (e) => {
  removeStyle(keyToIdentifier[e.code]);
});

function setStyleAndPlay(audioFileNumber) {
  const key = findKey(audioFileNumber);
  const soundBite = findSoundBite(audioFileNumber);
  if (key && soundBite) {
    key.classList.add("playing");
    soundBite.currentTime = 0;
    soundBite.play();
  }
}

function findKey(audioFileNumber) {
  return isRicardoScreen
    ? document.querySelector(`#meme-${audioFileNumber}`)
    : document.querySelector(`#piano-${audioFileNumber}`);
}

function findSoundBite(audioFileNumber) {
  return isRicardoScreen ? gachiSounds[audioFileNumber - 1] : pianoSounds[audioFileNumber - 1];
}

function removeStyle(audioFileNumber) {
  const key = findKey(audioFileNumber);
  if (key) key.classList.remove("playing");
}

//=============================================================//

window.onload = runClock();
