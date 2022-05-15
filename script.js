'use strict';

let playerPick, computerPick;

function computerPlay() {
let playArray = ['rock', 'paper', 'scissors'];
return playArray[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
let lowerStr = playerSelection.toLowerCase();

if (playerWinsRound(lowerStr, computerSelection)) {
return `You won this round! The computer chose ${computerSelection}.`;
} else if (isTie(lowerStr, computerSelection)) {
return `It's a tie. The computer also chose ${computerSelection}`;
}
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

function game() {
for (let i = 0; i < 5; i++) {
playerPick = prompt('Rock, paper or scissors?');
computerPick = computerPlay();
console.log(playRound(playerPick, computerPick));
}
}

game();
