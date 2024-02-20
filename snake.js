const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");

let speed = 7;

let tiles = 20,
  headX = 10,
  headY = 10;

let tileSize = canvas.width / tiles - 2;
let xMovement = 0,
  yMovement = 0;
let fruitX = 5,
  fruitY = 5;

function play() {
  screen();
  changeSnakePosition();

  hasEaten();
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

function hasEaten() {
  if (fruitX === headX && fruitY === headY) {
    fruitX = Math.floor(Math.random() * tiles);
    fruitY = Math.floor(Math.random() * tiles);
  }
}
document.body.addEventListener("keydown", keyDown);

function keyDown(e) {
  if (e.keyCode === 38) {
    if (yMovement === 1) return;
    yMovement = -1;
    xMovement = 0;
  }
  if (e.keyCode === 40) {
    if (yMovement === -1) return;
    yMovement = 1;
    xMovement = 0;
  }
  if (e.keyCode === 37) {
    if (xMovement === 1) return;
    yMovement = 0;
    xMovement = -1;
  }
  if (e.keyCode === 39) {
    if (xMovement === -1) return;
    yMovement = 0;
    xMovement = 1;
  }
}

play();
