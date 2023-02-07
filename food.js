import { onSnake, expandSnake } from "./snake.js";

let food = { x: 10, y: 1 };

//how many grid the snake will grow when hit one food
const EXPANSION_RATE = 3;

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    food = { x: 20, y: 1 };
  }
}

export function draw(gameboard) {
  const foodElement = document.createElement('div')
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add('food');
  gameboard.appendChild(foodElement);
}