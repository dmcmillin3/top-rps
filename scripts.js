const computerChoice = getComputerChoice();
const playerChoice = "Scissors";

function getComputerChoice() {
    let randomNumber = Math.random();
    console.log("Random Number: " + randomNumber);

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
            return "You lose! Paper beats rock."
        } else {
            return "You win! Rock beats scissors."
        }
    } else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection.toLowerCase() == "scissors") {
            return "You lose! Scissors beats paper."
        } else {
            return "You win! Paper beats rock."
        }
    } else {
        if (computerSelection.toLowerCase() == "rock") {
            return "You lose! Rock beats scissors."
        } else {
            return "You win! Scissors beats paper."
        }
    }
}

console.log(computerChoice);
console.log(playRockPaperScissors(playerChoice, computerChoice));