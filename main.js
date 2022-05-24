//countdown timer
const daysElement = document.querySelector('.js-days');
const hoursElement = document.querySelector('.js-hours');
const minutesElement = document.querySelector('.js-min');
const secondsElement = document.querySelector('.js-sec');

const finalDate= new Date('2022-11-04');



const countdown = setInterval(() => {
    const timeLeft = Math.round((finalDate - Date.now()));
    if(timeLeft < 0) {
      clearInterval(countdown);
      return;
    }

    let secondsLeft = Math.floor(timeLeft/1000);
    let minutesLeft = Math.floor(secondsLeft/60);
    let hoursLeft = Math.floor(minutesLeft/60);
    let daysLeft = Math.floor(hoursLeft/24);
    
    secondsLeft = secondsLeft % 60;
    minutesLeft = minutesLeft % 60;
    hoursLeft = hoursLeft % 24;

    secondsLeft < 10 ? secondsLeft = '0' + secondsLeft : secondsLeft;
    minutesLeft < 10 ? minutesLeft = '0' + minutesLeft : minutesLeft;
    hoursLeft < 10 ? hoursLeft = '0' + hoursLeft : hoursLeft;

    daysElement.innerHTML = daysLeft;
    hoursElement.innerHTML = hoursLeft;
    minutesElement.innerHTML = minutesLeft;
    secondsElement.innerHTML = secondsLeft;    
    
  }, 1000);

// form validation
const form = document.getElementById("form-js");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const company = document.getElementById("company");

const nodeList = [name, email, phone, company];


// Check inputs are filled out
const isEmpty = (nodelist) => {
  nodelist.forEach((input) => {
    if (!input.value) {
      displayError(input);
    }
  });
};

const checkEmail = (input) => {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!regex.test(input.value)) {
    displayError(input);
  }
};

const displayError = (input) => {
  const inputContainer = input.parentElement;
  inputContainer.classList = "form__input-container error";
  
};

const removeError = (input) => {
  const inputContainer = input.parentElement;
  inputContainer.classList.remove("error");
};

/*----------------------------
      event listeners
----------------------------*/
form.addEventListener("submit", (e) => {
  e.preventDefault();

  isEmpty(nodeList);

  if (email.value) {
    checkEmail(email);
  }
});

nodeList.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value) {
      removeError(input);
    }
  });
});
