const rounds = document.querySelector('.rounds');
const weaponsButtons = document.querySelectorAll('.weapon-button');
const playAgainButton = document.querySelector('.try-again');
const endGameText = document.querySelector(".game-end-text");
const results = document.querySelector(".results-container");
const resultsMessage = document.querySelector(".results-message");

let playerLives = 5 ;
let computerLives = 5 ;
let round = 0;

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
        resultsMessage.textContent = "It's a draw!"
    }
    else if (playerSelection==="rock"){
        // ROCK > SCISSORS (Human wins)
        if (computerSelection==="scissors"){
            --computerLives;
            resultsMessage.textContent = "Your rock beat their scissors! Nice!"
        }
        // PAPER > Rock (Computer wins)
        else if (computerSelection=="paper"){
            --playerLives;
            resultsMessage.textContent = "Their paper beat your rock! Bummer!"
        }
    }
    else if (playerSelection==="paper"){
        // Paper > Rock (Human wins)
        if (computerSelection==="rock"){
            --computerLives;
            resultsMessage.textContent = "Your paper beat their rock! Nice!"
        }
        // Scissors > Paper (Computer Wins)
        else if (computerSelection==="scissors"){
            --playerLives;
            resultsMessage.textContentog = "Their scissors beat your rock! Bummer!"
        }
    }
    else if (playerSelection==="scissors"){
        // Scissors > Paper (Human Wins)
        if (computerSelection==="paper"){
            --computerLives;
            resultsMessage.textContent = "Your  scissors beat their paper - Nice!"
        }
        // Rock > Scissors (Computer Wins)
        else if (computerSelection==="rock"){
            --playerLives;
            resultsMessage.textContent = "Their rock beat your scissors - Bummer!"
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

        resultsMessage.textContent = ""

    }      

}

function resetGame() {
    playAgainButton.addEventListener('click', () => {
      window.location.reload();
    });
  }


function playGame() {
    resultsMessage.textContent = "May the best one win!"
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