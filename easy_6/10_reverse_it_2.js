/*
Problem
=======
Given a string argument containing one or more words, return a new string
containing the words from the argument. All five-or-more letter words should
have their letters in reverse order. The string argument will consist of only
letters and spaces. Words are separated by a single space.

Input: String
Output: New string, words >= 5 letters are reversed in letters

Data structure
String.split(' ')
['Walk', 'around', 'the', block]
Iterate through them
  -If the length >= 5, push word.split('').reverse().join('')
  else
    -Push the word

Algorithm
=========
-Set empty string to `reversedWords`
-Set `wordsArray` to the string split into an array by spaces
-Iterate through `wordsArray`
  -If the length of the word is >= 5
    -Split it into letters, reverse it, and merge it. Then
    push that result to `reversedWords`
  -Else
    Push the word to `reversedWords`
-Print `reversedWords`
*/

// function reverseWords(string) {
//   let reversedWords = [];
//   let wordsArray = string.split(' ');

//   wordsArray.forEach(word => {
//     reversedWords.push(word.length >= 5 ? word.split('')
//  .reverse().join('') : word);
//   });
//   console.log(reversedWords.join(' '));
//   return reversedWords.join(' ');
// }

function reverseWords(string) {
  let wordsArray = string.split(' ');
  let reversedWords = wordsArray.map(word => {
    return word.length >= 5 ? word.split('').reverse().join('') : word;
  });
  console.log(reversedWords.join(' '));
  return reversedWords.join(' ');
}

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"