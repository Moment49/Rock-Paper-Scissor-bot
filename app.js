//A program of rock,paper,scissors
function getComputerChoice(){
    items = ['rock', 'paper', 'scissors']
    let comChoice = items[Math.floor(Math.random()* items.length)];
    return comChoice;
}
//Set the score Board for both player and Computer
let playerScore = 0;
let comScore = 0

function playRound(playerSelection, computerSelection){
    //Condition to check for player selection
    if ((playerSelection == 'rock' && computerSelection == 'scissors')|| 
        (playerSelection == 'paper' && computerSelection == 'rock') || 
        (playerSelection == 'scissors' && computerSelection == 'paper') ){ 
        playerScore +=1;     
        console.log(`Player score ${playerScore} : Computer score ${comScore}`)
        return `YOU WON! ${playerSelection} beats ${computerSelection}`   
    }else if ((playerSelection == 'scissors' && computerSelection == 'rock')|| 
    (playerSelection == 'rock' && computerSelection == 'paper') || 
    (playerSelection == 'paper' && computerSelection == 'scissors') ){
        comScore += 1;
        console.log(`Player Score ${playerScore} : Computer score ${comScore}`)
        return `You Lose ${computerSelection} beats ${playerSelection}`
        
    }else{
        comScore += 0;
        playerScore += 0;
        return `its a tie ${playerSelection} : ${computerSelection}`
    }
}

//A function to play the game for 5 rounds
// function game(){
//     for (let i = 0; i < 5; i++){
//         let playerChoice = prompt('Please choose either rock, paper or scissors: ').toLowerCase();
//         let computerChoice = getComputerChoice();
//         console.log(playRound(playerChoice, computerChoice))
//     }
//     //Check for the winner
//     if(playerScore > comScore){
//         console.log(`Player Wins the game`)
//     }else if (playerScore < comScore){
//         console.log(`Computer wins the game`)
//     }else if (playerScore == comScore){
//         console.log('its a draw');
//         //Replay the game if its a draw
//         for (let i = 0; i < 5; i++){
//             let playerChoice = prompt('Please choose either rock, paper or scissors: ').toLowerCase();
//             let computerChoice = getComputerChoice();
//             console.log(playRound(playerChoice, computerChoice))
//         }
//     }
// }

//A function to check who wins
// console.log(game())
















