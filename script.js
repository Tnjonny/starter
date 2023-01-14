'use strict';

const secretNum = Math.floor(Math.random() * 11);

document.querySelector('.number').textContent = secretNum;
let score = 10;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'NO NO.';
  } else if (guess === secretNum) {
    document.querySelector('.message').textContent = 'YOU GOT IT!';
  } else if (guess > secretNum) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'TOO HIGH 🤘';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'YOU LOST 💀';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNum) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'TOO LOW👇';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'YOU LOST 💀';
      document.querySelector('.score').textContent = 0;
    }
  }
});
