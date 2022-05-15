'use strict';

let playerPick, computerPick;
let playerScore;
let computerScore;

function computerPlay() {
  let playArray = ['rock', 'paper', 'scissors'];
  return playArray[Math.floor(Math.random() * 3)];
}

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

function isTie(playerSelection, computerSelection) {
if (playerSelection == computerSelection) {
  return true;
}
  return false;
}

function checkWinner() {
  if (playerScore > computerScore) {
    return 'YOU WIN!';
  } else if (computerScore > playerScore) {
    return 'YOU LOSE!';
  }
    return 'DRAW!';
}

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

