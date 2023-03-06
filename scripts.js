let computerChoice = "";
let playerChoice = "";
let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.random();

    if (randomNumber >= 0.67) {
        return "Rock"
    } else if (randomNumber >= 0.33) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function playRockPaperScissors(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return "You both chose " + playerSelection.toLowerCase() + ", it is a tie."
    } else if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection.toLowerCase() == "paper") {
            computerScore++;
            return "You lose! Paper beats rock."
        } else {
            playerScore++;
            return "You win! Rock beats scissors."
        }
    } else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection.toLowerCase() == "scissors") {
            computerScore++;
            return "You lose! Scissors beats paper."
        } else {
            playerScore++;
            return "You win! Paper beats rock."
        }
    } else {
        if (computerSelection.toLowerCase() == "rock") {
            computerScore++;
            return "You lose! Rock beats scissors."
        } else {
            playerScore++;
            return "You win! Scissors beats paper."
        }
    }
}

function game() {
    computerScore, playerScore = 0;
    for (let i = 0; i < 5; i++) {
        computerChoice = getComputerChoice();
        playerChoice = prompt("Rock, Paper, or Scissors?: ");
        console.log(playRockPaperScissors(playerChoice, computerChoice));
        console.log("Player score: " + playerScore);
        console.log("Computer score: " + computerScore);
    }

    if (playerScore > computerScore) {
        console.log("Congratulations, you've won the game!");
    } else if (computerScore > playerScore) {
        console.log("Sorry, you lost to the computer.");
    } else {
        console.log("The game was a tie.");
    }
}

game();