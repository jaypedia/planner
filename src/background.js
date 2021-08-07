const body = document.querySelector('.plans_features');
const backgroundBtn = document.querySelector('button.background_change');

const IMG_NUMBER = 10;

function changeBackground() {
  const image = new Image();
  const imgNumber = Math.ceil(Math.random() * IMG_NUMBER);
  image.src = `img/${imgNumber}.jpg`;
  image.classList.add('bgImage');
  body.appendChild(image);
}

backgroundBtn.addEventListener('click', changeBackground);
changeBackground();
