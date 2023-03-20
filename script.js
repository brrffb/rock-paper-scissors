function game() {
	const roundResultsDiv = document.querySelector("#results");
	const gameWinnerDiv = document.querySelector("#matchWinner");
	const playerPointsDiv = document.querySelector("#playerPoints");
	const computerPointsDiv = document.querySelector("#computerPoints");

	let playerPoints = 0;
	let computerPoints = 0;

	const buttons = document.querySelectorAll("button");
	const rockBtn = document.querySelector("#rock");
	const paperBtn = document.querySelector("#paper");
	const scissorsBtn = document.querySelector("#scissors");

	rockBtn.addEventListener("click", () => {
		playRound("rock");
	});
	paperBtn.addEventListener("click", () => {
		playRound("paper");
	});
	scissorsBtn.addEventListener("click", () => {
		playRound("scissors");
	});

	function playRound(playerSelection) {
		computerSelection = getComputerChoice();

		if (
			(playerSelection === "rock" && computerSelection === "scissors") ||
			(playerSelection === "scissors" && computerSelection === "paper") ||
			(playerSelection === "paper" && computerSelection === "rock")
		) {
			playerPoints++;
			roundResultsDiv.textContent =
				"You win! " + playerSelection + " beats " + computerSelection;
		} else if (
			(playerSelection === "scissors" && computerSelection === "rock") ||
			(playerSelection === "paper" && computerSelection === "scissors") ||
			(playerSelection === "rock" && computerSelection === "paper")
		) {
			computerPoints++;
			roundResultsDiv.textContent =
				"You lose! " + computerSelection + " beats " + playerSelection;
		} else {
			roundResultsDiv.textContent = "It's a tie!";
		}
		playerPointsDiv.textContent = `Your points: ${playerPoints}`;
		computerPointsDiv.textContent = `Computer's points: ${computerPoints}`;

		if (playerPoints === 5) {
			gameWinnerDiv.textContent = "You won the game!";
			buttons.forEach((button) => (button.disabled = true));
		} else if (computerPoints === 5) {
			gameWinnerDiv.textContent = "Computer won the game!";
			buttons.forEach((button) => (button.disabled = true));
		} else if (playerPoints === 5 || computerPoints === 5) {
			gameWinnerDiv.textContent = "It's a tie!";
			buttons.forEach((button) => (button.disabled = true));
		}
	}

	function getComputerChoice() {
		const choices = ["rock", "paper", "scissors"];
		return choices[Math.floor(Math.random() * choices.length)];
	}
}

game();
