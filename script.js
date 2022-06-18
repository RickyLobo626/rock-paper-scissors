'use strict';

const playerBtn = document.querySelectorAll('#player-div > div');
const comment = document.getElementById('comment');
const enemyImg = document.getElementById('enemy-img');
const enemyImgDiv = document.querySelector('#enemy');
const enemyComment = document.querySelector('#enemy-comment');
const playerScore = document.querySelector('.score');
const enemyScore = document.querySelector('.enemy-score');
const result = document.querySelector('#result');
let playerPick, computerPick;
let score = 0;
let computerScore = 0;
let round = 0;

playerBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    playerPick = btn.className;
    computerPick = computerPlay();

    // Show enemy
    result.classList.add('hidden');
    enemyImgDiv.classList.remove('hidden');
    enemyImg.classList.remove('hidden');
    enemyComment.classList.remove('hidden');

    // Add and remove classes
    if (enemyImgDiv.classList.contains(enemyImgDiv.className)) {
      enemyImgDiv.classList.remove(enemyImgDiv.className);
      enemyImgDiv.classList.add(computerPick);
    } else {
      enemyImgDiv.classList.add(computerPick);
    }

    enemyImg.src = `./images/enemy-${computerPick}.png`;
    enemyComment.textContent = `The enemy chose ${computerPick}`;
    playRound();
    round++;
    if (round === 5) {
      checkWinner();
      resetGame();
      result.classList.remove('hidden');
    }
  });
});

function resetGame() {
  score = 0;
  computerScore = 0;
  round = 0;
  playerScore.textContent = 0;
  enemyScore.textContent = 0;
  comment.textContent = 'Choose one to play again!'
  enemyComment.classList.add('hidden');
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
    playerScore.textContent = score;
    comment.textContent = `You chose ${playerPick}. You win this round!`;
    return;
  } else if (isTie()) {
    comment.textContent = `You chose ${playerPick}. It's a tie.`;
    return;
  }
  computerScore++;
  enemyScore.textContent = computerScore;
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
    result.textContent = 'YOU WIN!';
    result.style['color'] = '#1a8a1a';
    return;
  } else if (computerScore > score) {
    result.textContent = 'YOU LOSE!';
    result.style['color'] = '#c93030';
    return;
  }
  result.textContent = 'DRAW!';
  result.style['color'] = '#3785df';
  return;
}