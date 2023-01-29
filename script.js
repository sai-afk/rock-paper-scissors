
function computerPlay() {
   const gameArray = ['Rock', 'Paper', 'Scissors'];
   const random = Math.floor(Math.random() * gameArray.length);
   return gameArray[random];
}

function PlayerPlay(value) {
   playerSelection = value;
}

 

let playerSelection = "";
 const computerSelection = computerPlay();


 function playRound(playerSelection, computerSelection) {
   // Convert playerSelection and computerSelection to lowercase
   playerSelection = playerSelection.toLowerCase();
   computerSelection = computerSelection.toLowerCase();
 
   // Check for a tie
   if (playerSelection === computerSelection) {
     return { result: "tie", playerSelection, computerSelection };
   }
 
   // Check for a win
   if (
     (playerSelection === "rock" && computerSelection === "scissors") ||
     (playerSelection === "paper" && computerSelection === "rock") ||
     (playerSelection === "scissors" && computerSelection === "paper")
   ) {
     return { result: "win", playerSelection, computerSelection };
   }
 
   // Otherwise, the player loses
   return { result: "lose", playerSelection, computerSelection };
 }
 



window.onload = function() {
   const rockButton = document.getElementById("rock");
   rockButton.addEventListener('click', function() {
     playerSelection = 'rock';
     game();
   });
 
   const paperButton = document.getElementById("paper");
   paperButton.addEventListener('click', function() {
     playerSelection = 'paper';
     game();
   });
 
   const scissorsButton = document.getElementById("scissors");
   scissorsButton.addEventListener('click', function() {
     playerSelection = 'scissors';
     game()
   });
 
   const container = document.getElementById('container');
   container.append(rockButton, paperButton, scissorsButton);
 };
 


 let roundCounter = 0;

 function game() {
   if (roundCounter < 5) {
       const computerSelection = computerPlay();
       const currentRound = playRound(playerSelection, computerSelection);

       // Create a div to display the result
       const resultDiv = document.createElement("div");
       resultDiv.innerHTML = `You ${currentRound.result}! You chose ${currentRound.playerSelection} and the computer chose ${currentRound.computerSelection}.`;

       // Add the div to the container
       container.appendChild(resultDiv);

       roundCounter++;
   } else {
      const currentRound = playRound(playerSelection, computerSelection);

      const resultP = document.createElement("p");
      resultP.innerHTML = `Game over, You ${currentRound.result}! You chose ${currentRound.playerSelection} and the computer chose ${currentRound.computerSelection}.`;
      container.appendChild(resultP);
   }};