/*
Problem
=======
Write a function that takes an array of strings and return an array of strings
with the same number of elements, but with all of the vowels removed

Input: Array of strings
Output: New array of strings with vowels removed, same number of elements

Examples
========
'AEIOU' => ''
'green' => 'grn'

Data structure
==============
const VOWELS = Array.from("aeiouAEIOU");

Algorithm
=========
-Iterate through the array
  -For each element, split the string into an sub-array
    -Iterate through each element in the sub-array
      -And only keep the elements that are not vowels
*/

function removeVowels(arr) {
  const VOWELS = Array.from('aeiouAEIOU');

  return arr.map(str => {
    return str
      .split('')
      .filter(char => !VOWELS.includes(char))
      .join('');
  });
}

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]