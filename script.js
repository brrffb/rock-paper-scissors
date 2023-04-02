function game() {
	const roundResultsDiv = document.querySelector("#roundResults");
	const matchResults = document.querySelector("#matchResults");
	const playerPointsDiv = document.querySelector("#playerPoints");
	const computerPointsDiv = document.querySelector("#computerPoints");
	const popupContainer = document.querySelector("#popup-container");
	const playAgainBtn = document.querySelector("#playAgainBtn");

	let playerPoints = 0;
	let computerPoints = 0;

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

	playAgainBtn.addEventListener("click", () => {
		popupContainer.classList.remove("show");
		playerPoints = 0;
		computerPoints = 0;
		roundResultsDiv.textContent = "";
		playerPointsDiv.textContent = "Player's score: ?";
		computerPointsDiv.textContent = "Computers's score: ?";
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
		playerPointsDiv.textContent = `Player's score: ${playerPoints}`;
		computerPointsDiv.textContent = `Computer's score: ${computerPoints}`;

		if (playerPoints === 5) {
			popupContainer.classList.add("show");
			matchResults.textContent = "You won!";
		} else if (computerPoints === 5) {
			popupContainer.classList.add("show");
			matchResults.textContent = "You lost!";
		} else if (playerPoints === 5 || computerPoints === 5) {
			popupContainer.classList.add("show");
			matchResults.textContent = "It's a draw!";
		}
	}

	function getComputerChoice() {
		const choices = ["rock", "paper", "scissors"];
		return choices[Math.floor(Math.random() * choices.length)];
	}
}

game();
