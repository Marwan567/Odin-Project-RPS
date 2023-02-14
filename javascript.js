
const RPS = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const choice = RPS
    const randomIndex = Math.floor(Math.random() * choice.length);
    const randomChoice = choice[randomIndex];
    return randomChoice;
}

function playerSelection() {
    let player = prompt('Hello and welcome! Choose from rock, paper or scissors');
    player = player.toLowerCase();
    let validchoice = false

    while (!validchoice) {

        if (RPS.includes(player)) {
            validchoice = true;
            return player;
        } else {
            alert('please make a valid choice, rock, paper or scissors');
            player = prompt('Hello and welcome! Choose from rock, paper or scissors');
            player = player.toLowerCase();
        }
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'scissors' ||
        playerSelection == 'paper' && computerSelection == 'rock' ||
        playerSelection == 'scissors' && computerSelection == 'paper') {
        
        console.log('you choose ' + playerSelection + ' computer chose ' + computerSelection );
        return 'you win';
        }
        else if (playerSelection == computerSelection) {
        console.log('you choose ' + playerSelection + ' computer chose ' + computerSelection );
        return 'tie';
    }
    else {

        console.log('you choose ' + playerSelection + ' computer chose ' + computerSelection );
        return 'you lose';
    }
}

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("welcome!")
    for (let i = 0; i < 5; i++) {
        const PlayerChoice = playerSelection();
        const computerChoice = getComputerChoice();
        const result = playRound(PlayerChoice, computerChoice);
        console.log(result);
        console.log("--------------");
    
        if(result == 'you win') {
            scorePlayer++;
        }
        
        else if(result == 'you lose') {
            scoreComputer++;
        }
    }
    console.log("game over");
    if(scorePlayer > scoreComputer) {
        console.log("player was the winner");
    }
    else if(scorePlayer < scoreComputer) {
        console.log("computer was the winner");
    }
    else {
        console.log("we have a tie!");
    }
    

}

game()
