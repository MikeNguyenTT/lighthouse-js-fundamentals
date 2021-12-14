function loopyLighthouse(range, multiples, words) {
  for (let i = range[0]; i <= range[1]; i++) {
    let printing = i;
    if (i % multiples[0] === 0 ) {
         printing = words[0];
    }
    if (i % multiples[1] === 0 ) {
      printing === words[0] ? printing += words[1] : printing = words[1];
    }
    console.log(printing);
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);