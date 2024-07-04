function getComputerChoice(){
    let options = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random()*3);
    return options[choice];
}

function getHumanChoice(){
    let input = prompt("Please enter an option: rock, paper or scissors => ");
    input = input.toLocaleLowerCase();
    if (input === "rock" || input === "paper" || input === "scissors") return input;
    alert("Please enter a valid option")
}

let humanScore = 0 
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if(humanChoice === "rock"){
        if(computerChoice === "rock"){
            console.log("It's a tie");
        }else if(computerChoice === "paper"){
            console.log("You lose! Paper beats Rock");
            computerScore++;
        }else{
            console.log("You win! Rock beats Scissors");
            humanScore++;
        }
    }else if(humanChoice === "paper"){
        if(computerChoice === "rock"){
            console.log("You win! Paper beats Rock");
            humanScore++;
        }else if(computerChoice === "paper"){
            console.log("It's a tie")
        }else{
            console.log("You lose! Scissors beat Paper");
            computerScore++;
        }
    }else{
        if(computerChoice === "rock"){
            console.log("You lose! Rock beats Scissors");
            computerScore++;
        }else if(computerChoice === "paper"){
            console.log("You win! Scissors beat Paper");
            humanScore++;
        }else{
            console.log("It's a tie")
        }
    }
}

function playGame(){
    for(let i = 1; i <= 5; i++){
        console.log("Round "+i);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);       
    }
    console.log("End of Match "+humanScore+ " "+computerScore);
    if(humanScore > computerScore){
        console.log("You Win!");
    }else{
        console.log("You Lose!");
    }
}

playGame();