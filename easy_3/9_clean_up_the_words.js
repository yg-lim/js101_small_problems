/*
Problem
=======
Given a string that consists of some words and non-alphabetic characters,
return a new string with all those non-alphabetic characters replaced by
spaces. If one or more non-alphabetic characters occur in a row, it should
only be replaced by a single space.

Input: String
Output: New string

Explicit req:
  -Output new string, replace non-alpha chars with spaces
  -If there's multiple non-alpha cars consecutively, replace with single space

Implicit req:
  -Case doesn't seem to matter
  -Spaces are allowed at the start and end

Examples
========
Below

Data structure
==============
const ALPHABETIC_CHARS to hold alphabetic chars
flag toggle to represent when consecutive characters have ended

Algorithm
=========
-Set `ALPHABETIC_CHARS` to array of lowercase alphabets
-Set `cleanedString` to empty string
-Set `isConsecutiveSpecialChar` to false
-Iterate through the string:
  -If it's a special char && the next char is a special char,
    -Set flag to true
  -If it's non-alphabetic && next char is alphabetic,
    -Set flag to false
    -Concat a space to the end of `cleanedString`
  -If it's a alphabetic char or space, concat the char to `cleanedString`


*/

function cleanUp(str) {
  const ALPHABETIC_CHARS = Array.from('abcdefghijklmnopqrstuvwxyz');
  let cleanedString = '';

  for (let i = 0; i < str.length; i += 1) {
    if (ALPHABETIC_CHARS.includes(str[i])) {
      cleanedString += str[i];
    }
    if (!ALPHABETIC_CHARS.includes(str[i])
    && ALPHABETIC_CHARS.includes(str[i + 1])) {
      cleanedString += ' ';
    }
  }
  console.log(cleanedString);
}

cleanUp("---what's my +*& line?");    // " what s my line "