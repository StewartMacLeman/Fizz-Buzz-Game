"use strict";
// Global variables for the drop-down rules section. -------------------
let showHowToButton = document.getElementById("howToShow");
let hideHowToButton = document.getElementById("howToHide");
let howToDiv = document.getElementById("howToCont");

// Functions to show and remove the rules div. --------------------------
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

let gameSelectionDiv = document.getElementById("gameSelcCon");
let normalGameButton = document.getElementById("normBut");
let randomGameButton = document.getElementById("randBut");
let gameType = "";

let resetButton = document.getElementById("reset");

// Game selection functions. -----------------------------
normalGameButton.addEventListener("click", selectGame);
randomGameButton.addEventListener("click", selectGame);

function selectGame(e){
  let gameValue = e.target.value;
  gameType = gameValue;
  console.log("The game type is: " + gameType);

    gameSelectionDiv.classList.add("hide");
    messageDisplay.classList.remove("hide");
    numberDisplay.classList.remove("hide");
    resetButton.classList.remove("hide");
}

// Reset the game function. ----------------------------
resetButton.addEventListener("click", resetGame);

function resetGame(){
  gameType = "";

  gameSelectionDiv.classList.remove("hide");
  messageDisplay.classList.add("hide");
  numberDisplay.classList.add("hide");
  resetButton.classList.add("hide");

}
