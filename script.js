'use strict';

const playerBtn = document.querySelectorAll('#player-div > div');
const comment = document.getElementById('comment');
const enemyImg = document.getElementById('enemy-img');
const enemyDiv = document.querySelector('#enemy');
const enemyComment = document.querySelector('#enemy-comment');
const scoreSpan = document.querySelector('.score');
const enemyScoreSpan = document.querySelector('.enemy-score');
const result = document.querySelector('#result');
const restartBtn = document.getElementById('restart');
let playerPick, computerPick;
let score = 0;
let computerScore = 0;
let round = 0;
let playing = true;

playerBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    
    if (playing) {
      playerPick = btn.className;
      computerPick = computerPlay();

      // Show enemy
      enemyImg.classList.remove('hidden');

      // Add and remove classes
      if (enemyDiv.classList.contains(enemyDiv.className)) {
        enemyDiv.classList.remove(enemyDiv.className);
        enemyDiv.classList.add(computerPick);
      } else {
        enemyDiv.classList.add(computerPick);
      }

      playRound();
      enemyImg.src = `./images/enemy-${computerPick}.png`;
      enemyComment.textContent = `The enemy chose ${computerPick}`;
      scoreSpan.textContent = score;
      enemyScoreSpan.textContent = computerScore;
      round++;

      // If it's the final round check winner and stop game
      if (round === 5) {
        playing = false;
        checkWinner();
        restartBtn.classList.remove('hidden');
      }
    }
  });
});

restartBtn.addEventListener('click', resetGame);

// Reset game
function resetGame() {
  playing = true;
  score = 0;
  computerScore = 0;
  round = 0;
  scoreSpan.textContent = 0;
  enemyScoreSpan.textContent = 0;
  enemyComment.textContent = '';
  result.textContent = '';
  enemyImg.classList.add('hidden');
  restartBtn.classList.add('hidden');
  comment.textContent = 'Choose one to play again!'
}

// Random computer play
function computerPlay() {
  let playArray = ['rock', 'paper', 'scissors'];
  return playArray[Math.floor(Math.random() * 3)];
}

// Play rounds
function playRound() {
  if (playerWinsRound()) {
    score++;
    comment.textContent = `You chose ${playerPick}. You win this round!`;
    return;
  } else if (isTie()) {
    comment.textContent = `You chose ${playerPick}. It's a tie!`;
    return;
  }
  computerScore++;
  comment.textContent = `You chose ${playerPick}. You lose this round!`;
  return;
}

// Check if player wins the round
function playerWinsRound() {
  if (playerPick == 'rock' && computerPick == 'scissors' ||
    playerPick == 'paper' && computerPick == 'rock' ||
    playerPick == 'scissors' && computerPick == 'paper') {
    return true;
  }
  return false;
}

// Check if it's a Tie
function isTie() {
  if (playerPick == computerPick) {
    return true;
  }
  return false;
}

// Announce the Winner
function checkWinner() {
  if (score > computerScore) {
    result.textContent = 'YOU WIN';
    result.style['color'] = '#1a8a1a';
    return;
  } else if (computerScore > score) {
    result.textContent = 'YOU LOSE';
    result.style['color'] = '#c93030';
    return;
  }
  result.textContent = 'DRAW';
  result.style['color'] = '#3785df';
  return;
}