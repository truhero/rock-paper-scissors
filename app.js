const rounds = document.querySelector('.rounds');
const weaponsButtons = document.querySelectorAll('.weapon-button');
const playAgainButton = document.querySelector('.try-again');
const endGameText = document.querySelector(".game-end-text");
const results = document.querySelector(".results-container");
const resultsMessage = document.querySelector(".results-message");

let playerLives = 5 ;
let computerLives = 5 ;
let round = 0;
resultsMessage.textContent = "May the best one win!"

function playerPlay(){
    let input = prompt("Choose one: Rock, Paper, or Scissors");
    return input;
}

function computerPlay(){
    let rand_num = Math.floor(Math.random() * 3 + 1);
    if (rand_num==1){
        return "rock";
    }
    else if (rand_num==2){
        return "paper";
    }
    else if (rand_num==3){
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {    
    if (playerSelection === computerSelection){
        return "It's a TIE!"
    }
    else if (playerSelection==="rock"){
        // ROCK > SCISSORS (Human wins)
        if (computerSelection==="scissors"){
            --computerLives;
            resultsMessage.textContent = "You win! Rock beats scissors!"
        }
        // PAPER > Rock (Computer wins)
        else if (computerSelection=="paper"){
            --playerLives;
            resultsMessage.textContent = "You lose! Paper beats Rock! "
        }
    }
    else if (playerSelection==="paper"){
        // Paper > Rock (Human wins)
        if (computerSelection==="rock"){
            --computerLives;
            resultsMessage.textContent = "You win! Paper beats rock!"
        }
        // Scissors > Paper (Computer Wins)
        else if (computerSelection==="scissors"){
            --playerLives;
            resultsMessage.textContentog = "You lose! Scissors beats paper! "
        }
    }
    else if (playerSelection==="scissors"){
        // Scissors > Paper (Human Wins)
        if (computerSelection==="paper"){
            --computerLives;
            resultsMessage.textContent = "You win! Scissors beats paper!"
        }
        // Rock > Scissors (Computer Wins)
        else if (computerSelection==="rock"){
            --playerLives;
            resultsMessage.textContent = "You lose! Rock beats scissors! "
        }
    }

    const lives = document.querySelector('.lives');
    lives.innerText = `Your Lives: ${playerLives} ︱ Enemy's Lives: ${computerLives}`;
    return [playerLives, computerLives];    
}

/*
function game() {
    const computerSelection = computerPlay() ;
    const playerSelection= playerPlay();
    console.log(playRound(playerSelection,computerSelection));
}
**/

function countRounds(){
    round +=1 ;
    rounds.innerText = "Round: " + round ;
    return round;
}

function countLives(){
    if (playerLives==0 || computerLives == 0){
        weaponsButtons.forEach((button) => {
            button.setAttribute('disabled', '');
            button.classList.add('disabled-button');
        playAgainButton.style.visibility = 'visible';
        });

        if(playerLives > computerLives){
            endGameText.textContent = "You Won :-) " ;       
        } else {
            endGameText.textContent = "You Lose :-("
        }
    }      

}

function resetGame() {
    playAgainButton.addEventListener('click', () => {
      window.location.reload();
    });
  }


function playGame() {
    let playerSelection;
    weaponsButtons.forEach((weapon) => {
        weapon.addEventListener('click', () => {
                if(weapon.classList.contains('rock-button')){
                    playerSelection = 'rock';
                }
                else if (weapon.classList.contains('paper-button')){
                    playerSelection = "paper";
                }
                else {
                    playerSelection = "scissors";
                }
                playRound(playerSelection,computerPlay());
                countRounds();
                countLives();
                resetGame();
            });
        });
    
}

playGame();