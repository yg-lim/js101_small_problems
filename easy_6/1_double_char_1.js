function repeater(string) {
  let repeatedString = '';

  for (let idx = 0; idx < string.length; idx += 1) {
    repeatedString += string[idx].repeat(2);
  }
  console.log(repeatedString);
  return repeatedString;
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""