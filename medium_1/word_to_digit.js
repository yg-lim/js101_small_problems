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
-Set `wordToAdd` as empty string
-Set `resultString` to empty string
-Iterate through the string,
-If the current char is a letter, then add it to `wordToAdd`
-If the current char is not a letter,
  -Iterate through the data structure,
    -if wordToAdd is a number,
      -add the number to `resultString`
    -else
      -add `wordToAdd` to `resultString`
    -set `wordToAdd` back to an empty string
    -add the current char to `resultString`
*/
const NUMBER_WORDS = [
  'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
];

function wordToDigit(string) {
  let wordToAdd = '';
  let resultString = '';

  for (let idx = 0; idx < string.length; idx += 1) {
    let currentChar = string[idx];

    if ((currentChar >= "a" && currentChar <= "z") ||
      (currentChar >= "A" && currentChar <= "Z")) {
      wordToAdd += currentChar;
    } else {
      resultString += NUMBER_WORDS.includes(wordToAdd) ?
        String(NUMBER_WORDS.indexOf(wordToAdd)) : wordToAdd;

      wordToAdd = '';
      resultString += currentChar;
    }
  }
  return resultString;
}

wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."