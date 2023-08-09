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

  
  function getComputerChoice(){
    let randomChoice = Math.floor(Math.random() * 3);
    
    if(randomChoice === 0){
        return("Rock!")
    } else if(randomChoice === 1){
        return("Paper!")
    } else {
        return("Scissors!")
    }
}

function getPlayerSelection(){
    let query = prompt("Rock, Paper or Scissors?");
        if(query.toLowerCase() === 'rock'){
            return('Rock!')
        } else if (query.toLowerCase() === 'paper'){
            return('Paper!')
        } else if (query.toLowerCase() === 'scissors'){
            return('Scissors!')
        } else {
            return('Please enter "Rock", "Paper" or "Scissors"')
        }

    }

    console.log(getPlayerSelection())

  let playerSelection = getPlayerSelection();
  let computerSelection = getComputerChoice();
  //console.log(playRound(playerSelection, computerSelection));