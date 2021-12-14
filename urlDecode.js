const urlDecode = function(text) {
  // Put your solution here
  let obj = {};
  let pairs = [];
  let pair = "";
  let i = 0;
  //Break input argument into pairs of key and value
  while (i <= text.length) {
    if (text[i] === "&" || i === text.length) {
      // add the pair to array, reset to start finding new pair
      pairs.push(pair);
      pair = "";
      i++;
      continue;
    }
    if (text[i] === "%" && text[i+1] === "2" & text[i+2] === "0") {
      pair += " ";
      i += 2;
    }  else {
      pair += text[i]; 
    }
    i++;
  }
  
  // add key value pairs to the object
  let keyFlag;
  let keyValuePair;
  for (let i = 0; i< pairs.length; i++) {
    key = "";
    value = "";
    keyFlag = true;
    keyValuePair = pairs[i];
    for (let j = 0; j < keyValuePair.length; j++) {
      if (keyValuePair[j] === "=") {
        keyFlag = false;
        continue;
      } 
      (keyFlag === true) ? key += keyValuePair[j] : value += keyValuePair[j]
    }
    obj [key] = value;
  }
  return obj;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);