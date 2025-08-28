let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  tie: 0,
  losses: 0,
};

updatescore();

function playgame(userchoice) {
  cmpchoise();
  console.log(`ia choice: ${iachoice}`);
  if (userchoice === "✌️") {
    if (userchoice === iachoice) {
      score.tie += 1;
      document.querySelector(".js-result").innerHTML = "result = tie ⚖️";
    } else if (iachoice === "🖐") {
      score.wins += 1;
      document.querySelector(".js-result").innerHTML = "result = win 🏆";
    } else if (iachoice === "✊") {
      score.losses += 1;
      document.querySelector(".js-result").innerHTML = "result = lose 😔";
    }
  } else if (userchoice === "🖐") {
    if (userchoice === iachoice) {
      score.tie += 1;
      document.querySelector(".js-result").innerHTML = "result = tie ⚖️";
    } else if (iachoice === "✊") {
      score.wins += 1;
      document.querySelector(".js-result").innerHTML = "result = win 🏆";
    } else if (iachoice === "✌️") {
      score.losses += 1;
      document.querySelector(".js-result").innerHTML = "result = lose 😔";
    }
  } else if (userchoice === "✊") {
    if (userchoice === iachoice) {
      score.tie += 1;
      document.querySelector(".js-result").innerHTML = "result = tie ⚖️";
    } else if (iachoice === "🖐") {
      score.losses += 1;
      document.querySelector(".js-result").innerHTML = "result = lose 😔";
    } else if (iachoice === "✌️") {
      score.wins += 1;
      document.querySelector(".js-result").innerHTML = "result = win 🏆";
    }
  }
  document.querySelector(
    ".js-moves"
  ).innerHTML = `ia choice = ${iachoice} and your choice = ${userchoice}`;

  localStorage.setItem("score", JSON.stringify(score));
  updatescore();
}

function cmpchoise() {
  randnumb = Math.random();
  if (randnumb >= 0 && randnumb < 1 / 3) {
    iachoice = "✊";
  } else if (randnumb >= 1 / 3 && randnumb < 2 / 3) {
    iachoice = "🖐";
  } else if (randnumb >= 2 / 3 && randnumb < 1) {
    iachoice = "✌️";
  }
}

function updatescore() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `the score is wins = ${score.wins} losses = ${score.losses} tie = ${score.tie}`;
}
