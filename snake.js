import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 5;
const snakeBody = [{ x: 11, y: 11 }];
let newSegments = 0;

export function update() {
  addSegment();
  const inputDirection = getInputDirection();
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }
  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
  // console.log('update snake');
}

export function draw(gameboard) {
  snakeBody.forEach(segment => {
    const snakeElement = document.createElement('div')
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add('snake');
    gameboard.appendChild(snakeElement);
  })
  // console.log('draw snake');
}

export function expandSnake(amount) {
  newSegments += amount;
}

//check whether the food position is on the snake
export function onSnake(position) {
  return snakeBody.some(segment => {
    return equalPositions(segment, position);
  });
}

function equalPositions(pos1, pos2) {
  return (pos1.x === pos2.x && pos1.y === pos2.y);
}

function addSegment() {
  //add the segment at the end of snakeBody array
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push(snakeBody[snakeBody.length - 1])//here is some different
  };

  newSegments = 0;
}