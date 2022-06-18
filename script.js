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
const postGameDiv = document.getElementById('post-game');
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
        postGameDiv.classList.remove('hidden');
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
  postGameDiv.classList.add('hidden');
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
    result.style['text-shadow'] = '0 0 10px #b8f39d'
    return;
  } else if (computerScore > score) {
    result.textContent = 'YOU LOSE';
    result.style['color'] = '#c93030';
    result.style['text-shadow'] = '0 0 10px #ff6b6b'
    return;
  }
  result.textContent = 'DRAW';
  result.style['color'] = '#3785df';
  result.style['text-shadow'] = '0 0 10px #58cfff'
  return;
}