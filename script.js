'use strict';

const playerBtn = document.querySelectorAll('#player-div > div');
const comment = document.getElementById('comment');
let playerPick, computerPick;
let playerScore = 0;
let computerScore = 0;

playerBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    playerPick = btn.className;
    computerPick = computerPlay();
    console.log(playerPick + ' ' + computerPick);
    playRound();
  });
});

// Random computer play
function computerPlay() {
  let playArray = ['rock', 'paper', 'scissors'];
  return playArray[Math.floor(Math.random() * 3)];
}

// Play rounds
function playRound() {
  if (playerWinsRound()) {
    playerScore++;
    comment.textContent = `You won this round! The enemy chose ${computerPick}.`;
    return;
  } else if (isTie()) {
    comment.textContent = `It's a tie. The enemy also chose ${computerPick}`;
    return;
  }
  computerScore++;
  comment.textContent = `You lose the round! The enemy chose ${computerPick}.`;
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
  if (playerScore > computerScore) {
    return 'YOU WIN!';
  } else if (computerScore > playerScore) {
    return 'YOU LOSE!';
  }
  return 'DRAW!';
}