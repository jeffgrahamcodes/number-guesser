'use strict';

// Initialize game state variables
let secretNumber = generateSecretNumber();
let score = 20;
let highScore = 0;

// Select DOM elements once
const body = document.body;
const numberDisplay = document.querySelector('.number');
const scoreDisplay = document.querySelector('.score');
const messageDisplay = document.querySelector('.message');
const guessInput = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const highScoreDisplay = document.querySelector('.highscore');

// Utility: Generate a random number between 1 and 20
function generateSecretNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

// Utility: Display a message to the user
function displayMessage(message) {
  messageDisplay.textContent = message;
}

// Utility: Update the score
function updateScore(newScore) {
  score = newScore;
  scoreDisplay.textContent = score;
}

// Event: Check guess on button click
checkBtn.addEventListener('click', () => {
  const guess = Number(guessInput.value);

  // No input
  if (!guess) {
    displayMessage('⛔ No number entered!');
    return;
  }

  // Correct guess
  if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    numberDisplay.textContent = secretNumber;
    body.style.backgroundColor = '#60b347';
    numberDisplay.style.width = '30rem';

    // Update high score if applicable
    if (score > highScore) {
      highScore = score;
      highScoreDisplay.textContent = highScore;
    }
    return;
  }

  // Incorrect guess
  if (score > 1) {
    displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
    updateScore(score - 1);
  } else {
    displayMessage('💥 You lost the game!');
    updateScore(0);
  }
});

// Event: Reset game on "Again!" button click
againBtn.addEventListener('click', () => {
  score = 20;
  secretNumber = generateSecretNumber();

  // Reset UI
  updateScore(score);
  numberDisplay.textContent = '?';
  body.style.backgroundColor = '#222';
  numberDisplay.style.width = '15rem';
  guessInput.value = '';
  displayMessage('Start guessing...');
});
