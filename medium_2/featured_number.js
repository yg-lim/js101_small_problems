/*
Problem
=======
input: integer
output: integer

rules:
-a featured number is:
  -an odd number
  -is a multiple of 7
  -all of its digits occuring only once
-return next featured number that is > given integer
-if there is no next featured number, return error
-greatest featured number is 9876543201

Examples
========
Below

Data structure
==============
const MAX_FEATURED_NUMBER = 9876543201;

Algorithm
=========
-const STARTING_FEATURED_NUMBER = 7
-Given the integer
-Set `number` to STARTING_FEATURED_NUMBER
-While true
  -if `number` is featuredNumber && greater than `integer`
    -break
  -`number` += 7
-Return `number`

isFeaturedNumber
================
-if number isOdd, allDigitsOccurOnce
  -return true
-else
  -return false

allDigitsOccurOnce
==================
P
=
input: integer
output: boolean

-if a single digit occurs more than once, return false
-if digits only occur once, return true

E
=
allDigitsOccurOnce(9876543201) // true
allDigitsOccurOnce(21) // true
allDigitsOccurOnce(1029) // true
allDigitsOccurOnce(1023547) // true
allDigitsOccurOnce(77) false

D
=
arrOfDigits = Array.from(number);
digit = arrOfDigits.pop();
arrOfDigits.includes(digit);

A
=
-Coerce the integer into an array and set it to `arrOfDigits`
-Set `digit` to arrOfDigits.pop();
-If arrOfDigits has digit
  -Return false
-Return true

*/
function allDigitsOccurOnce(integer) {
  let arrOfDigits = String(integer).split('');

  while (arrOfDigits.length >= 1) {
    let digit = arrOfDigits.shift();

    if (arrOfDigits.includes(digit)) {
      return false;
    }
  }
  return true;
}

function isOdd(integer) {
  return integer % 2 !== 0;
}

function isFeaturedNumber(integer) {
  return isOdd(integer) && allDigitsOccurOnce(integer);
}

function featured(integer) {
  const STARTING_FEATURED_NUMBER = 7;
  const MAX_FEATURED_NUMBER = 9876543201;

  let number = STARTING_FEATURED_NUMBER;

  while (number <= integer) {
    number += 7;
  }

  while (!isFeaturedNumber(number)) {
    number += 7;
    if (number > MAX_FEATURED_NUMBER) return 'There is no possible number that fulfills those requirements.';
  }
  return number;
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."