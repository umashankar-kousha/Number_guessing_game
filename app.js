// Dom Elements initialization

let userGuessEl = document.getElementById("userGuess");
let guessBtnEl = document.getElementById("guessBtn");
let attemptsEl = document.getElementById("attempts");
let resultEl = document.getElementById("result");
let replayBtnEl = document.getElementById("replayBtn");
let finalResultEl = document.getElementById("finalResult");

// random number and attempts generation
let randomNumber = Math.floor(Math.random() * 50) + 1;
let attempts = 0;

// for getting valid user input
function getValidUserInput(userGuess) {
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

// on click on guess button functionality
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
        finalResultEl.textContent = "You lose the game please Play Again";
        guessBtnEl.style.display = "none";
      }
    } else if (randomNumber < userGuess) {
      resultEl.textContent = `${userGuess} Too High`;
      resultEl.classList.add("wrong");
      if (attempts === 5) {
        finalResultEl.textContent = "You lose the game please Play Again";
        guessBtnEl.style.display = "none";
      }
    }

    userGuessEl.value = "";
  }
}

// for guess button click
guessBtnEl.addEventListener("click", () => {
  onClickOnGuss();
});

// for enter button key
document.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    onClickOnGuss();
  }
});

// on reset button functionality
replayBtnEl.addEventListener("click", function () {
  guessBtnEl.style.display = "block";

  randomNumber = Math.floor(Math.random() * 50) + 1;
  attempts = 0;
  attemptsEl.textContent = `${attempts}/5`;
  resultEl.textContent = "";
  finalResultEl.textContent = "";
  userGuessEl.value = "";
});
