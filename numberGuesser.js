let prompt = require("prompt-sync")();

const getRandomInt = function(max) {
  return Math.floor(Math.random() * max);
}

const duplicateNumber = function(numArray, num) {
  for (let i = 0; i < numArray.length; i++) {
    if (num === numArray[i]) {
      return true;
    } 
  }
  return false;
}

let correct = false;
let randomNumber = getRandomInt(100);
let attempts = 0;
let alreadyGuessedNumbers = [];
while (!correct) {
  attempts += 1;
  let answer = parseInt(prompt("Guess a number: "));
  if (!Number.isInteger(answer)) {
    console.log("Not a number! Try again!");
  }
  else if (duplicateNumber(alreadyGuessedNumbers, answer)){
     console.log("Already Guessed!");
  }
  else if (answer > randomNumber) {
    alreadyGuessedNumbers.push(answer);
    console.log("Too High!");
  }
  else if (answer < randomNumber) {
    alreadyGuessedNumbers.push(answer);
    console.log("Too Low!");
  }
  else if (answer == randomNumber) {
    correct = true;
    console.log("You got it! You took " + attempts + " attempts!");
    break;
  }
}