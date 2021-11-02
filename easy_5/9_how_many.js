/*
Problem
=======
Given an array which has elements that may or may not appear more than once,
log the element and how many times it appears in the console.

Input: Array
Output: String (console)

Explicit Rules:
  -The words are case sensitive, therefore 'suv' does not count as 'SUV'
  -Output the element and then how many times it appears into the console

Implicit Rules:
  -N/A

Examples
========
Below

Data structure
==============
occurences
{
  'vehicle': integer,
}
console.log(occurences[key] => occurences[value])

Algorithm
=========
-Set `occurences` to empty object
-Given the array of strings, iterate through each element
-If `occurences` contains the element as a key, then add 1
  -Else
    -Set the element as a key, with a value of 1
-Extract the keys of the object as an array
-Iterate through the array of keys
  -Print the key and the corresponding value to the console
*/

function countOccurrences(array) {
  const occurences = {};

  array.forEach(element => {
    if (Object.keys(occurences).includes(element)) {
      occurences[element] += 1;
    } else {
      occurences[element] = 1;
    }
  });
  const occurencesKeys = Object.keys(occurences);

  occurencesKeys.forEach(key => {
    console.log(`${key} => ${occurences[key]}`);
  });
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);