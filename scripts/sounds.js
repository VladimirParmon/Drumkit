const pathToPianoSounds = "./assets/sounds/normal/0.mp3";
const pathToGachiSounds = "./assets/sounds/gachi/0.mp3";

export function getSoundsArray(length, isNormalSounds) {
  const pathTemplate = isNormalSounds ? pathToPianoSounds : pathToGachiSounds;
  return [...Array(length).keys()]
    .map((x) => ++x)
    .map((y) => {
      const path = pathTemplate.replace("0", y);
      return new Audio(path);
    });
}

export function playFromClick(id, audios) {
  const audioIndex = id.split("-")[1] - 1;
  const audio = audios[audioIndex];
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
}

export const keyToIdentifier = {
  KeyA: 13,
  KeyS: 8,
  KeyD: 9,
  keyF: 14,
  KeyG: 10,
  KeyH: 11,
  KeyJ: 12,
  KeyK: 15,
  keyL: 16,
  Semicolon: 17,
  Quote: 18,
  KeyZ: 1,
  KeyX: 2,
  KeyC: 3,
  KeyV: 19,
  KeyB: 4,
  KeyN: 5,
  KeyM: 6,
  Comma: 7,
};
