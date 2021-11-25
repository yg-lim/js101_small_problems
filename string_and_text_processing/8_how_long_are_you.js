/*
problem
=======
write a function that takes a string as an argument, and returns an array that
contains every word from the string, followed by a space and that word's length.
if the argument is an empty string, or if no argument is passed, the function
should return an empty array.

"cow sheep chicken" => ["cow 3", "sheep 5", "chicken 7"]

input: string
output: array of strings

explicit rules:
-if no argument is passed, or if an empty string is passed, returns empty array
-words are separated by a single space

implicit rules:
-non alpha-characters within the words are counted as a character

examples
========
below

data structure
==============
number of words = number of elements in array
words => separated by space

algorithm
=========
-set words to the value of `inputStr` split into an array by each word
-iterate through the array, and add the length of each element to the end
of the array element
*/

function wordLengths(inputStr = '') {
  return inputStr === '' ? [] :
    inputStr
      .split(' ')
      .map(word => word + ` ${word.length}`);
}

wordLengths('cow sheep chicken');
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths('baseball hot dogs and apple pie');
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths('Supercalifragilisticexpialidocious');
// ["Supercalifragilisticexpialidocious 34"]

wordLengths('');      // []
wordLengths();        // []