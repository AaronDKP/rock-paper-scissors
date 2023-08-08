// Rock Paper Scissors

//user provides text input of rock, paper or scissors
    //make input case insensitive for ease of use
//computer responds with random choice of the same --           complete this first

//return string output of win/loss and reason of "rock beats scissors" etc


//game loops 5 times
//show win/loss and final score out of 5



function playRound(playerSelection, computerSelection) {
    // your code here!
  }

  let getComputerChoice = function (string){
    let randomChoice = Math.floor(Math.random() * 3);
    
    if(randomChoice === 0){
        return("Rock!")
    } else if(randomChoice === 1){
        return("Paper!")
    } else {
        return("Scissors!")
    }
}

console.log(getComputerChoice())
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));