const urlEncode = function(text) {
  text = text.trim();
  let modifiedText = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      modifiedText = modifiedText + "%20";
    }
    else {
      modifiedText = modifiedText + text[i];
    }
  }
  return modifiedText;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));