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
-Create an empty object to hold the counts, `letterCounts`
-Split the given string into an array, separated by spaces to get each word
-Iterate through the array:
  -For each word, find the length of the word
  -If `letterCounts` has the String(length) as a key
    -Add 1 to the value
    -Else
      -Set the key to 0
-Print letterCounts
*/
function wordSizes(string) {
  const letterCounts = {};

  if (string.length === 0) {
    return letterCounts;
  }

  string.split(' ').forEach(word => {
    let key = String(word.length);

    if (letterCounts.hasOwnProperty(key)) {
      letterCounts[key] += 1;
    } else {
      letterCounts[key] = 1;
    }
  });
  return letterCounts;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}