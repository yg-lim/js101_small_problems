/*
Problem
=======
Given an array of numbers, return an array with the same number of elements,
but with each element's value being the running total from the original array.

Input: Array of numbers
Output: New array of numbers

Explicit Rules:
  -Running total means, the total so far from the array, dependent on index

Implicit Rules:
  -Single item array and empty array returns the same input as output

Examples
========
Below

Data Structure
==============
a = [2, 5, 13]

b = [2,    7,             20]
     a[0]  b[0] + a[1]    b[1] + a[2]
     a[0]  a[0] + a[1]    a[0] + a[1] + a[2]

b[index] = a[index] + a[index - 1]

if index === 0, return a[0]

b[1] = a[0] + a[1]
b[2] = a[2] + a[1] + a[0]

a = [14, 11, 7, 15, 20]

b = [14,   25,          32,           47,           67]
     a[0]  b[0] + a[1]  b[1] + a[2]   b[2] + a[3]   b[3] + a[4]

Two options:
A) Recursive, b[index] = a[index] + a[index - 1]
B) Dependent on b[index] = b[index - 1] + a[index]

B[0] = A[0]
B[index] = B[index - 1] + A[index]

Algorithm
=========
-Given the array of numbers `array`
-Create a new empty array, `arrayWithRunningTotals`
-Set arrayWithRunningTotals[0] to array[0]
-Set index to 1
-While the index is less than the length of `array`
  -arrayWithRunningTotals[index] = arrayWithRunningTotals[index - 1] + array[index]
  -index += 1
-Print arrayWithRunningTotals
*/

function runningTotal(array) {
  const arrayWithRunningTotals = [];

  for (let i = 0; i < array.length; i += 1) {
    if (i === 0) {
      arrayWithRunningTotals[0] = array[0];
    } else {
      arrayWithRunningTotals[i] = arrayWithRunningTotals[i - 1] + array[i];
    }
  }
  console.log(arrayWithRunningTotals);
}

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []