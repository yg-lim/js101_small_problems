/*
Problem
=======
-Given a string with mixed characters and parentheses, return a boolean
representing whether or not the open brackets in the string are met with
closed brackets.

Input: String
Output: Boolean

Explicit Rules:
  -To be considered a match, parenthesis must occur in matching '(' and ')'

Implicit Rules:
  -String with no brackets will return true
  -If '(' is not met with a corresponding ')' then returns false
  -If ')' is before the '(', it is not considered a matching pair

Examples
========
Below

Data structure
==============
Number of open brackets === number of closed brackets
openBracketWithoutPair = true (flipper)

Algorithm
=========
findNumOfBrackets
=====================
-Given a string that may contain open brackets
-Set `numOfBrackets` to an object { "(": 0, ")": 0 }
  -Iterate through the string,
    -If the character is a '('
      -numOfBrackets["("] += 1
    -Else if the character is a ')'
      -numOfBrackets[')'] += 1
-Return numOfBrackets

isNumOfBracketsBalanced
=======================
-If (numOfBrackets(string)['('] === numOfBrackets(string)[')'])
  -Return true
  -Else
    -Return false

extractBracketsAsArray
======================
-Set `bracketsArray` to an empty array
-Iterate through the given string argument
  -If it's a bracket, then add it to `bracketsArray`
-Return `bracketsArray`

isBalanced
==========
-Create a flag named `bracketLeftOpen` set to false
-Set idxOfLastOpenBracket = 0
-Set idxOfLastClosedBracket = 0

-While the idxOfLastOpenBracket is not equal to -1
  -Set the idxOfLastOpenBracket to the index of the first open bracket starting
  from idxOfLastOpenBracket
  -Set the idxOfLastClosedBracket to the index of the first open bracket
  starting from idxOfLastOpenBracket
    -If `idxOfLastOpenBracket` is -1
      -Set `bracketLeftOpen` to true

-Print bracketLeftOpen

Example
"))Hey(("
*/

function findNumOfBrackets(string) {
  const numOfBrackets = { "(": 0, ")": 0 };

  for (let idx = 0; idx < string.length; idx += 1) {
    if (string[idx] === "(") numOfBrackets["("] += 1;
    if (string[idx] === ")") numOfBrackets[")"] += 1;
  }
  return numOfBrackets;
}

function numOfBracketsBalanced(string) {
  if (findNumOfBrackets(string)["("] === findNumOfBrackets(string)[")"]) {
    return true;
  } else {
    return false;
  }
}

function allOpenBracketsClosed (string) {
  let noBracketsLeftOpen = true;
  let idxOfLastOpenBracket = 0;
  let idxOfLastClosedBracket = 0;

  do {
    idxOfLastOpenBracket = string.indexOf("(", idxOfLastOpenBracket + 1);
    if (idxOfLastOpenBracket === -1) break;

    idxOfLastClosedBracket = string.indexOf(")", idxOfLastOpenBracket + 1);

    if (idxOfLastClosedBracket === -1) noBracketsLeftOpen = false;

  } while (idxOfLastOpenBracket !== -1);

  return noBracketsLeftOpen;
}

function isBalanced(string) {
  if (numOfBracketsBalanced(string) && allOpenBracketsClosed(string)) {
    return true;
  } else {
    return false;
  }
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);