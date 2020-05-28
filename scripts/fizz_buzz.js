"use strict";

let num_display = document.querySelector("#num_display");

let none_btn = document.querySelector("#none_btn");
let fizz_btn = document.querySelector("#fizz_btn");
let buzz_btn = document.querySelector("#buzz_btn");
let fizz_buzz_btn = document.querySelector("#fizz_buzz_btn");

let answer_display = document.querySelector("#answer_display");
let begin_btn = document.querySelector("#begin_btn");
let next_btn = document.querySelector("#next_btn");

let count_start = document.querySelector("#count_start");
let random_start = document.querySelector("#random_start");
let reset_btn = document.querySelector("#reset_btn");

let number = 0;
let submitted_answer = "";
let game_type = "";

// Answer functions -----------------------------------------------------------
none_btn.addEventListener( "click", answer_none );
function answer_none(){
  submitted_answer = "none";
  game();
}

fizz_btn.addEventListener( "click", answer_fizz );
function answer_fizz(){
  submitted_answer = "fizz";
  game();
}

buzz_btn.addEventListener( "click", answer_buzz );
function answer_buzz(){
  submitted_answer = "buzz";
  game();
}

fizz_buzz_btn.addEventListener( "click", answer_fizz_buzz);
function answer_fizz_buzz(){
  submitted_answer = "fizz_buzz";
  game();
}

function answer_btns_on(){
  none_btn.disabled = false;
  fizz_btn.disabled = false;
  buzz_btn.disabled = false;
  fizz_buzz_btn.disabled = false;
}
function answer_btns_off(){
  none_btn.disabled = true;
  fizz_btn.disabled = true;
  buzz_btn.disabled = true;
  fizz_buzz_btn.disabled = true;
}

// Counting numbers game (Start Function) --------------------------------------
count_start.addEventListener( "click", count_game );

function count_game(){
  game_type = "counter";
  answer_display.innerHTML = "Click \"Begin\" to start!";
  begin_btn.disabled = false;
  begin_btn.innerHTML = "Begin!";
  random_start.disabled = true;
}
// Random numbers game (Start Function) ----------------------------------------
random_start.addEventListener( "click", random_game );

function random_game(){
  game_type = "random";
  answer_display.innerHTML = "Click \"Begin\" to start!";
  begin_btn.disabled = false;
  begin_btn.innerHTML = "Begin!";
  count_start.disabled = true;
}
// Next Number Function --------------------------------------------------------
function next_number() {
  begin_btn.style.display = "none";
  next_btn.style.display = "block";
  next_btn.addEventListener( "click", nextNumber );
  function nextNumber(){
    if (game_type == "counter"){
      num_display.innerHTML = number;
      answer_display.innerHTML = "Click one of the answer buttons above.";
      answer_btns_on();
    } else if (game_type == "random") {
      number = Math.floor((Math.random() * 100) + 1);
      num_display.innerHTML = number;
      answer_display.innerHTML = "Click one of the answer buttons above.";
      answer_btns_on();
    }
  }
}
// Game Function --------------------------------------------------------------
begin_btn.addEventListener("click", game);

function game(){

    if ( (game_type == "counter") && (number == 0) && (submitted_answer == "") ){
      number += 1;
      num_display.innerHTML = number;
      answer_display.innerHTML = "Click one of the answer buttons above.";
      answer_btns_on();
      begin_btn.disabled = true;
      begin_btn.innerHTML = "-";
      count_start.disabled = true;

    } else if ( (game_type == "random") && (number == 0) && (submitted_answer == "") ){
      number = Math.floor((Math.random() * 100) + 1);
      num_display.innerHTML = number;
      answer_display.innerHTML = "Click one of the answer buttons above.";
      answer_btns_on();
      begin_btn.disabled = true;
      begin_btn.innerHTML = "-";
      random_start.disabled = true;

    } else if ( (submitted_answer == "none") && (number >= 1 ) && (number%3 != 0)
    && (number%5 != 0) ){
      answer_display.innerHTML = "Correct! The number " + number + " can\'t be equally divided by 3 or 5! Now click \"Next Number\".";
      number +=1;
      answer_btns_off();
      next_number();

    } else if ( (submitted_answer == "none") && (number >= 1 ) && (number%3 == 0)
    && (number%5 != 0) ){
      answer_display.innerHTML = "Sorry! The number " + number + " can be equally divided by 3, but not 5! Now click \"Next Number\".";
      number +=1;
      answer_btns_off();
      next_number();

    } else if ( (submitted_answer == "none") && (number >= 1 ) && (number%3 != 0)
    && (number%5 == 0) ){
      answer_display.innerHTML = "Sorry! The number " + number + " can be equally divided by 5, but not 3! Now click \"Next Number\".";
      number +=1;
      answer_btns_off();
      next_number();

    } else if ( (submitted_answer == "none") && (number >= 1 ) && ((number%3 == 0)
    || (number%5 == 0)) ){
      answer_display.innerHTML = "Sorry! The number " + number + " can be equally divided by 3 and 5! Now click \"Next Number\".";
      number +=1;
      answer_btns_off();
      next_number();

    } else if ( (submitted_answer == "fizz") && (number >= 1 ) && (number%3 == 0)
    && (number%5 != 0) ){
      answer_display.innerHTML = "Correct! The number " + number + " can be equally divided by 3! Now click \"Next Number\".";
      number +=1;
      answer_btns_off();
      next_number();

    } else if ( (submitted_answer == "fizz") && (number >= 1 ) && (number%3 != 0)
    && (number%5 != 0) ){
      answer_display.innerHTML = "Sorry! The number " + number + " can\'t be equally divided by 3! Now click \"Next Number\".";
      number +=1;
      answer_btns_off();
      next_number();

    } else if ( (submitted_answer == "fizz") && (number >= 1 ) && (number%3 != 0)
    && (number%5 == 0) ){
      answer_display.innerHTML = "Sorry! The number " + number + " can\'t be equally divided by 3! Now click \"Next Number\".";
      number +=1;
      answer_btns_off();
      next_number();

    } else if ( (submitted_answer == "fizz") && (number >= 1 ) && ((number%3 == 0)
    || (number%5 == 0)) ){
      answer_display.innerHTML = "Sorry! The number " + number + " can also be equally divided by 5! Now click \"Next Number\".";
      number +=1;
      answer_btns_off();
      next_number();

    } else if ( (submitted_answer == "buzz") && (number >= 1 ) && (number%3 != 0)
    && (number%5 == 0) ){
      answer_display.innerHTML = "Correct! The number " + number + " can be equally divided by 5! Now click \"Next Number\".";
      number +=1;
      answer_btns_off();
      next_number();

    } else if ( (submitted_answer == "buzz") && (number >= 1 ) && (number%3 == 0)
    && (number%5 != 0) ){
      answer_display.innerHTML = "Sorry! The number " + number + " can\'t be equally divided by 5! Now click \"Next Number\".";
      number +=1;
      answer_btns_off();
      next_number();

    } else if ( (submitted_answer == "buzz") && (number >= 1 ) && (number%3 != 0)
    && (number%5 != 0) ){
      answer_display.innerHTML = "Sorry! The number " + number + " can\'t be equally divided by 5! Now click \"Next Number\".";
      number +=1;
      answer_btns_off();
      next_number();

    } else if ( (submitted_answer == "buzz") && (number >= 1 ) && ((number%3 == 0)
    || (number%5 == 0)) ){
      answer_display.innerHTML = "Sorry! The number " + number + " can also be equally divided by 3! Now click \"Next Number\".";
      number +=1;
      answer_btns_off();
      next_number();

    } else if ( (submitted_answer == "fizz_buzz") && (number >= 1 ) && (number%3 == 0)
    && (number%5 == 0) ){
      answer_display.innerHTML = "Correct! The number " + number + " can be equally divided by 3 and 5! Now click \"Next Number\".";
      number +=1;
      answer_btns_off();
      next_number();

    } else if ( (submitted_answer == "fizz_buzz") && (number >= 1 ) && (number%3 == 0)
    && (number%5 != 0) ){
      answer_display.innerHTML = "Sorry! The number " + number + " can\'t be equally divided by 5! Now click \"Next Number\".";
      number +=1;
      answer_btns_off();
      next_number();

    } else if ( (submitted_answer == "fizz_buzz") && (number >= 1 ) && (number%3 != 0)
    && (number%5 == 0) ){
      answer_display.innerHTML = "Sorry! The number " + number + " can\'t be equally divided by 3! Now click \"Next Number\".";
      number +=1;
      answer_btns_off();
      next_number();

    } else if ( (submitted_answer == "fizz_buzz") && (number >= 1 ) && (number%3 != 0)
    && (number%5 != 0) ){
      answer_display.innerHTML = "Sorry! The number " + number + " can\'t be equally divided by 3 or 5! Now click \"Next Number\".";
      number +=1;
      answer_btns_off();
      next_number();
    }
}
// Reset Function---------------------------------------------------------------
reset_btn.addEventListener( "click", reset_game );

function reset_game(){
  num_display.innerHTML = "Number Display!"
  answer_display.innerHTML = "Choose a game type from below!"
  begin_btn.innerHTML = "-";
  number = 0;
  submitted_answer = "";
  game_type = "";
  begin_btn.disabled = true;
  random_start.disabled = false;
  count_start.disabled = false;
  answer_btns_off();
  begin_btn.style.display = "block";
  next_btn.style.display = "none";
}
