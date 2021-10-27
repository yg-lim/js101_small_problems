/*
Algorithm
=========
-create empty `str` to hold the converted `int`
-get the individual digits of the `int`, save it to `digitsOfInt`
-iterate over the array of digits, DIGITS[digitActingAsIndex] = stringOfDigit
-`str` += DIGITS[digitActingAsIndex]
*/
const DIGITS = Array.from("0123456789");

function integerToString(int) {
  let result = '';

  do {
    let remainder = int % 10;
    int = Math.floor(int / 10);

    result = DIGITS[remainder] + result;
  } while (int > 0);

  return result;
}

function signedIntegerToString(int) {
  switch (Math.sign(int)) {
    case -1:
      return '-' + integerToString(-int);
    case 0:
      return integerToString(int);
    case 1:
      return '+' + integerToString(int);
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");