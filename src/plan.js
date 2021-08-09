const planForm = document.querySelector('.plan-list .plan-header form');
const planInput = planForm.querySelector('input');
const plans = document.querySelector('.plan-list ul#plans');

let myPlans = [];

function handleSubmit(event) {
  event.preventDefault();
  const newPlan = planInput.value;
  planInput.value = '';
  const newPlanObj = {
    text: newPlan,
    id: Date.now(),
  };
  myPlans.push(newPlanObj);
  paintPlan(newPlanObj);
  savePlans();
}

function savePlans() {
  localStorage.setItem('plans', JSON.stringify(myPlans));
}

const savedPlans = localStorage.getItem('plans');

if (savedPlans !== null) {
  const parsedPlans = JSON.parse(savedPlans);
  myPlans = parsedPlans;
  parsedPlans.forEach(paintPlan);
}

function paintPlan(newPlanObj) {
  const li = document.createElement('li');
  li.id = newPlanObj.id;
  const span = document.createElement('span');
  span.innerText = newPlanObj.text;
  const button = document.createElement('button');
  button.innerHTML = '<i class="fas fa-trash-alt"></i>';
  li.appendChild(span);
  li.appendChild(button);
  plans.appendChild(li);
  button.addEventListener('click', deletePlan);
}

function deletePlan(event) {
  const answer = confirm('Do you want to delete this plan?');
  if (answer === true) {
    const li = event.target.parentElement.parentElement;
    li.remove();
    myPlans = myPlans.filter((myPlan) => myPlan.id !== parseInt(li.id));
    savePlans();
  }
}

planForm.addEventListener('submit', handleSubmit);
