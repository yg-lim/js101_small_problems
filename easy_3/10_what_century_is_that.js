/*
Problem
=======
Given an integer that represents the year, return a string of what century
it belongs to. The string should end in the corresponding 'th', 'rd', 'st',
etc. depending on the number preceding it.

Input: Integer
Output: String

Explicit req:
  -New centuries begin in years that end in 01
  -Output must be a string for the suffixes

Implicit req:
  -Function takes integers greater than 0

Examples
========
Below

Data structure
==============
Object for suffixes:
const SUFFIXES = {
  0: "th",
  1: "st",
  2: "nd",
  3: "rd",
  4: "th",
  5: "th",
  6: "th",
  7: "th",
  8: "th",
  9: "th",
}

Algorithm
=========
-Given the integer, divide it by 100 and round up to find which century
it is. Save as String to `century` variable
-If the value of last two chars are between 11 and 19 inclusive,
  -

*/

function century(int) {
  const SUFFIXES = {
    0: "th",
    1: "st",
    2: "nd",
    3: "rd",
    4: "th",
    5: "th",
    6: "th",
    7: "th",
    8: "th",
    9: "th",
  };

  let century = String(Math.ceil(int / 100));

  if (century.slice(century.length - 2) >= 11
  && century.slice(century.length - 2) <= 19) {
    century += "th";
  } else {
    for (let digits in SUFFIXES) {
      if (century[century.length - 1] === digits) {
        century += SUFFIXES[digits];
      }
    }
  }
  console.log(century);
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"