const multiplicationTable = function(maxValue) {
  let returnString = "";
  for (let i = 1; i <= maxValue; i++) {
    for (let j = 1; j <= maxValue; j++) {
      returnString += i*j + " ";
      if (j === maxValue) {
        returnString += "\n";
      }
    }
  }
  return returnString;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));