const rename = document.querySelector('button.rename');
const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const title = document.querySelector('title');
const planner_name = document.querySelector('#planner_name');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function handleClickBtn() {
  const check = confirm('Do you want to set/reset your name?');
  if (check === true) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
  }
}

rename.addEventListener('click', handleClickBtn);

function resetName(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintUsername(username);
}

function paintUsername(username) {
  title.innerText = `${username}'s Planner`;
  planner_name.innerText = `${username}'s Planner`;
  loginForm.classList.add(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername !== null) {
  paintUsername(savedUsername);
}

loginForm.addEventListener('submit', resetName);
