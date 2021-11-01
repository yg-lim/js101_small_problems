/*
Problem
=======
Given a string, return true if it reads the same backwards as forwards,
false otherwise. Case does not matter and non-alphanumeric chars should
be ignored.

Input: String
Output: Boolean

Explicit Rules:
  -A palindrome is a string read the same forwards as backwards
  -Only alphanumeric characters matter, others should be ignored (including spaces)
  -Case does not matter

-Implicit Rules:

Examples
========
Below

Data structure
==============
-From mixed character string to alphanumeric string
  -Array to store lowercase alphanumeric characters

Algorithm
=========
-Given the string, save the lowercase version to a variable `lowercaseStr`
-Set ALPHANUMERIC_CHARACTERS to array with lowercase alphanumeric characters
-Filter the characters in `lowercaseStr` that are not alphanumeric characters,
and save it to a new variable, `alphanumericStr`
-Save the reversed version of `alphanumericStr` to `reversedStr`
-If `alphanumericStr` and `reversedStr` are the same,
  -Return true
  Else
    -Return false


*/
function reverseString(string) {
  let reversedStr = string.split('')
                       .reverse()
                       .join('');
  return reversedStr;
}

function filterNonAlphaNumericChars(string) {
  const ALPHANUMERIC_CHARACTERS = Array.from("abcdefghijklmnopqrstuvwxyz1234567890");

  return string.split('').filter(char => {
    return ALPHANUMERIC_CHARACTERS.includes(char);
  }).join('');
}

function isRealPalindrome(string) {
  let lowercaseString = string.toLowerCase();

  let alphanumericStr = filterNonAlphaNumericChars(lowercaseString);

  return alphanumericStr === reverseString(alphanumericStr);
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false