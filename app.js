let userGuessEl = document.getElementById("userGuess");
let guessBtnEl = document.getElementById("guessBtn");
let attemptsEl = document.getElementById("attempts");
let resultEl = document.getElementById("result");
let replayBtnEl = document.getElementById("replayBtn");
let finalResultEl = document.getElementById("finalResult");

let randomNumber = Math.floor(Math.random() * 50);
let attempts = 0;

function getValidUserInput(userGuess) {
  console.log(randomNumber);

  if (
    userGuess === "" ||
    isNaN(Number(userGuess)) ||
    Number(userGuess) > 50 ||
    Number(userGuess) <= 0
  ) {
    userGuessEl.value = "";
    alert("Please Enter Valid Input Number in between 1 to 50");
  } else {
    return true;
  }
}

function onClickOnGuss() {
  let userGuess = userGuessEl.value;
  let isValidInput = getValidUserInput(userGuess);

  if (isValidInput) {
    userGuess = Number(userGuess);
    attempts += 1;

    attemptsEl.textContent = `${attempts}/5`;
    if (randomNumber === userGuess) {
      resultEl.textContent = `${userGuess} Correct!`;
      let element = document.querySelector(".wrong");
      if (element !== null) {
        resultEl.classList.remove("wrong");
        guessBtnEl.style.display = "none";
      }
      resultEl.classList.add("correct");
      finalResultEl.textContent = "You Win the game please Play Again";
    } else if (randomNumber > userGuess) {
      resultEl.textContent = `${userGuess} Too Low`;
      resultEl.classList.add("wrong");
      if (attempts === 5) {
        finalResultEl.textContent = "You loose the game please Play Again";
        guessBtnEl.style.display = "none";
      }
    } else if (randomNumber < userGuess) {
      resultEl.textContent = `${userGuess} Too High`;
      resultEl.classList.add("wrong");
      if (attempts === 5) {
        finalResultEl.textContent = "You loose the game please Play Again";
        guessBtnEl.style.display = "none";
      }
    }

    userGuessEl.value = "";
  }
}

guessBtnEl.addEventListener("click", () => {
  onClickOnGuss();
});

document.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    onClickOnGuss();
  }
});

replayBtnEl.addEventListener("click", function () {
  guessBtnEl.style.display = "block";

  randomNumber = Math.floor(Math.random() * 50);
  attempts = 0;
  attemptsEl.textContent = `${attempts}/5`;
  resultEl.textContent = "";
  finalResultEl.textContent = "";
  userGuessEl.value = "";
});
