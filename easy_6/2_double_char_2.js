function doubleConsonants(string) {
  const CONSONANTS = Array.from("bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ");
  let doubledString = '';

  for (let idx = 0; idx < string.length; idx += 1) {
    if (CONSONANTS.includes(string[idx])) {
      doubledString += string[idx].repeat(2);
    } else {
      doubledString += string[idx];
    }
  }
  console.log(doubledString);
  return doubledString;
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""