import { onSnake, expandSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";

let food = getRandomFoodPosition();

//how many grid the snake will grow when hit one food
const EXPANSION_RATE = 2;

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    food = getRandomFoodPosition();
  }
}

export function draw(gameboard) {
  const foodElement = document.createElement('div')
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add('food');
  gameboard.appendChild(foodElement);
}

function getRandomFoodPosition() {
  let newFoodPosition;
  //when there is no food or the food is on the snake body, get a new one.
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }
  return newFoodPosition;
}

