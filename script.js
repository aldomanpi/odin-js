function computerPlay() {
    let number = Math.floor(Math.random() * 3) + 1;
    let result = "";
    if (number == 1) result = "rock";
    if (number == 2) result = "paper";
    if (number == 3) result = "scissors";
    return result;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) return "It's a tie!!";
    let playerWon = false;
    if ((playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper")) playerWon = true;
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.substring(1, );
    computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.substring(1, );
    let roundOutput = `You ${playerWon? "win" : "lose"}! ${playerWon ? playerSelection : computerSelection}
     beats ${playerWon ? computerSelection : playerSelection}!`;
    return roundOutput;
}

function getPlayerSelection() {
    let playerSelection = prompt("Rock, paper, or scissors?");
    playerSelection = playerSelection.toLowerCase();
    return playerSelection;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let player = getPlayerSelection();
        let computer = computerPlay();
        let result = playRound(player, computer);
        console.log(result);
        let scoreIndicator = result.split(" ")[1];
        switch (scoreIndicator) {
            case 'win!':
                playerScore++;
                break;
            case 'lose!':
                computerScore++;
                break;
            case 'a':
                playerScore += .5;
                computerScore += .5;
                break
        }
    }
    console.log(`Your score is: ${playerScore} and the computer's score is: ${computerScore}`);
}