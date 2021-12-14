const squareCode = function(message) {
  // Put your solution here
  let trimmedMessage = replaceAllSpaces(message);
  const squareSide = Math.ceil(Math.sqrt(trimmedMessage.length));
  let codedMessage = "";
  for (let i = 0; i < squareSide; i++) {
    if (i !== 0) {
      codedMessage += " ";
    } 
    for (let j = i; j < trimmedMessage.length; j = j + squareSide) {
      codedMessage += trimmedMessage[j];
    }
  }
  return codedMessage;
};

const replaceAllSpaces = function(message) {
  let alteredMessage = "";
  for (let i = 0; i < message.length; i++) {
    if (message[i] !== " ") {
      alteredMessage += message[i];
    }
  }
  return alteredMessage;
}

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));