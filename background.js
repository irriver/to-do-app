const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintImage(img_num) {
  const image = new Image();
  image.src = `images/${img_num + 1}.jpg`;
  image.classList.add("bg-image");
  body.prepend(image);
}

function generateRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  //generate number
  const randomNumber = generateRandom();
  paintImage(randomNumber);
}

init();
