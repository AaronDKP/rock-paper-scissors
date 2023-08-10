// Rock Paper Scissors

//user provides text input of rock, paper or scissors
    //make input case insensitive for ease of use
//computer responds with random choice of the same --           complete this first

//return string output of win/loss and reason of "rock beats scissors" etc


//create loop that plays 5 rounds of game
//keep track of score
//show win/loss and final score out of 5



function game(playRound){
    let roundsPlayed = 0;
    let score = 0;

    for (roundsPlayed = 0; roundsPlayed < 5; roundsPlayed++){
        let result = playRound();
            console.log(result);
        if (result.slice(0, 7) === 'You Win'){
           score++;
        }
    }

    console.log('Your Score: ' + score + '/5');

    let winner;
    if(score === 5){
        console.log('You Win!')
    } else if (roundsPlayed === 5 && score < 5){
        console.log('You Lose!')
    }


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
        return('You Win! Rock beats Paper');
    } else if (playerSelection === 'Rock!' && computerSelection === 'Paper!'){
        return('You Lose! Paper beats Rock')
    } else if(playerSelection === 'Rock!' && computerSelection === 'Rock!'){
        return("It's a Tie!")
    }

    //output if player selection = paper

    if (playerSelection === 'Paper!' && computerSelection === 'Rock!'){
        return('You Win! Paper beats Rock');
    } else if (playerSelection === 'Paper!' && computerSelection === 'Scissors!'){
        return('You Lose! Scissors beats Paper')
    } else if(playerSelection === 'Paper!' && computerSelection === 'Paper!'){
        return("It's a Tie!")
    }

        
    //output if player selection = scissors

    if (playerSelection === 'Scissors!' && computerSelection === 'Paper!'){
        return('You Win! Scissors beats Paper');
    } else if (playerSelection === 'Scissors!' && computerSelection === 'Rock!'){
        return('You Lose! Rock beats Scissors')
    } else if(playerSelection === 'Scissors!' && computerSelection === 'Scissors!'){
        return("It's a Tie!")
    }

}

}




console.log(game())

 //console.log(playRound());