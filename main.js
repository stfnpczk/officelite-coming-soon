//countdown timer
const daysElement = document.querySelector(".js-days");
const hoursElement = document.querySelector(".js-hours");
const minutesElement = document.querySelector(".js-min");
const secondsElement = document.querySelector(".js-sec");

const finalDate = new Date("2022-11-04");

const countdown = setInterval(() => {
  const timeLeft = Math.round(finalDate - Date.now());
  if (timeLeft < 0) {
    clearInterval(countdown);
    return;
  }

  let secondsLeft = Math.floor(timeLeft / 1000);
  let minutesLeft = Math.floor(secondsLeft / 60);
  let hoursLeft = Math.floor(minutesLeft / 60);
  let daysLeft = Math.floor(hoursLeft / 24);

  secondsLeft = secondsLeft % 60;
  minutesLeft = minutesLeft % 60;
  hoursLeft = hoursLeft % 24;

  secondsLeft < 10 ? (secondsLeft = "0" + secondsLeft) : secondsLeft;
  minutesLeft < 10 ? (minutesLeft = "0" + minutesLeft) : minutesLeft;
  hoursLeft < 10 ? (hoursLeft = "0" + hoursLeft) : hoursLeft;

  daysElement.innerHTML = daysLeft;
  hoursElement.innerHTML = hoursLeft;
  minutesElement.innerHTML = minutesLeft;
  secondsElement.innerHTML = secondsLeft;
}, 1000);

//form validation
