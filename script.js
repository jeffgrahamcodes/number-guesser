'use strict';

const msg = document.querySelector('.message');
const input = document.querySelector('.guess');
const checkButton = document.querySelector('.check');
checkButton.addEventListener('click', () => {
  const guess = Number(input.value);
  if (!guess) {
    msg.textContent = 'No number';
  }
});
