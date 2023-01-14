'use strict';

const secretNum = Math.floor(Math.random() * 11);

let score = 10;

function won() {
  document.querySelector('body').style.backgroundColor = 'green';
}

function lost() {
  document.querySelector('body').style.backgroundColor = 'red';
}

function retore() {
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 10;
  document.querySelector('.guess').value = '';
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'NO NO.';
  } else if (guess > 10 || guess < 1) {
    document.querySelector('.message').textContent =
      'GUESS HAS TO BE BETWEEN 1 & 10';
  } else if (guess === secretNum) {
    document.querySelector('.message').textContent = 'YOU GOT IT!!';
    document.querySelector('.number').textContent = secretNum;
    won();
  } else if (guess > secretNum) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'TOO HIGH 🤘';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'YOU LOST 💀';
      document.querySelector('.score').textContent = 0;
      lost();
    }
  } else if (guess < secretNum) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'TOO LOW👇';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'YOU LOST 💀';
      document.querySelector('.score').textContent = 0;
      lost();
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  retore();
});
