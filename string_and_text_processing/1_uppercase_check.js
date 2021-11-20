/*
returns true if all characters are uppercase

*/

function isUppercase(inputStr) {
  for (let idx = 0; idx < inputStr.length; idx += 1) {
    if (inputStr[idx] > 'A' && inputStr[idx] < 'z' && inputStr[idx] === inputStr[idx].toLowerCase()) {
      return false;
    }
  }
  return true;
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true