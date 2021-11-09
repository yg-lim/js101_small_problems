/*
Problem
=======
-Given an array of numbers that always has at least 1 element,
write a function that returns the sum of the sums of each leading
subsequence in the array.

Input: Array of numbers
Output: Number (sum of the sums)

Explicit Requirements:
-Array will always have at least one number
-Sum of sums demonstrated below

Implicit Requirements:
-Single item array will return the first element

Examples
========

Data structure
==============
[3].reduce() +
[3, 5].reduce() +
[3, 5, 2].reduce()

[3, 5, 2].map((elem, idx) => {
  arr.slice(0, idx + 2).reduce((accum, val) => accum + val);
});
*/
let addElements = (accum, val) => accum + val;

function sums(arr) {
  return arr.map((_, idx) => {
    return arr.slice(0, idx + 1).reduce(addElements);
  });
}

function sumOfSums(arr) {
  let sumOfSums = sums(arr).reduce(addElements);
  return sumOfSums;
}
/*
[2, 5, 3] (0)
[5, 3] (1)
[3] (2)
*/

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35