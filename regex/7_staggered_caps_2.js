/* eslint-disable max-lines-per-function */
function staggeredCase(str) {
  /*
  create result string ''
  create a flag, capitalizeLetter, set to true
  iterate through the string
  if current item is a letter and capitalizeLetter is true,
    result string += current item capitalized
    capitalizeLetter flag set to false
  else
    result string += current item
    capitalizeLetter flag set to true
  */

  let result = '';
  let capitalizeLetter = true;

  for (let idx = 0; idx < str.length; idx += 1) {
    let currentChar = str[idx];

    if (currentChar.match(/[a-z]/i)) {
      if (capitalizeLetter) {
        result += currentChar.toUpperCase();
        capitalizeLetter = !capitalizeLetter;
      } else {
        result += currentChar.toLowerCase();
        capitalizeLetter = !capitalizeLetter;
      }
    } else {
      result += currentChar;
    }
  }
  return result;
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);