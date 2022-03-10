const shapes = ["r", "p", "s"]
const playerSelection = prompt("Type R for 'Rock', P for 'Paper' and S for 'Scissors'").toLowerCase()
let  computerSelection = computerPlay()

function computerPlay(){
    return shapes[Math.floor(Math.random() * shapes.length)] 
}

function playRound(playerSelection, computerSelection) {
    let playerWins = false
    if (playerSelection === computerSelection){
        return "It's a draw"
    }else{
        if (playerSelection === "r" && computerSelection === "s" || 
        playerSelection === "s" && computerSelection === "p" ||
        playerSelection === "p" && computerSelection === "r"){
            playerWins = true
        }
    return playerWins
    }
}


function game(){
    let playerScore = 0
    let computerScore = 0
    let draws = 0
    let round
        for (let i = 0; i < 5; i++){
            computerSelection = computerPlay()
            round = playRound(playerSelection, computerSelection)
            if (round === true){
                playerScore += 1
            } else if (round === false){
                computerScore += 1
            } else {
                draws +=1
            }
        }
    return `Totally you won ${playerScore} time(s) and lost ${computerScore} time(s), with ${draws} draw(s).`
}

console.log(game())