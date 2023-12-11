let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
  let target = Math.floor(Math.random() * 10);
  return target;
}

function getAbsoluteDistance(user, target) {
  let absoluteDistance = Math.abs(user - target);
  return absoluteDistance;
}

function compareGuesses(human, computer, target) {
  if (
    human === computer ||
    getAbsoluteDistance(human, target) <= getAbsoluteDistance(computer, target)
  ) {
    return true;
  } else {
    return false;
  }
}

function updateScore(winner) {
  if (winner === "human") {
    humanScore++;
  } else {
    computerScore++;
  }
}

function advanceRound() {
  currentRoundNumber++;
}
