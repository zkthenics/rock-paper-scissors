function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"]
  const randomIndex = Math.floor(Math.random() * choices.length)
  return choices[randomIndex]
}

function getHumanChoice(computerChoice) {
  alert(`Computer choice is ${computerChoice}`)
  let userInput = prompt("Enter rock, paper or scissors")

  while (userInput !== "rock" && userInput !== "paper" && userInput !== "scissors") {
    userInput = prompt("Enter ONLY rock, paper or scissors")
  }
  return userInput
}

function playGame() {
  let computerScore = 0
  let humanScore = 0

  function playRound(computerChoice, humanChoice) {
    humanChoice = humanChoice.toLowerCase()

    if (computerChoice === humanChoice) {
      console.log(`Its a draw ${computerChoice} and ${humanChoice} are the same`)
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log(`You win ${humanChoice[0].toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`)
      humanScore++;
    } else {
      console.log(`You lost ${computerChoice[0].toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}`)
      computerScore++;
    }
  }

  for (let i = 0;i < 5;i++) {
    const computerChoice = getComputerChoice()
    const humanChoice = getHumanChoice(computerChoice)
    playRound(computerChoice, humanChoice)
  }

  console.log(`Your score: ${humanScore} | Computer score: ${computerScore}`)

  if (humanScore > computerScore) {
    console.log("You win this game")
  } else if (computerScore > humanScore) {
    console.log("You lose this game")
  } else {
    console.log("It was a draw")
  }
}

playGame()

