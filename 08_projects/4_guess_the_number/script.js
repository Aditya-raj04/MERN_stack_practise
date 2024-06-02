const randomNumber = parseInt(Math.random()*10 + 1);

const submit = document.querySelector("#subt");
const userInput =document.querySelector("#guessField");
const guessSlot =document.querySelector(".guesses");
const remaining =document.querySelector("lastResult");
const lowOrHi =document.querySelector("lowOrHi");
const startOver =document.querySelector("resultParas");

const p =document.createElement('p');

let preGuess =  [];
let numGuess = 1;

let playGame =  true;

if(playGame){
submit.addEventListener("click", (e) =>{
e.preventDefault()
});
}

function validateGuess(guess){
//
}

function checkGuess(guess){
  //
}

function displayGuess(guess){
//
}

function displayMessage(Message){
//
}

function newGame(){
//
}

function endGame(){
  //
}






