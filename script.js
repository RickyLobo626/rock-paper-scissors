'use strict';

let playerPick, computerPick;
let playerScore;
let computerScore;

// Random computer play
function computerPlay() {
  let playArray = ['rock', 'paper', 'scissors'];
  return playArray[Math.floor(Math.random() * 3)];
}

// Play round
function playRound(playerSelection, computerSelection) {
  let lowerStr = playerSelection.toLowerCase();

  if (playerWinsRound(lowerStr, computerSelection)) {
    playerScore++;
    return `You won this round! The computer chose ${computerSelection}.`;
  } else if (isTie(lowerStr, computerSelection)) {
    return `It's a tie. The computer also chose ${computerSelection}`;
  }
  computerScore++;
  return `You lose the round! The computer chose ${computerSelection}.`;
  }

// Check if player wins the round
function playerWinsRound(playerSelection, computerSelection) {
  if (
    playerSelection == 'rock' && computerSelection == 'scissors' ||
    playerSelection == 'paper' && computerSelection == 'rock' ||
    playerSelection == 'scissors' && computerSelection == 'paper'
  ) {
    return true;
  }
  return false;
}

// Check if it's a Tie
function isTie(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
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

// Start game
function game() {
  playerScore = 0;
  computerScore = 0;
  for (let i = 0; i < 5; i++) {
    playerPick = prompt('Rock, paper or scissors?');
    computerPick = computerPlay();
    console.log(playRound(playerPick, computerPick));
    console.log(`Your Score: ${playerScore} | Computer Score: ${computerScore}`);
  }
  return checkWinner();
}

console.log(game());

