/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, previousRoll1, previousRoll2, goalScore;

init();
goalScore = 100;

document.querySelector(`.btn-roll`).addEventListener("click", function () {
  if (gamePlaying) {
    // 1 Random number
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;

    // 2 Display the result
    var dice1DOM = document.querySelector(`.dice1`);
    dice1DOM.style.display = "block";
    dice1DOM.src = "dice-" + dice1 + ".png";

    var dice2DOM = document.querySelector(`.dice2`);
    dice2DOM.style.display = "block";
    dice2DOM.src = "dice-" + dice2 + ".png";

    console.log("DICE:", dice1, dice2)

    // 3 Update the round score IF the rolled number was NOT a 1
    if (dice1 !== 1 && dice2 !== 1) {
      if ((dice1 === 6 || dice2 === 6 ) && (previousRoll1 === 6 || previousRoll2 === 6)) {
        // remove active players ENTIRE SCORE
        scores[activePlayer] = 0;

        // update UI
        document.getElementById("score-" + activePlayer).textContent = "0";

        // next player
        nextPlayer();
      }
      previousRoll1 = dice1;
      previousRoll2 = dice2;
      //Add score
      roundScore += (dice1 + dice2);
      document.querySelector(
        "#current-" + activePlayer
      ).textContent = roundScore;
    } else {
      nextPlayer();
    }
  }
});

document.querySelector(`.btn-hold`).addEventListener(`click`, function () {
  if (gamePlaying) {
    // add current score to player's gloal score
    scores[activePlayer] += roundScore;

    // Update the UI
    document.querySelector(`#score-` + activePlayer).textContent =
      scores[activePlayer];

    // Check if player won the game
    if (scores[activePlayer] >= goalScore) {
      document.querySelector("#name-" + activePlayer).textContent = "Winner!";
      document.querySelector(".dice1").style.display = "none";
      document.querySelector(".dice2").style.display = "none";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      gamePlaying = false;
    } else {
      // Next player
      nextPlayer();
    }
  }
});

document.querySelector(`.btn-goal-change`).addEventListener(`click`, function() {
    console.log(document.querySelector(`#goal-entry`).value)
    goalScore = document.querySelector(`#goal-entry`).value
    init()
})

document.querySelector(`.btn-new`).addEventListener(`click`, init);

function init() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;

  gamePlaying = true;

//   document.querySelector(`.dice1`).style.display = "none";
//   document.querySelector(`.dice2`).style.display = "none";

  document.getElementById(`score-0`).textContent = "0";
  document.getElementById(`score-1`).textContent = "0";
  document.getElementById(`current-0`).textContent = "0";
  document.getElementById(`current-1`).textContent = "0";
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}

function nextPlayer() {
  //Next player
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;
  previousRoll1 = undefined;
  previousRoll2 = undefined;

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  //document.querySelector(".player-0-panel").classList.remove('active');
  //document.querySelector(".player-1-panel").classList.add('active');

  document.querySelector(".dice1").style.display = "none";
  document.querySelector(".dice2").style.display = "none";
}

// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector(`#current-` + activePlayer).innerHTML = `<em>` + dice + `</em>`
// var x = document.querySelector(`#score-0`).textContent;
// console.log(x)
