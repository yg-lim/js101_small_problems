/*
Problem
=======
-Given a string of characters, create an array with all of the substrings of the
string. Each substring should begin with the first letter of the word and should
be ordered from shortest to longest.

Input: String
Output: Array of strings

Explicit Rules:
-Cannot use loop/forEach method
*/

// function leadingSubstrings(str) {
//   let substrings = [];
//   let strLength = str.length;

//   for (let idx = 1; idx <= strLength; idx += 1) {
//     substrings.push(str.slice(0, idx));
//   }
//   console.log(substrings);
//   return substrings;
// }

function leadingSubstrings(str) {
  let substrings = [str];

  str.split('').reduce((accum, val) => {
    substrings.push(accum);
    return accum + val;
  });
  return substrings.sort((a, b) => a.length - b.length);
}

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]