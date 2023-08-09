// Rock Paper Scissors

//user provides text input of rock, paper or scissors
    //make input case insensitive for ease of use
//computer responds with random choice of the same --           complete this first

//return string output of win/loss and reason of "rock beats scissors" etc


//game loops 5 times
//show win/loss and final score out of 5



function playRound(playerSelection, computerSelection) {
    
    // computer input

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

    // player input
    
    function getPlayerSelection(){
        let query = prompt("Rock, Paper or Scissors?");
            if(query.toLowerCase() === 'rock'){
                return('Rock!')
            } else if (query.toLowerCase() === 'paper'){
                return('Paper!')
            } else if (query.toLowerCase() === 'scissors'){
                return('Scissors!')
            } else {
                alert('Please enter "Rock", "Paper" or "Scissors"')
            }
    
        }
    
      playerSelection = getPlayerSelection();
      computerSelection = getComputerChoice();


    //output if player selection = rock

    if (playerSelection === 'Rock!' && computerSelection === 'Scissors!'){
        alert('You Win!');
    } else if (playerSelection === 'Rock!' && computerSelection === 'Paper!'){
        alert('You Lose!')
    } else if(playerSelection === 'Rock!' && computerSelection === 'Rock!'){
        alert("It's a Tie!")
    }

    //output if player selection = paper

    if (playerSelection === 'Paper!' && computerSelection === 'Rock!'){
        alert('You Win!');
    } else if (playerSelection === 'Paper!' && computerSelection === 'Scissors!'){
        alert('You Lose!')
    } else if(playerSelection === 'Paper!' && computerSelection === 'Paper!'){
        alert("It's a Tie!")
    }

        
    //output if player selection = scissors

    if (playerSelection === 'Scissors!' && computerSelection === 'Paper!'){
        alert('You Win!');
    } else if (playerSelection === 'Scissors!' && computerSelection === 'Rock!'){
        alert('You Lose!')
    } else if(playerSelection === 'Scissors!' && computerSelection === 'Scissors!'){
        alert("It's a Tie!")
    }



}

 console.log(playRound());