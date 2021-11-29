/*
Problem
=======
Write a function that rotates the last n amount of digits of a number argument.
Rotation means to move the first of the digits from the left to the end, and
then shift the remaining digits to the left.

Input: Number, number of digits
Output: New number

Rules:
-Rotation means to move the first of the digits from the left to the very end,
and then shift the remaining digits to the left
-Rotate only the last n amount of digits, provided as the 2nd argument
-Keep the remaining numbers excluded from n amount of digits the same

Examples
========
below

Data structure
==============
735291, 1 => 735291
735291, 2 => 735219
7, 3, 5, 2, 9, 1
length: 6
number of elements: 5
elements that moved: idx 4, 5
number of digits: 2

735291, 3 => 735912
[7, 3, 5, 2, 9, 1]
 0, 1, 2, 3, 4, 5
length: 6
number of elements: 5
elements that moved: idx 3, 4, 5
number of digits: 3

arr.slice(0–(6-3))
    0, 1, 2

plus

arr.slice((6-3) + 1) + arr[6-3]

735291, 4 => 732915
[7, 3, 5, 2, 9, 1]
 0, 1, 2, 3, 4, 5
length: 6
number of elements: 5
elements that moved: idx 2, 3, 4, 5
number of digits: 4

idxOfRotatedDigit

Algorithm
=========
-Make an array of string integers with `number`
-Set `idxOfRotatedDigit` to length - `numOfDigits`
-Set `staticNumbers` to arr.slice(0, `idxOfRotatedDigit`)
-Set `rotatedNumbers` to arr.slice(idxOfRotatedDigit + 1)
  .concat(arr[idxOfRotatedDigit])
-Combine `staticNumbers` and `rotatedNumbers` into a single array
-Join the elements of the string into a single string
-Convert the string into a number
-Return the number
*/

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

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917
