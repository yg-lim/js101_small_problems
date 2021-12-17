/*
Problem
=======
Input: String
Output: Object

Rules:
-Alphabetic characters contribute to lowercase/uppercase
-All other chars (special & numerical) are "neither"

-Values in objects must be strings
-String integer values have two decimal places, rounded to the nearest tenth

Examples
========
Below

Data structure
==============
-Total char count (length)
-Number of chars / total char count = percentage
-num.toFixed(2) => returns string

Algorithm
=========
-Set `totalNumOfChars` to string.length
-Set `lowercaseCharsCount`
-Set `uppercaseCharsCount`
-Set `neitherCharsCount`

-Iterate through the string,
  -if the current character is lowercase,
    +1 to `lowercaseCharsCount`
  -else if the current character is uppercase,
    +1 to `uppercaseCharsCount`
  -else
    +1 to `neitherCharsCount`
-Convert each counts to percentages
-And add those values to its respective keys in the PERCENTAGES object
*/

function letterCounts(string) {
  let letterCounts = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };

  let totalNumOfChars = string.length;

  for (let idx = 0; idx < totalNumOfChars; idx += 1) {
    let currentChar = string[idx];
    if (currentChar >= "a" && currentChar <= "z") {
      letterCounts['lowercase'] += 1;
    } else if (currentChar >= "A" && currentChar <= "Z") {
      letterCounts['uppercase'] += 1;
    } else {
      letterCounts['neither'] += 1;
    }
  }
  return letterCounts;
}

function convertCountsToPercentages(letterCounts, totalNumOfChars) {
  let percentages = {};

  for (let key in letterCounts) {
    percentages[key] = ((letterCounts[key] / totalNumOfChars) * 100).toFixed(2);
  }

  return percentages;
}

function letterPercentages(string) {
  let totalNumOfChars = string.length;
  return convertCountsToPercentages(letterCounts(string), totalNumOfChars);
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
