function playRound(playerSelect, computerSelect) {
  if (playerSelect.toLowerCase() === computerSelect) {
    return "draw";
  } else if (
    playerSelect.toLowerCase() === "rock" &&
    computerSelect === "paper"
  ) {
    return "you lose";
  } else if (
    playerSelect.toLowerCase() === "paper" &&
    computerSelect === "scissors"
  ) {
    return "you lose";
  } else if (
    playerSelect.toLowerCase() === "scissors" &&
    computerSelect === "rock"
  ) {
    return "you lose";
  } else {
    return "you win";
  }
}

function computerPlay() {
  const selection = Math.round(Math.random() * 2);

  if (selection === 1) {
    return "rock";
  } else if (selection === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function game() {
  const playerSelection = prompt(
    "What is your selection, Rock, Paper or Scissors"
  );

  if (playerSelection.toLowerCase() === "rock" || playerSelection.toLowerCase() === "paper" || playerSelection.toLowerCase() === "scissors") {
    return alert(playRound(playerSelection, computerPlay()))
  } else {
    return alert("invalid selection, you lose")
  }
}

for (let index = 0; index < 5; index++) {
  game();
}
