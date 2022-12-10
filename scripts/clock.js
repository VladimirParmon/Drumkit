const secondsArrow = document.querySelector(".seconds");
const minutesArrow = document.querySelector(".minutes");
const hoursArrow = document.querySelector(".hours");
const timeDigits = document.querySelector(".timeDigits");
const dateDigits = document.querySelector(".dateDigits");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function runClock() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 - 90;
  secondsArrow.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 - 90;
  minutesArrow.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 - 90;
  hoursArrow.style.transform = `rotate(${hourDegrees}deg)`;

  const digitalHours = hour % 12;
  const partOfDay = hour >= 12 ? "PM" : "AM";
  const day = now.getDay();
  const month = now.getMonth();
  timeDigits.innerHTML = `${digitalHours}:${mins < 10 ? `0${mins}` : mins} ${partOfDay}`;
  dateDigits.innerHTML = `${days[day]}, ${months[month]}, ${day}`;
  setTimeout(runClock, 1000);
}
