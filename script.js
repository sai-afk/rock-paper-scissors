function computerPlay() {
    const gameArray = ['Rock', 'Paper', 'Scissors'];
    const random = Math.floor(Math.random() * gameArray.length);
    return gameArray[random];
 }
  

  const playerSelection = prompt("Choose");
  const computerSelection = computerPlay();


function playRound(playerSelection, computerSelection) {
    if (computerSelection === playerSelection.toLowerCase()) {
       console.log("It's a draw!");
       return("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
    } else if (computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "scissors") {
       console.log("Rock beats scissors! You lose :(");
       return("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
    } else if (computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() === "rock") {
       console.log("Rock beats scissors! You win :D");
       return("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
    } else if (computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() === "paper") {
       console.log("Scissors beats paper! You lose :(");
       return("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
    } else if (computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "scissors") {
       console.log("Scissors beats paper! You win :D");
       return("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
    } else if (computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "rock") {
       console.log("Paper beats rock! You lose :(");
       return("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
    } else if (computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "paper") {
       console.log("Paper beats rock! You win :D");
       return("Your Choice: " + playerSelection + ". " + "Computer: " + computerSelection);
    } else {
       console.log("I'm not sure what, but something went wrong :(");
    }
 }

 function game() {
    for (let i = 0; i < 5; i++) {
      const playerSelection = prompt("Choose");
      const computerSelection = computerPlay();
      const currentRound = playRound(playerSelection, computerSelection);
      console.log(currentRound);
    }
 }

game();