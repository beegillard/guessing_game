let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    let target = Math.floor(Math.random()*10);
    return target;
}

const compareGuesses = (currentHumanGuess, computerGuess, target) => {
    let humanDiff = Math.abs(currentHumanGuess - target);
    let computerDiff = Math.abs(computerGuess - target);
    if (computerDiff >= humanDiff) {
        return true; 
    } else {
        return false;
    }
}

const updateScore = (winner) => {
    if (winner === 'human') {
        ++humanScore ;
    } else {
        ++computerScore ;
    }   
}

const advanceRound = () => {
    ++currentRoundNumber;
}