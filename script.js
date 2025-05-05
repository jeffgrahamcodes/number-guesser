'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

const bodyElement = document.querySelector('body');
const numberDiv = document.querySelector('.number');
const scoreSpan = document.querySelector('.score');
const msg = document.querySelector('.message');
const input = document.querySelector('.guess');
const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');

scoreSpan.textContent = score;

checkButton.addEventListener('click', () => {
  const guess = Number(input.value);
  if (!guess) {
    msg.textContent = 'No number';
  } else if (guess === secretNumber) {
    msg.textContent = 'Correct Number!';
    numberDiv.textContent = secretNumber;
    bodyElement.style.backgroundColor = '#60b347';
    numberDiv.style.width = '30rem';
  } else if (guess > secretNumber) {
    if (score > 1) {
      msg.textContent = 'Too high!';
      score--;
      scoreSpan.textContent = score;
    } else {
      msg.textContent = 'You lost!';
      scoreSpan.textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      msg.textContent = 'Too low!';
      score--;
      scoreSpan.textContent = score;
    } else {
      msg.textContent = 'You lost!';
      scoreSpan.textContent = 0;
    }
  }
});

againButton.addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  scoreSpan.textContent = score;
  numberDiv.textContent = '?';
  bodyElement.style.backgroundColor = '#222';
  numberDiv.style.width = '15rem';
  input.value = '';
  msg.textContent = 'Start guessing...';
});
