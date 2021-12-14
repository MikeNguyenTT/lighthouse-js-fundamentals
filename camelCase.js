const camelCase = function(input) {
  let finalString = "";
  let upper = false;
  let i=0;
  while (i < input.length) {
    // only Uppercase if the next character is not a space again (more than 1 spaces)
    if ((upper === true) && (input[i] !== " ")) {
      finalString += input[i].toUpperCase();
      upper = false;
      i++;
      continue;
    } 
    // skip any space and flag the next char as Uppercase;
    else if (input[i] === " ") {
      upper = true;
      i++;
      continue;
    }
    // add all other char to the string
    finalString += input[i];
    i++;
  }  
  return finalString;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

