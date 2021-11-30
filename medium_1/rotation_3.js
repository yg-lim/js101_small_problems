function rotateRightmostDigits(number, numOfDigits) {
  let digits = String(number).split('');

  let idxOfRotatedDigit = digits.length - numOfDigits;
  let staticNumbers = digits.slice(0, idxOfRotatedDigit);
  let rotatedNumbers = digits
    .slice(idxOfRotatedDigit + 1)
    .concat(digits[idxOfRotatedDigit]);

  let result = staticNumbers.concat(rotatedNumbers);

  return Number(result.join(''));
}

function maxRotation(number) {
  let numOfDigits = String(number).length;

  for (numOfDigits; numOfDigits >= 2; numOfDigits -= 1) {
    number = rotateRightmostDigits(number, numOfDigits);
  }

  return number;
}

/*
-number = rotateRightMostDigits(number, 6)
-number = rotateRightMostDigits(number, 5)
-number = rotateRightMostDigits(number, 4)
-number = rotateRightMostDigits(number, 3)
-number = rotateRightMostDigits(number, 2)

return number
*/

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845

/*
Problem
=======
735291 rotate 6 digits => 352917 rotate 5 digits => 329175 rotate 4 digits =>
321759 rotate 3 digits => 321597 rotate 2 digits => 321579
*/