const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;


function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
let result = "";
if (playerChoice === computerChoice) {
result = "TIE";}
else{
    switch(playerChoice){
        case "rock":
            result = (computerChoice === "scissors") ? "YOU WIN" : "YOU LOSE";
    }
    switch(playerChoice){
        case "paper":
            result = (computerChoice === "rock") ? "YOU WIN" : "YOU LOSE";
    }
    switch(playerChoice){
        case "scissors":
            result = (computerChoice === "paper") ? "YOU WIN" : "YOU LOSE";
    }

}
playerDisplay.textContent = `PLAYER: ${playerChoice}`;
computerDisplay.textContent = `Computer: ${playerChoice}`;
resultDisplay.textContent = result;

switch(result){
    case "YOU WIN":
    playerScore++;
    playerScoreDisplay.textContent = playerScore;
    break;
    case "YOU LOSE":
    computerScore++;
    computerScoreDisplay.textContent = computerScore;

}
}

                                