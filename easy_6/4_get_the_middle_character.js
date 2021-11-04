/*
Problem
=======
Given a non-empty string argument, return the middle character(s)
of the string. If the string has an odd length, then return one
character. Otherwise, return two.

E, below
Data structure
==============
"hello" length = 5
floor(length / 2) = 2

"hellow" length = 6
midpoint = 6/2
slice(midpoint - 1, midpoint + 1)
Algorithm
=========
-Find the length of the string argument and set it to `strLength`
-Set the midpoint to strLength / 2, rounded down
If `strLength` is even, return the two middle chars (string[midpoint])
-Else, return middle char (string.slice(midpoint - 1, midpoint + 1))
*/
function centerOf(string) {
  let strLength = string.length;
  let midpoint = Math.floor(strLength / 2);

  if (strLength % 2 !== 0) {
    return string[midpoint];
  } else {
    return string.slice(midpoint - 1, midpoint + 1);
  }
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"