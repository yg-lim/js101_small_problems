/*
Problem
=======
Given a string, write a function that returns true if the passed in argument
is a palindrome, false otherwise. 

Input: String
Output: Boolean

Explicit rules:
  -A palindrome is a string that reads the same forwards and backwards
  -Case and all characters matter

Implicit rules:
  -Non empty string input
  -Accepts strings only, numbers are strings

Examples
========
Below

Data structure
==============
N/A

Algorithm
=========

isPalindrome
============
-Save the reversed version of the input `str` to a variable, `reversedStr`
-If `reversedStr` === `str`
  -Return true
  -Else
    -Return false

Reverse string
==============
-Convert the input `str` into an array without any added/removed characters
and save it to `arr`
-Reverse `arr`
-Convert `arr` into a string without any added/removed characters
and save it to `reversedStr`
*/

function reverseString (str) {
  let reversedStr = str.split('')
                       .reverse()
                       .join('');
  return reversedStr;
}

function isPalindrome(str) {
  console.log(reverseString(str) === str ? true : false);
}

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true