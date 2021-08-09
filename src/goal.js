const goal = document.querySelector('.my-plans .goal h2:nth-child(2)');
const goalForm = document.querySelector('.my-plans form');
const goalInput = document.querySelector('.my-plans form input');
const resetBtn = document.querySelector('.my-plans button');

function setGoal(event) {
  event.preventDefault();
  const userGoal = goalInput.value;
  localStorage.setItem('userGoal', userGoal);
  paintGoal(userGoal);
}

const savedGoal = localStorage.getItem('userGoal');

function paintGoal(userGoal) {
  goal.innerText = userGoal;
  goalForm.classList.add('hidden');
  resetBtn.classList.remove('hidden');
}

goalForm.addEventListener('submit', setGoal);

if (savedGoal !== null && savedGoal !== '') {
  paintGoal(savedGoal);
} else {
  goalForm.classList.remove('hidden');
}

function resetGoal() {
  const answer = confirm('Do you want to reset your goal?');
  if (answer === true) {
    goalForm.classList.remove('hidden');
    goal.innerText = '';
    resetBtn.classList.add('hidden');
  }
}

resetBtn.addEventListener('click', resetGoal);
