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
