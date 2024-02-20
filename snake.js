const canvas = document.getElementById("board");

const ctx = canvas.getContext("2d");

function screen() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.clientWidth, canvas.height);
}
screen();
// play();
