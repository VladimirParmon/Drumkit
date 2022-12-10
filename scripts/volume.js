export function handleIndicatorLooks(e) {
  const t = e.target;
  const value = ((t.value - t.min) / (t.max - t.min)) * 100;
  t.style.background =
    "linear-gradient(to right, #d08282 0%, #d10303 10%" +
    value +
    "%, #fff " +
    value +
    "%, white 100%)";
}

export function showSlider(isRicardoScreen, volume) {
  isRicardoScreen ? volume.classList.remove("disabled") : volume.classList.add("disabled");
}
