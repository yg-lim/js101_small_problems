// PEDAC
/*
problem
=======
Given two values, create a function `xor`
that returns true if only one argument is truthy, 
otherwise returns falase

Input: two values (string, integer, boolean)
output: boolean (true, false)

explicit requirements:
- return true if one argument is truthy
- return false if neither or both are truthy

implicit requirements:
- N/A

examples (test cases)
=====================
number, number
boolean, boolean

data structure/algo
===================
-create a counter for number of truthy values
-if first argument is truthy, add 1 to the counter
-if second argument is truthy, add 1 to the counter
if counter is 1, return true, else, return false
*/

function xor(value1, value2) {
  let numOfTruthyValues = 0;

  if (value1) numOfTruthyValues += 1;

  if (value2) numOfTruthyValues += 1;

  if (numOfTruthyValues === 1) {
    return true;
  } else {
    return false;
  }
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);