function updateData(playerSelect, computerSelect, winner) {
  const resultsDiv = document.querySelector('div')
  const playerChoiceSpan = document.getElementById('playerChoice')
  const computerChoiceSpan = document.getElementById('computerChoice')
  const winnerSpan = document.getElementById('winner')

  playerChoiceSpan.innerText = playerSelect
  computerChoiceSpan.innerText = computerSelect
  winnerSpan.innerText = winner

  resultsDiv.style.opacity = '100%'
}

function playRound(playerSelect, computerSelect) {
  const computerWin1 = playerSelect === "rock" && computerSelect === "paper"
  const computerWin2 = playerSelect === "paper" && computerSelect === "scissors"
  const computerWin3 = playerSelect === "scissors" && computerSelect === "rock"

  let winner = 'You'
  if (playerSelect === computerSelect) {
    winner = 'It\'s a draw';
  } else if (computerWin1 || computerWin2 || computerWin3) {
    winner = 'Computer';
  }

  updateData(playerSelect, computerSelect, winner)
}

function computerPlay() {
  const selection = Math.round(Math.random() * 3);

  if (selection === 1) {
    return "rock";
  } else if (selection === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function game(playerSelection) {
  return playRound(playerSelection, computerPlay())
}

document.querySelectorAll('button').forEach(button => {
  button.onclick = () => {
    game(button.getAttribute('id'))
  }
})
