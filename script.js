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
const result = document.querySelector("#message");

function playRound(humanChoice, computerChoice){
    if(humanChoice === "rock"){
        if(computerChoice === "rock"){
            result.textContent = "It's a tie" 
        }else if(computerChoice === "paper"){
            result.textContent = "You lose! Paper beats Rock"
            computerScore++;
        }else{
            result.textContent = "You win! Rock beats Scissors"
            humanScore++;
        }
    }else if(humanChoice === "paper"){
        if(computerChoice === "rock"){
            result.textContent = "You win! Paper beats Rock"
            humanScore++;
        }else if(computerChoice === "paper"){
            result.textContent = "It's a tie"
        }else{
            result.textContent = "You lose! Scissors beat Paper"
            computerScore++;
        }
    }else{
        if(computerChoice === "rock"){
            result.textContent = "You lose! Rock beats Scissors"
            computerScore++;
        }else if(computerChoice === "paper"){
            result.textContent = "You win! Scissors beat Paper"
            humanScore++;
        }else{
            result.textContent = "It's a tie"
        }
    }
    result.textContent = result.textContent + "\n Your Score: "+ humanScore + " Computer Score: "+ computerScore
    if (humanScore == 5 || computerScore == 5){
        const finalResult = document.createElement("div")
        const resDiv = document.querySelector("#results");
        finalResult.textContent = humanScore == 5 ? "\n You win!" : "\n You lose!"
        resDiv.appendChild(finalResult);
        humanScore = 0
        computerScore = 0
    }
}

function playGame(){
    
    console.log("End of Match "+humanScore+ " "+computerScore);
    if(humanScore > computerScore){
        console.log("You Win!");
    }else{
        console.log("You Lose!");
    }
}

const rock = document.querySelector("#Rock");
const paper = document.querySelector("#Paper");
const scissors = document.querySelector("#Scissors");

rock.addEventListener('click', () => playRound("rock", getComputerChoice()))
paper.addEventListener('click', () => playRound("paper", getComputerChoice()))
scissors.addEventListener('click', () => playRound("scissors", getComputerChoice()))


//playGame();