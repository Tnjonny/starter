'use strict';

let secretNum = Math.floor(Math.random() * 11);

let score = 10;
let highscore = 0;

function high() {
  document.querySelector('.message').textContent = 'TOO HIGH ð¤';
  score--;
  document.querySelector('.score').textContent = score;
}

function low() {
  document.querySelector('.message').textContent = 'TOO LOWð';
  score--;
  document.querySelector('.score').textContent = score;
}

function won() {
  document.querySelector('.message').textContent = 'YOU GOT IT!!';
  document.querySelector('.number').textContent = secretNum;
  document.querySelector('body').style.backgroundColor = 'green';
}

function lost() {
  document.querySelector('.message').textContent = 'YOU LOST ð';
  document.querySelector('body').style.backgroundColor = 'red';
  document.querySelector('.score').textContent = 0;
}

function retore() {
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 10;
  document.querySelector('.guess').value = '';
  location.reload();
  secretNum = Math.floor(Math.random() * 11);
}

document.querySelector('.again').addEventListener('click', function () {
  retore();
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'NO NO.';
  } else if (guess > 10 || guess < 1) {
    document.querySelector('.message').textContent =
      'GUESS HAS TO BE BETWEEN 1 & 10';
  } else if (guess === secretNum) {
    won();
  } else if (guess > secretNum) {
    if (score > 1) {
      high();
    } else {
      lost();
    }
  } else if (guess < secretNum) {
    if (score > 1) {
      low();
    } else {
      lost();
    }
  }
});
