function game() {
	for (let i = 0; i < 5; i++) {
		playerSelection = prompt("rock, paper or scissors?");
		computerSelection = getComputerChoice();
		playRound(playerSelection, computerSelection);
		alert(
			"you chose " +
				playerSelection +
				" and the computer chose " +
				computerSelection
		);
		if (winner === "player") {
			alert("you won!");
			playerPoints++;
		} else if (winner === "computer") {
			alert("you lost!");
			computerPoints++;
		} else {
			alert("tie!");
		}
	}
	if (playerPoints > computerPoints) {
		alert("player wins!");
	} else if (computerPoints > playerPoints) {
		alert("computer wins!");
	} else {
		alert("its a tie!");
	}
}
function playRound(playerSelection, computerSelection) {
	if (
		(playerSelection === "rock" && computerSelection === "scissors") ||
		(playerSelection === "scissors" && computerSelection === "paper") ||
		(playerSelection === "paper" && computerSelection === "rock")
	) {
		winner = "player";
	} else if (
		(playerSelection === "scissors" && computerSelection === "rock") ||
		(playerSelection === "paper" && computerSelection === "scissors") ||
		(playerSelection === "rock" && computerSelection === "paper")
	) {
		winner = "computer";
	} else {
		winner = "tie";
	}
	return winner;
}

function getComputerChoice() {
	const choices = ["rock", "paper", "scissors"];
	return choices[Math.floor(Math.random() * choices.length)];
}

let playerPoints = 0;
let computerPoints = 0;

let winner;
let playerSelection;
let computerSelection;
game();
