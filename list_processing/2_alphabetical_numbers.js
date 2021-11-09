/*
Problem
=======
-Given an array of integers between 0 and 19, return an array of those same
integers sorted based on the English word for each number.

zero, one, two, three, four, etc.

Example
=======
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

Data Structure
==============
num = index
['zero', 'one', 'two', 'three', 'four', 'five' 'six', 'seven', 'eight', 'nine',
'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
'seventeen', 'eighteen', 'nineteen']

Algorithm
=========
-Create an array with the numbers converted to their english words
-Sort the array in alphabetical order
*/


function alphabeticNumberSort(arr) {
  const NUM_TO_ENGLISH_WORD = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  let sortAlphabeticallyByEnglishWord = (a, b) => {
    if (NUM_TO_ENGLISH_WORD[a] > NUM_TO_ENGLISH_WORD[b]) {
      return 1;
    } else if (NUM_TO_ENGLISH_WORD[a] < NUM_TO_ENGLISH_WORD[b]) {
      return -1;
    } else {
      return 0;
    }
  };

  let sortedArr = arr.slice().sort(sortAlphabeticallyByEnglishWord);
  console.log(sortedArr);
  return sortedArr;
}

alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

