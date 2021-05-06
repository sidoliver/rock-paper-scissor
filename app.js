const btns = document.querySelectorAll(".button");
const compScore = document.querySelector(".computer-score");
const userScore = document.querySelector(".player-score");
const resultSection = document.querySelector(".result h2");
let computerSelection = computerPlay();
let playerSelection = userPlay();
let game = playRound(playerSelection,computerSelection);

// computer selection
function computerPlay() {
  const options = ["rock", "paper", "scissor"];
  let random = Math.floor(Math.random() * 3);
  const option = options[random];
  return option;
}
// user selection
function userPlay() {
  btns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      let userSelection = btn.innerText;
      userSelection = userSelection.toLowerCase();
      // console.log(userSelection);
      return userSelection;
    });
  });
}
// playing game
function playRound(p, c) {
  if (p === c) {
    console.log(`${p} and  ${c} can't beat each other. It's a tie.`);
  } else if (
    (p == "rock" && c == "scissor") ||
    (p == "paper" && c == "rock") ||
    (p == "scissor" && c == "paper")
  ) {
    return "player";
    console.log(`${p} beats ${c}! You won.`);
  } else {
    return "computer";
    console.log(`${c} beats ${p}! You lose.`);
  }
}
// game result
// function game() {
//   let winner = playRound(playerSelection, computerSelection);
//   if (winner == "player") {
//     alert('player');
//   } else if ((winner = "computer")) {
//     alert('computer');
//   } else {
//     alert('tie');
//   }
// }
