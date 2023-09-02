// Rock Paper Scissors GUI Version

let playerScore = document.querySelector('#playerScore');
    playerScore.textContent = 0;
    let computerScore = document.querySelector('#computerScore');
    computerScore.textContent = 0;

    const buttonContainer = document.querySelector('#buttonContainer');
    const scores = document.querySelector('#scores');
    const welcomeScreen = document.querySelector('#welcomeScreen');
    const welcomeButton = document.querySelector('.welcomeButton');
    const playerImg = document.querySelector('.playerImg');
    const computerImg = document.querySelector('.computerImg');
    const retryButton = document.querySelector('#retryButton');


    if (playerScore.textContent == 0 && computerScore.textContent == 0){
        scores.style.display = 'none';
        buttonContainer.style.display = 'none';
        welcomeButton.addEventListener("click", () => {
            welcomeScreen.style.display = 'none';
            scores.style.display = 'flex';
            buttonContainer.style.display = 'flex';
            playerImg.setAttribute('src', 'img/rock.svg');
            computerImg.setAttribute('src', 'img/rock.svg');
            roundResult.textContent = 'Make the first move!';
        })
    } else {
        welcomeScreen.style.display = 'none';
    }

    retryButton.addEventListener("click", () => {
        window.location.reload();
    });

    const buttons = document.getElementsByClassName("button");
        for (const btn of buttons) {
            btn.addEventListener("click", () => {
                const roundResult = document.querySelector('#roundResult');
                roundResult.textContent = (playRound(btn.textContent));

                if (roundResult.textContent.slice(0, 7) === 'You Win'){
                    playerScore.textContent++;
                } else if (roundResult.textContent.slice(0, 7) === 'You Los'){
                    computerScore.textContent++;
                }

                if (playerScore.textContent >= 5) {
                    buttonContainer.style.display = 'none';
                    scores.style.display = 'none';
                    roundResult.textContent = 'You Win! Game Over!';
                    retryButton.style.display = 'flex';
                } else if (computerScore.textContent >= 5) {
                    buttonContainer.style.display = 'none';
                    scores.style.display = 'none';
                    roundResult.textContent = 'You Lose! Game Over!';
                    retryButton.style.display = 'flex';
                }

            });

        }


    // player input

    function getPlayerSelection(input) {
        return input;
    }


    // computer input

    function getComputerChoice() {
        let randomChoice = Math.floor(Math.random() * 3);
      
        if (randomChoice === 0) {
          return "Rock!";
        } else if (randomChoice === 1) {
          return "Paper!";
        } else {
          return "Scissors!";
        }
      }


    function playRound(playerSelection) {
        playerSelection = getPlayerSelection(playerSelection);
        computerSelection = getComputerChoice();

        //output if player selection = rock

        if (playerSelection === 'Rock!' && computerSelection === 'Scissors!'){
            playerImg.setAttribute('src', 'img/rock.svg');
            computerImg.setAttribute('src', 'img/scissors.svg');
            return('You Win! Rock beats Paper');
        } else if (playerSelection === 'Rock!' && computerSelection === 'Paper!'){
            playerImg.setAttribute('src', 'img/rock.svg');
            computerImg.setAttribute('src', 'img/paper.svg');
            return('You Lose! Paper beats Rock')
        } else if(playerSelection === 'Rock!' && computerSelection === 'Rock!'){
            playerImg.setAttribute('src', 'img/rock.svg');
            computerImg.setAttribute('src', 'img/rock.svg');
            return("It's a Tie!")
        }
    
        //output if player selection = paper
    
        if (playerSelection === 'Paper!' && computerSelection === 'Rock!'){
            playerImg.setAttribute('src', 'img/paper.svg');
            computerImg.setAttribute('src', 'img/rock.svg');
            return('You Win! Paper beats Rock');
        } else if (playerSelection === 'Paper!' && computerSelection === 'Scissors!'){
            playerImg.setAttribute('src', 'img/paper.svg');
            computerImg.setAttribute('src', 'img/scissors.svg');
            return('You Lose! Scissors beats Paper')
        } else if(playerSelection === 'Paper!' && computerSelection === 'Paper!'){
            playerImg.setAttribute('src', 'img/paper.svg');
            computerImg.setAttribute('src', 'img/paper.svg');
            return("It's a Tie!")
        }
    
            
        //output if player selection = scissors
    
        if (playerSelection === 'Scissors!' && computerSelection === 'Paper!'){
            playerImg.setAttribute('src', 'img/scissors.svg');
            computerImg.setAttribute('src', 'img/paper.svg');
            return('You Win! Scissors beats Paper');
        } else if (playerSelection === 'Scissors!' && computerSelection === 'Rock!'){
            playerImg.setAttribute('src', 'img/scissors.svg');
            computerImg.setAttribute('src', 'img/rock.svg');
            return('You Lose! Rock beats Scissors')
        } else if(playerSelection === 'Scissors!' && computerSelection === 'Scissors!'){
            playerImg.setAttribute('src', 'img/scissors.svg');
            computerImg.setAttribute('src', 'img/scissors.svg');
            return("It's a Tie!")
        }

      }
