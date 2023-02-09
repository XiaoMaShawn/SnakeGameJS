import { SNAKE_SPEED, getSnakeHead, snakeIntersection, update as updateSnake, draw as drawSnake } from "./snake.js";
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from "./grid.js";

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board');

function main(currentTime) {
  if (gameOver) {
    //confirm() instructs the browser to display a dialog with an optional message, and to wait until the user either confirms or cancels the dialog. check MDN
    if (confirm('You lost. Press Ok to restart')) {
      window.location('/')
    };
    return
  }

  window.requestAnimationFrame(main);

  const secondSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondSinceLastRender < 1 / SNAKE_SPEED) return
  lastRenderTime = currentTime;

  update();
  draw();
}

window.requestAnimationFrame(main);

//update the snake and food
function update() {
  gameBoard.innerHTML = '';
  updateSnake();
  updateFood();
  checkDeath();
}

//draw the snake and food
function draw() {
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}