'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

const numberDiv = document.querySelector('.number');
const scoreSpan = document.querySelector('.score');
const msg = document.querySelector('.message');
const input = document.querySelector('.guess');
const checkButton = document.querySelector('.check');

numberDiv.textContent = secretNumber;
scoreSpan.textContent = score;

checkButton.addEventListener('click', () => {
  const guess = Number(input.value);
  if (!guess) {
    msg.textContent = 'No number';
  } else if (guess === secretNumber) {
    msg.textContent = 'Correct Number!';
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
