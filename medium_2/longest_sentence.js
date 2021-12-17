/*
Problem
=======
Input: string
Output: string

Rules:
-Sentences may end with periods, exclamation points or question marks
-Any chars that are not spaces or sentence-ending are counted as words (e.g --)
-Log the longest sentence and ist word count to console
-Preserve punctuation at the end of sentences
-Case, punctuation, tabs, spaces all matter

Examples
========
Below

Data structure
==============

Algorithm
=========
-Iterate through the string.
-Save the characters to a variable 'string'.
-When the end of the current sentence is reached,
-Push the 'string' to a variable 'arrOfSentences' and reset
'string' to an empty string.

-Iterate through the array and remove the empty spaces at the start of
of each string

-Iterate through the array,
  -creating a new array with each string split into an array by spaces

-Sort the array so that the string with the greatest length is first
-Print the first element in the array
-Print the number of words it has
*/
function splitStringIntoSentencesArray(string) {
  let stringToPush = '';
  let arrOfSentences = [];

  for (let idx = 0; idx < string.length; idx += 1) {
    let currentChar = string[idx];

    stringToPush += currentChar;
    if (currentChar === '!' || currentChar === '.' || currentChar === '?') {
      arrOfSentences.push(stringToPush);
      stringToPush = '';
    }
  }
  return removeStartingWhiteSpaces(arrOfSentences);
}

function removeStartingWhiteSpaces(array) {
  return array.map(string => string.trimStart());
}

function splitStringsToSubArray(array) {
  return array.map(string => string.split(' '));
}

function sortArrayByWordCount(array) {
  return array.sort((a, b) => b.length - a.length);
}

function longestSentence(string) {
  let sentences = splitStringIntoSentencesArray(string);
  sentences = splitStringsToSubArray(sentences);
  sortArrayByWordCount(sentences);

  let longestSentence = sentences[0];
  let wordCount = sentences[0].length;
  console.log(longestSentence.join(' '));
  console.log(`The longest sentence has ${wordCount} words.`);
}

let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

longestSentence(longText);
/* Four score and seven years ago our fathers brought forth
on this continent a new nation, conceived in liberty, and
dedicated to the proposition that all men are created equal.

// The longest sentence has 30 words.
*/

longestSentence(longerText);
/* It is rather for us to be here dedicated to the great task
remaining before us -- that from these honored dead we take increased
devotion to that cause for which they gave the last full measure of
devotion -- that we here highly resolve that these dead shall not have
died in vain -- that this nation, under God, shall have a new birth of
freedom -- and that government of the people, by the people, for the
people, shall not perish from the earth.

// The longest sentence has 86 words.
*/

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.