let computerChoice = "";
let playerChoice = "Scissors";

function getComputerChoice() {
    let randomNumber = Math.random();
    console.log("Random Number: " + randomNumber);

    if (randomNumber >= 0.67) {
        computerChoice = "Rock";
        return computerChoice
    } else if (randomNumber >= 0.33) {
        computerChoice = "Paper";
        return computerChoice
    } else {
        computerChoice = "Scissors";
        return computerChoice
    }
}

getComputerChoice();
console.log(computerChoice);

function playRockPaperScissors(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return console.log("You both chose " + playerSelection.toLowerCase() + ", it is a tie.")
    } else if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection.toLowerCase() == "paper") {
            return console.log("You lose! Paper beats rock.")
        } else {
            return console.log("You win! Rock beats scissors.")
        }
    } else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection.toLowerCase() == "scissors") {
            return console.log("You lose! Scissors beats paper.")
        } else {
            return console.log("You win! Paper beats rock.")
        }
    } else {
        if (computerSelection.toLowerCase() == "rock") {
            return console.log("You lose! Rock beats scissors.")
        } else {
            return console.log("You win! Scissors beats paper.")
        }
    }
}

playRockPaperScissors(playerChoice, computerChoice);