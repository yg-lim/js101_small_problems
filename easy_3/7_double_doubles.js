/*
Problem
=======
-Given an integer, determine whether or not it is a "double" number,
an even length number whose left-side digits are exactly the same as
its right digits.
-If it's a double number, then return that number,
otherwise, return the integer multiplied by 2.

Input: Integer
Output: Integer or Integer * 2

Explicit req:
  -"Double" numbers must be even length
  -"Double" numbers left side must match right side
  -If a number is a "double", then return it
  -If it's not a "double", then return the integer * 2

Implicit req:
  -N/A
  -All integers with less than 2 digits are non-doubles
  -Negative integers are not inputs

Examples
========
Below

Data structure
==============
-Function to check if a number is a "double"
-Function return a double or number * 2

Algorithm
=========
Return f'n:
  -Given an integer into the function
  -If the number is a double
    Return the number
  -Else
    Return the number *2

isADouble f'n:
  -If the length of the String(number) is even,
    -Save the left side of the string to a variable
    -Save the right side of the string to a variable
    -If the left and right sides match
      -Return true
    -Else
      -Return false (ternary)
  -Else
    -Return false
*/

function isADouble(int) {
  let stringInt = String(int);

  if (stringInt.length % 2 === 0) {
    let leftSide = stringInt.slice(0, stringInt.length / 2);
    let rightSide = stringInt.slice(stringInt.length / 2);

    return leftSide === rightSide ? true : false;
  } else {
    return false;
  }
}

function twice(int) {
  console.log(isADouble(int) ? int : int * 2);
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676