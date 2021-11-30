/*
Problem
=======
Input: String with alpha and numeric
Output: New string with alpha changed to corresponding numeric

Rules:
- Return a new string with the every occurence of a 'number word' replaced
by the number itself

Examples
========
Below

Data structure
==============
{
  zero: '0',
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
}

Algorithm
=========
-Split the string into separate arrays
*/

wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."