import { SNAKE_SPEED, update as updateSnake, draw as drawSnake } from "./snake.js";

let lastRenderTime = 0;
// const SNAKE_SPEED = 2;
const gameBoard = document.getElementById('game-board');

function main(currentTime) {
  window.requestAnimationFrame(main);
  const secondSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondSinceLastRender < 1 / SNAKE_SPEED) return
  // console.log("Render");
  lastRenderTime = currentTime;

  update();
  draw();
}

window.requestAnimationFrame(main);

//update the snake and food
function update() {
  gameBoard.innerHTML = '';
  updateSnake();
}

//draw the snake and food
function draw() {
  drawSnake(gameBoard);
}