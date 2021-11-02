/*
Problem
=======
Given a string of words (word being alphabetic characters separated by spaces),
write a function that swaps the first and last letter of each word. Every word
contains at least one letter, and the string will always contain at least one
word. Each string will contain only words and spaces, and there are no leading,
trailing, or repeated spaces.

Input: String
Output: New string

Explicit Rules:
  -Word: Alphabetic characters separated by spaces.
  -Every word will contain at least one letter
  -String will always contain at least one word.
  -String will contain only words and spaces with no leading/trailing/repeated
  spaces.

Implicit Rules:
  -Single character input results in the same character output.

Examples
========
Below

Data Structure
==============
a = Wonderful
b = londerfuW

b[0] = a[a.length - 1]
b[b.length - 1] = a[0]

Original string (a) -> Split into array
Copy string (b) -> Split into array -> Swap letters

Algorithm
=========
-Given the string, split it into an array, save it to `originalArray`
-Create an empty array `swappedArray`

Iterate through `originalArray`,
-For each `word` in `originalArray`
  -Create an empty string `swappedWord`
  -Take the last letter of the `word`, and add it to `swappedWord`
  -Then take the remaining letters, except for the last letter, and add it
  to `swappedWord`
  -Lastly, take the first letter of the word, and add it to `swappedWord`
  -Push `swappedWord` to the end of `swappedArray`

-Combine the elements in `swappedArray` into a string separated by spaces,
saving it to `swappedString`
-Print `swappedString`
*/
function swap(string) {
  const originalArray = string.split(' ');
  const swappedArray = [];

  for (let i = 0; i < originalArray.length; i += 1) {
    if (originalArray[i].length === 1) {
      swappedArray.push(originalArray[i]);
    } else {
      let swappedWord = '';

      swappedWord += originalArray[i][originalArray[i].length - 1];
      swappedWord += originalArray[i].slice(1, originalArray[i].length - 1);
      swappedWord += originalArray[i][0];

      swappedArray.push(swappedWord);
    }
  }
  let swappedString = swappedArray.join(' ');
  return swappedString;
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"