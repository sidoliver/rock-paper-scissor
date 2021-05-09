function game() {
  // computer choices
  const choices = ["rock", "paper", "scissor"];
  let movesLeft = document.querySelector(".result h3");
  const resultSection = document.querySelector(".result h2");
  let moves = 0;
  let playerScore = 0;
  let computerScore = 0;
  function playOneRound() {
    const btns = document.querySelectorAll(".button");
    btns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        moves++;
        movesLeft.innerText = `Moves Left: ${10 - moves}`;
        //  compute selection
        let computerSelection = Math.floor(Math.random() * choices.length);
        computerSelection = choices[computerSelection];
        //   call the winner
        winner(this.innerText, computerSelection);
        if (moves == 10) {
          gameOver(btns, movesLeft);
        }
      });
    });
    //   winner selection
    function winner(p, c) {
      const playerScoreBoard = document.querySelector(".player-score");
      const computerScoreBoard = document.querySelector(".computer-score");
      p = p.toLowerCase();
      c = c.toLowerCase();
      // =====================
      if (p === c) {
        resultSection.innerHTML = `${p} and  ${c} can't beat each other. It's a tie.`;
      } else if (p === "rock") {
        if (c == "scissor") {
          resultSection.innerHTML = `${p} beats  ${c}. You won!`;
          playerScore++;
          playerScoreBoard.innerHTML = playerScore;
        } else {
          resultSection.innerHTML = `${c} beats  ${p}. You lose!`;
          computerScore++;
          computerScoreBoard.innerHTML = computerScore;
        }
      } else if (p == "paper") {
        if (c == "rock") {
          resultSection.innerHTML = `${p} beats ${c}. You won!`;
          playerScore++;
          playerScoreBoard.innerHTML = playerScore;
        } else {
          resultSection.innerHTML = `${c} beats  ${p}. You lose!`;
          computerScore++;
          computerScoreBoard.innerHTML = computerScore;
        }
      } else if (p == "scissor") {
        if (c == "paper") {
          resultSection.innerHTML = `${p} beats ${c}. You won!`;
          playerScore++;
          playerScoreBoard.innerHTML = playerScore;
        } else {
          resultSection.innerHTML = `${c} beats  ${p}. You lose!`;
          computerScore++;
          computerScoreBoard.innerHTML = computerScore;
        }
      }
    }
    function gameOver(buttons, moves) {
      buttons.forEach(function (btn) {
        const reloadBtn = document.querySelector(".reload");
        btn.style.display = "none";
        moves.style.display = "none";
        resultSection.innerHTML = "game finished";
        if (computerScore == playerScore) {
          resultSection.innerHTML = `It's a tie`;
        } else if (playerScore > computerScore) {
          resultSection.innerHTML = `congrats! You won the game`;
          resultSection.style.color = 'green';
        } else {
          resultSection.innerHTML = `You lose from a machine!`;
          resultSection.style.color = 'red';
        }
        reloadBtn.style.display = "block";
        reloadBtn.addEventListener("click", function () {
          window.location.reload();
        });
      });
    }
  }
  playOneRound();
}
game();
