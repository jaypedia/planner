const goal = document.querySelector('.my-plans .goal h2:nth-child(2)');
const goalForm = document.querySelector('.my-plans form');
const goalInput = document.querySelector('.my-plans form input');
const resetBtn = document.querySelector('.my-plans button');

const USERGOAL_KEY = 'userGoal';
const HIDDEN_CLASSNAME = 'hidden';

function setGoal(event) {
  event.preventDefault();
  const userGoal = goalInput.value;
  localStorage.setItem(USERGOAL_KEY, userGoal);
  paintGoal(userGoal);
}

const savedGoal = localStorage.getItem(USERGOAL_KEY);

function paintGoal(userGoal) {
  goal.innerText = userGoal;
  goalForm.classList.add(HIDDEN_CLASSNAME);
  resetBtn.classList.remove(HIDDEN_CLASSNAME);
}

goalForm.addEventListener('submit', setGoal);

if (savedGoal !== null && savedGoal !== '') {
  paintGoal(savedGoal);
} else {
  goalForm.classList.remove(HIDDEN_CLASSNAME);
}

function resetGoal() {
  const answer = confirm('Do you want to reset your goal?');
  if (answer === true) {
    goalForm.classList.remove(HIDDEN_CLASSNAME);
    goal.innerText = '';
    resetBtn.classList.add(HIDDEN_CLASSNAME);
    localStorage.removeItem(USERGOAL_KEY);
  }
}

resetBtn.addEventListener('click', resetGoal);
