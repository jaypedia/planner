const currentTime = document.querySelector('.current-time p:last-child');
const remainingTime = document.querySelector('.remaining-time p:last-child');

// current time
function handleCurrentTime() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const second = String(date.getSeconds()).padStart(2, '0');
  currentTime.innerText = `${hour}:${minutes}:${second}`;
}

handleCurrentTime();
setInterval(handleCurrentTime, 1000);

// Time remaining today
function handleRemainingTime() {
  const date = new Date();
  const hour = 24 - date.getHours();
  const minutes = 60 - date.getMinutes();
  const second = 60 - date.getSeconds();
  remainingTime.innerText = `${hour}:${minutes}:${second}`;
}

handleRemainingTime();
setInterval(handleRemainingTime, 1000);
