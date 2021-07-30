"use strict";
// Global variables for the drop-down div section. -------------------
let showHowToButton = document.getElementById("howToShow");
let hideHowToButton = document.getElementById("howToHide");
let howToDiv = document.getElementById("howToCont");

// Functions to show and remove the drop-down div. ------------------
showHowToButton.addEventListener("click", displayHowTo);
hideHowToButton.addEventListener("click", removeHowTo);

function displayHowTo(){
  howToDiv.classList.remove("hide");
  howToDiv.classList.add("howToContainer");
  showHowToButton.classList.add("hide");
}
function removeHowTo(){
  howToDiv.classList.remove("howToContainer");
  howToDiv.classList.add("hide");
  showHowToButton.classList.remove("hide");
}
// /////////////////////////////////////////////////////////////////////////

// Global variables for the game funtionality. ---------------------------
let messageDisplay = document.getElementById("messDis");
let numberDisplay = document.getElementById("numDis");
let onScreenNumber = document.getElementById("num");

let gameSelectionDiv = document.getElementById("gameSelcCon");
let normalGameButton = document.getElementById("normBut");
let randomGameButton = document.getElementById("randBut");
let gameType = "";
let number = 0;
let submitted_answer = "";

let answerButtonsDiv = document.getElementById("answerSelcCon");
let fizzButton = document.getElementById("fizzBut");
let buzzButton = document.getElementById("buzzBut");
let fizzBuzzButton = document.getElementById("fizzBuzzBut");
let noneButton = document.getElementById("noneBut");

// play button is used to start and play another round.
let playButton = document.getElementById("play");
let resetButton = document.getElementById("reset");

// Game selection function. -----------------------------
normalGameButton.addEventListener("click", selectGame);
randomGameButton.addEventListener("click", selectGame);

function selectGame(e){
  let gameValue = e.target.value;
  gameType = gameValue;

  gameSelectionDiv.classList.add("hide");
  messageDisplay.classList.remove("hide");
  messageDisplay.textContent = "Click the Start button to begin.";
  numberDisplay.classList.remove("hide");
  onScreenNumber.textContent = "_";

  playButton.classList.remove("hide");
  resetButton.classList.remove("hide");
}

// Main game playing functions. ---------------------------------------
playButton.addEventListener("click", startGame);

// Submits the answers. ------------------------------------------------
fizzButton.addEventListener("click", answerSubmitted);
buzzButton.addEventListener("click", answerSubmitted);
fizzBuzzButton.addEventListener("click", answerSubmitted);
noneButton.addEventListener("click", answerSubmitted);

function answerSubmitted(e){
  let buttonClicked = e.target.value;
  submitted_answer = buttonClicked;
  gameLogic();
}
// Hides the submit buttons.----------------------------------
function hideSubmitAnswerButtons(){
  answerButtonsDiv.classList.add("hide");
  answerButtonsDiv.classList.remove("answerSelectonCont");
}
// Disables / enables the "Next Number" button.----------------
function playButtonOff(){
  playButton.disabled = true;
  playButton.classList.add("disabledButton");
}
function playButtonOn(){
  playButton.disabled = false;
  playButton.classList.remove("disabledButton");
}
// Generates / updates the numbers. -----------------------------
function generateNumber(){
  if (gameType == "normal"){
    number += 1;
    onScreenNumber.innerHTML = number;
    messageDisplay.textContent = "Click one of the Answer buttons below."
    playButtonOff();
  } else if (gameType == "random") {
    number = Math.floor((Math.random() * 100) + 1);
    onScreenNumber.innerHTML = number;
    messageDisplay.textContent = "Click one of the Answer buttons below."
    playButtonOff();
  }
}
// Starts the game / plays another round. -------------------------------
function startGame(){
    answerButtonsDiv.classList.remove("hide");
    answerButtonsDiv.classList.add("answerSelectonCont");
    playButton.textContent = "Next Number";
    generateNumber();
}
// Evaluates the anwsers. -----------------------------------------------
function gameLogic(){
  if (submitted_answer == "none"){
    if ( (number%3 != 0) && (number%5 != 0) ) {
      messageDisplay.textContent = `Correct! The number ${number} can't be equally divided by 3 or 5! Click "Next Number" to go again!`;
      playButtonOn();
      hideSubmitAnswerButtons();
    } else {
      messageDisplay.textContent = `Sorry, try that one again!`;
    }

  } else if (submitted_answer == "fizz"){
      if ( (number%3 == 0) && (number%5 != 0) ) {
        messageDisplay.textContent = `Correct! The number ${number} can be equally  divided by 3, but not 5! Click "Next Number" to go again!`;
        playButtonOn();
        hideSubmitAnswerButtons();
      } else {
        messageDisplay.textContent = `Sorry, try that one again!`;
      }

  } else if (submitted_answer == "buzz"){
      if ( (number%3 != 0) && (number%5 == 0) ) {
        messageDisplay.textContent = `Correct! The number ${number} can be equally  divided by 5, but not 3! Click "Next Number" to go again!`;
        playButtonOn();
        hideSubmitAnswerButtons();
      } else {
        messageDisplay.textContent = `Sorry, try that one again!`;
      }

  } else if (submitted_answer == "fizz_buzz"){
      if ( (number%3 == 0) && (number%5 == 0) ) {
        messageDisplay.textContent = `Correct! The number ${number} can be equally  divided by 3 and 5! Click "Next Number" to go again!`;
        playButtonOn();
        hideSubmitAnswerButtons();
      } else {
        messageDisplay.textContent = `Sorry, try that one again!`;
      }
  }
}

// Resets the game. --------------------------------------------------
resetButton.addEventListener("click", resetGame);

function resetGame(){
  gameType = "";
  number = 0;
  submitted_answer = "";

  gameSelectionDiv.classList.remove("hide");
  messageDisplay.classList.add("hide");
  messageDisplay.textContent = "";
  numberDisplay.classList.add("hide");
  onScreenNumber.textContent = "_";

  answerButtonsDiv.classList.add("hide");
  answerButtonsDiv.classList.remove("choiceSelectonCont");

  playButtonOn();
  playButton.classList.add("hide");
  playButton.textContent = "Start";
  resetButton.classList.add("hide");
}
