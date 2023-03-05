let computerChoice = "";

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