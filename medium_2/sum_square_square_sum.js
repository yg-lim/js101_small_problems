/*
Problem
=======
Input:
-Integer

Output:
-Integer

Rules
-Find the difference of the consecutive digits' sums' square
and each consecutive digits squared sum
-1 will return 0

Examples
========
Below

Data structure
==============
n/a

Algorithm
=========
return the sumSquared - sumOfSquared

sumSquared
==========
let sum = 0;

for (let idx = integer; idx >= 1; idx -= 1) {
  sum += idx;
}

return sum**2;

sumOfSquared
============
if (integer === 1) return 1

return sumOfSquared(integer) + sumOFSquared(integer - 1);

*/

function sumSquared(integer) {
  let sum = 0;

  for (let idx = integer; idx >= 1; idx -= 1) {
    sum += idx;
  }
  return sum ** 2;
}

function sumOfSquared(integer) {
  let sum = 0;

  for (let idx = integer; idx >= 1; idx -= 1) {
    sum += idx ** 2;
  }
  return sum;
}

function sumSquareDifference(integer) {
  return sumSquared(integer) - sumOfSquared(integer);
}

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150