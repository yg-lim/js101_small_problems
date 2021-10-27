/*
problem
=======
given a string of characters, return a string that elminates any consecutive duplicate characters

-input: string
-output: new string

-rules
  -explicit req:
    return a new string
    if the same character apperas at least twice consecutively, reduce it to 1 of that character
  
  -implicit req:
    cases aren't considered
    empty string input results in empty string output

examples (test cases)
=====================
below

data structure
==============
-variable to hold character of current letter

algorithm
=========
-split the string into an array and iterate through each letter element
-create an empty string to hold the new string `crunchedString`
-save the first letter of the string to a variable `currentChar`

-iterate through the array,
-if the next letter is the same as `currentChar`
  -do nothing
-if the next letter is different than `currentChar`
  -concat `currentChar` to `crunchedString`
  -then save that different letter to `currentChar`

-return `crunchedString`
*/

function crunch(string) {
  let crunchedString = "";

  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === string[i + 1]) {
      continue;
    } else if (string[i] !== string[i + 1]) {
      crunchedString += string[i];
    }
  }
  console.log(crunchedString);
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""