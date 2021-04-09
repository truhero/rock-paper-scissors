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
    let log="";
    
    if (playerSelection === computerSelection){
        return "It's a TIE!"
    }
    else if (playerSelection==="rock"){
        // ROCK > SCISSORS (Human wins)
        if (computerSelection==="scissors"){
            log = "You win! Rock beats scissors"
        }
        // PAPER > Rock (Computer wins)
        else if (computerSelection=="paper"){
            log = "You lose! Paper beats Rock! "
        }
    }
    else if (playerSelection==="paper"){
        // Paper > Rock (Human wins)
        if (computerSelection==="rock"){
            log = "You win! Paper beats rock"
        }
        // Scissors > Paper (Computer Wins)
        else if (computerSelection==="scissors"){
            log = "You lose! Scissors beats paper! "
        }
    }
    else if (playerSelection==="scissors"){
        // Scissors > Paper (Human Wins)
        if (computerSelection==="paper"){
            log = "You win! Scissors beats paper!"
        }
        // Rock > Scissors (Computer Wins)
        else if (computerSelection==="rock"){
            log = "You lose! Rock beats scissors! "
        }
    }
    return log ;
}

function game() {
    const computerSelection = computerPlay() ;
    const playerSelection= playerPlay();
    console.log(playRound(playerSelection,computerSelection));
}

game();


