/*
Problem
=======
given an integer, return the string value

input - numerical value
output - string

rules:
  -explicit req:
    -cannot use toString, String, or implicit coersion with + operator
    -return a string

  -implicit req:

Examples/test cases
===================
below

Data structure
==============
object with key value pairs int: str

Algorithm
=========
-create a new array `digitsOfInt` to hold the digits of the number
-create an empty string `str` to hold the converted number
-take the last digit of the passed `int`, and push it to the beginning of `digitsOfInt`
  -int % 10 = last digit
-remove the digit that was just put into `digitsOfInt` from the `int`
  -parseInt(num / 10)
-repeat with the `int` until all digits of the `int` are in `digitsOfInt`
  -stop when `int` is 0
  -

-iterate over `digitsOfInt`, and for each element, find the value in DIGITS data structure
  -find the key that has the value equal to the digit
  -loop through the DIGITS object, if the value is equal to the digit
  -then concat that key to `str`
-concat the key to `str`
-return the value of `str`
*/
const DIGITS = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
}

function integerDigitsToArray(int) {
  let digitsOfInt = [];

  do {
    let lastDigit = int % 10;
    digitsOfInt.unshift(lastDigit);
    int = parseInt(int / 10);
  } while (int > 0)
  
  return digitsOfInt;
}

function integerToString(int) {
  let arrayOfDigits = integerDigitsToArray(int);
  let convertedStr = "";

  arrayOfDigits.forEach(digit => {
    for (let property in DIGITS) {
      if (DIGITS[property] === digit) {
        convertedStr += property; 
      }
    }
  })
  console.log(convertedStr);
}

integerToString(4321);        // "4321"
integerToString(0);           // "0"
integerToString(5000);        // "5000"
integerToString(1234567890);  // "1234567890"