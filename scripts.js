let computerChoice = "";
let playerChoice = "";
let computerScore = 0;
let playerScore = 0;
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let result = document.querySelector("#result");
let score = document.querySelector("#score");

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

function playRockPaperScissors(playerSelection) {
    let computerSelection = getComputerChoice();
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        result.textContent = "You both chose " + playerSelection.toLowerCase() + ", it is a tie.";
    } else if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection.toLowerCase() == "paper") {
            computerScore++;
            result.textContent = "You lose! Paper beats rock.";
        } else {
            playerScore++;
            result.textContent = "You win! Rock beats scissors.";
        }
    } else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection.toLowerCase() == "scissors") {
            computerScore++;
            result.textContent = "You lose! Scissors beats paper.";
        } else {
            playerScore++;
            result.textContent = "You win! Paper beats rock.";
        }
    } else {
        if (computerSelection.toLowerCase() == "rock") {
            computerScore++;
            result.textContent = "You lose! Rock beats scissors.";
        } else {
            playerScore++;
            result.textContent = "You win! Scissors beats paper."
        }
    }
    score.textContent = "Player score: " + playerScore + " Computer Score: " + computerScore;
    if (computerScore >= 5 || playerScore >= 5) {
        if (playerScore > computerScore) {
            result.textContent = "Congratulations, you've won the game!";
        } else if (computerScore > playerScore) {
            result.textContent = "Sorry, you lost to the computer.";
        } else {
            result.textContent = "The game was a tie.";
        }
    }
}


computerScore, playerScore = 0;
rock.addEventListener("click", () => {
    playRockPaperScissors("rock");
});
paper.addEventListener("click", () => {
    playRockPaperScissors("paper");
});
scissors.addEventListener("click", () => {
    playRockPaperScissors("scissors")
});
