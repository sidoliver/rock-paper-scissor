function game() {
  let playerScore = 0;
  let computerScore = 0;
  let moves = 0;
  // create a function playgame
  function playGame() {
    // compute selection
    let computerChoice = ["rock", "paper", "scissor"];
    let computerSelection = Math.floor(Math.random() * 3);
    computerSelection = computerChoice[computerSelection];
    // userSelection
    const btns = document.querySelectorAll("button");

    btns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        moves++;
        winner(this.innerText, computerSelection);
        // if (moves == 10) {
        //   gameOver(playeroptions, movesLeft);
        // }
      });
    });

    function winner(p, c) {
      const compScore = document.querySelector(".computer-score");
      const userScore = document.querySelector(".player-score");
      const resultSection = document.querySelector(".result h2");
      p = p.toLowerCase();
      c = c.toLowerCase();
      // =====================
      if (p === c) {
        resultSection.innerHTML = `${p} and  ${c} can't beat each other. It's a tie.`;
      } else if(p === 'rock') {
        if(c == 'scissor') {
          resultSection.innerHTML = `${p} beats  ${c}. You won!`;
          userScore.innerHTML = playerScore++;
        } else {
          resultSection.innerHTML = `${c} beats  ${p}. You lose!`;
          compScore.innerHTML = computerScore++;
        }
      } else if(p == 'paper') {
        if(p=='rock') {
          resultSection.innerHTML = `${p} beats ${c}. You won!`;
          userScore.innerHTML = playerScore++;
        } else {
          resultSection.innerHTML = `${c} beats  ${p}. You lose!`;
          compScore.innerHTML = computerScore++;
        }
      } else if (p == 'scissor') {
        if(c == 'paper') {
          resultSection.innerHTML = `${p} beats ${c}. You won!`;
          userScore.innerHTML = playerScore++;
        } else {
          resultSection.innerHTML = `${c} beats  ${p}. You lose!`;
          compScore.innerHTML = computerScore++;
          
        }
      }
      
     
    }
    
    
  }
  playGame();
}
game();
