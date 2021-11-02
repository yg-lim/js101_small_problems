/*
Problem
=======
Given a string consisting of zero or more words ('word' consisting of any
sequence of non-space characters), return an object that shows the number of
words of different sizes ('size' = how many characters in the word).

Input: String
Output: Object

Explicit Rules:
  -Words consist of any sequence of characters separated by spaces
  (including non-alpha such as special chars + numbers)
  -Size refers to the length of the word
  
Implicit Rules:
  -Empty string will return an empty object

Examples
========
Below

Data Structure
==============
{ "3": 1, "4": 1, "5": 1, "6": 1 }
"Length" count

Algorithm
=========

removeNonAlphabeticChars
========================
-Create a constant array of lowercase alphabetic characters from alphabet
string and save it to `ALPHABETIC_CHARS`
-Split the given string (lowercased) into an array, separated by spaces to
get each word, and save it to `wordsArray`
-Create an empty array variable `alphabeticWordsArray`
-Iterate through each `word` in `wordsArray`,
  -Split the word into a second level array of characters, saved to `chars`
  -Push the joined result of alphabetic filtered letters to `alphabeticWordsArray`
-Combine `alphabeticWordsArray` into a single string separated by spaces
and save it to a variable `alphabeticWords`
-Print `alphabeticWords`

-Create an empty object to hold the counts, `letterCounts`
-Iterate through the array:
  -For each word, find the length of the word
  -If `letterCounts` has the String(length) as a key
    -Add 1 to the value
    -Else
      -Set the key to 0
-Print letterCounts
*/
function removeNonAlphabeticChars(string) {
  const ALPHABETIC_CHARS = Array.from("abcdefghijklmnopqrstuvwxyz");
  let wordsArray = string.toLowerCase().split(' ');
  let alphabeticWordsArray = [];

  wordsArray.forEach(word => {
    let chars = word.split('');

    alphabeticWordsArray.push(chars.filter(char => ALPHABETIC_CHARS.includes(char))
                                   .join(''));
  });
  return alphabeticWordsArray;
}

function wordSizes(string) {
  const letterCounts = {};
  if (string.length === 0) {
    return letterCounts;
  }

  let wordsArray = removeNonAlphabeticChars(string);

  wordsArray.forEach(word => {
    let key = String(word.length);

    if (letterCounts.hasOwnProperty(key)) {
      letterCounts[key] += 1;
    } else {
      letterCounts[key] = 1;
    }
  });
  return letterCounts;
}

// removeNonAlphabeticChars('Four score and seven.');
// removeNonAlphabeticChars('Hey diddle diddle, the cat and the fiddle!');
// removeNonAlphabeticChars("What's up doc?");
// removeNonAlphabeticChars('');

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}