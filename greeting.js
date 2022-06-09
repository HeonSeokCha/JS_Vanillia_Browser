const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function onLogInSubmit(event) {
   event.preventDefault();
   loginForm.classList.add(HIDDEN_CLASSNAME);
   const userName = loginInput.value;
   localStorage.setItem(USERNAME_KEY, userName);
   painGreeting(userName);
}

function painGreeting(userName) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = "Hello " + userName;
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLogInSubmit);
} else {
    painGreeting(savedUserName);
}