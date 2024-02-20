const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");

class SnakeBody {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
let speed = 7;

let tiles = 20,
  headX = 10,
  headY = 10;
const snakeBody = [];
let bodyLenght = 2;

let tileSize = canvas.width / tiles - 2;
let xMovement = 0,
  yMovement = 0;
let fruitX = 5,
  fruitY = 5;

function play() {
  screen();
  changeSnakePosition();

  changeFruitPosition();
  drwaFruit();
  drawSnake();
  setTimeout(play, 1000 / speed);
}

function screen() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.clientWidth, canvas.height);
}

function drawSnake() {
  ctx.fillStyle = "green";
  for (let i = 0; i < snakeBody.length; i++) {
    let part = snakeBody[i];
    ctx.fillRect(part.x * tiles, part.y * tiles, tileSize, tileSize);
  }
  snakeBody.push(new SnakeBody(headX, headY));
  if (snakeBody.length > bodyLenght) {
    snakeBody.shift();
  }
  ctx.fillStyle = "orange";
  ctx.fillRect(headX * tiles, headY * tiles, tileSize, tileSize);
}

function changeSnakePosition() {
  headX = headX + xMovement;
  headY = headY + yMovement;
}
function drwaFruit() {
  ctx.fillStyle = "red";
  ctx.fillRect(fruitX * tiles, fruitY * tiles, tileSize, tileSize);
}

function changeFruitPosition() {
  if (fruitX === headX && fruitY === headY) {
    fruitX = Math.floor(Math.random() * tiles);
    fruitY = Math.floor(Math.random() * tiles);
    bodyLenght++;
  }
}
document.body.addEventListener("keydown", keyDown);

function keyDown(e) {
  if (e.keyCode === 38 && yMovement !== 1) {
    yMovement = -1;
    xMovement = 0;
  }
  if (e.keyCode === 40 && yMovement !== -1) {
    yMovement = 1;
    xMovement = 0;
  }
  if (e.keyCode === 37 && xMovement !== 1) {
    yMovement = 0;
    xMovement = -1;
  }
  if (e.keyCode === 39 && xMovement !== -1) {
    yMovement = 0;
    xMovement = 1;
  }
}

play();
