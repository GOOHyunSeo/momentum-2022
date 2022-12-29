const loginForm = document.querySelector("#login-form");
const logininput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function loginFormSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = logininput.value;
  localStorage.setItem("username", username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Merry Christmas ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", loginFormSubmit);
} else {
  paintGreetings(savedUsername);
}
