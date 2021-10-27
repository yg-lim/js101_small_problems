/*
problem
=======
-given an input of a positive integer, return a string
with the length of that integer that has alternating 1 and 0's

input:
-integer

output:
-new string

rules:
-explicit req:
  -string with alternating 1 and 0

-implicit req:
  -accepts positive integers

example
=======
-below

data structure
==============
n/a

algorithm
=========
-create an empty string variable `str`
-while the index is less than the passed in `length` integer
  -if the index is an even number (including 0), then add a 1 to `str`
  -else, add `0` to str
-return `str

SET str = ''
SET index = 0
WHILE index < length
  IF index is even
    add '1' to str
  ELSE
    add '0' to str
PRINT str
*/

function stringy (length) {
  let str = '';

  for (let i = 0; i < length; i += 1) {
    i % 2 === 0 ? str += '1' : str += '0';
  }
  console.log(str);
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"