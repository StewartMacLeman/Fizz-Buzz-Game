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
