/*
Write a function that takes a string of digits and returns
the appropriate number as an integer. You may not use any of the methods mentioned above.

problem
=======
Given a string of numbers, return the appropriate number as an integer
without using Number() or parseInt() methods.

Input:
- string of numeric values with no special characters

output:
- number(s)

rules: 
  -explicit req:
    -without using Number() or parseInt() or String()

data structure/algo
===================
iterate through the string. find the corresponding to the digit in the data.
then, multiply the digit by the length of the index to the end of the number
add that to the number
*/

function stringToInteger(str) {
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
  
  let num = 0;
  
  str.split('').forEach((strNumber, index) => {
    placeOfDigit = str.substring(index).length - 1;

    num += (DIGITS[strNumber] * (10 ** placeOfDigit));
  })
  return num;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
