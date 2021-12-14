const makeCase = function(input, styles) {
  // Put your solution here
  let finalString = "";
  if (Array.isArray(styles)) {
    for (style of styles) {
      finalString = convertOneStyle(input, style);
    }
  }
  else {
    finalString = convertOneStyle(input, styles);
  }
  return finalString;
}

const convertOneStyle = function(input, style) {
  let result = "";
  if (style === "camel" || style === "pascal") {
    result = camelOrPascal(input, style);
  }
  if (style === "snake" || style === "kebab") {
    result = snakeOrKebab(input, style);
  }
  if (style === "title") {
    result = title(input);
  }
  if (style === "vowel" || style === "consonant") {
    result = vowelOrConsonant(input, style);
  }
  if (style === "lower" || style === "upper") {
    result = lowerOrUpper(input, style);
  }
  return result;
}

const camelOrPascal = function(input, style) {
  let result = "";
  let upper = false;
  let i=0;
  while (i < input.length) {
    // only Uppercase first letter in pascal style
    if (i === 0 && style === "pascal") {
      result += input[0].toUpperCase();
      i++;
      continue;
    }
    // only Uppercase if the next character is not a space again (more than 1 spaces)
    if ((upper === true) && (input[i] !== " ")) {
      result += input[i].toUpperCase();
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
    result += input[i];
    i++;
  }  
  return result;
};

const snakeOrKebab = function(input, style) {
  let connectingChar;
  let result = "";
  (style === "snake") ? connectingChar = "_" : connectingChar = "-";
  for (let i = 0; i < input.length; i++) {
    (input[i] === " ") ? result += connectingChar : result += input[i];
  }
  return result;
};

const title = function(input) {
  let result = "";
  for (let i = 0; i < input.length; i++) {
    (i === 0 || input[i-1] === " ") ? result += input[i].toUpperCase() : result += input[i];
  }
  return result;
};

const vowelOrConsonant = function(input, style) {
  let result = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "a" || input[i] === "o" || input[i] === "u" || input[i] === "i" || input[i] === "e") {
      (style === "vowel") ? result += input[i].toUpperCase() : result += input[i].toLowerCase();
    }
    else {
      (style === "vowel") ? result += input[i].toLowerCase() : result += input[i].toUpperCase();
    }   
  }
  return result;
};

const lowerOrUpper = function(input, style) {
  let result = "";
  for (let i = 0; i < input.length; i++) {
    (style === "upper") ? result += input[i].toUpperCase() : result += input[i].toLowerCase();
  }
  return result;
};



console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));

// thisIsAString
// ThisIsAString
// this_is_a_string
// this-is-a-string
// This Is A String
// thIs Is A strIng
// THiS iS a STRiNG
// THIS_IS_A_STRING

// camel, pascal, snake, kebab, title
// vowel, consonant
// upper, lower