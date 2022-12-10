const sliderContainer = document.querySelector(".sliderContainer");

const slider = document.querySelector(".slider");

let activeSlideIndex = 0;

export const changeSlide = () => {
  const sliderHeight = sliderContainer.clientHeight;
  if (activeSlideIndex <= 1) {
    activeSlideIndex++;
    if (activeSlideIndex > 1) {
      activeSlideIndex = 0;
    }
  }
  slider.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
};

export function flipButton(isRicardoScreen, event) {
  const html = document.querySelector("html");
  if (!isRicardoScreen) {
    html.classList.remove("dark");
    event.target.innerHTML = ">Spicy stuff";
  } else {
    html.classList.add("dark");
    event.target.innerHTML = ">Back to norm";
  }
}
