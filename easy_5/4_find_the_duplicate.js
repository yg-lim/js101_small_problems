/*
Problem
=======
-Given an unordered array and the information that only one value
in the occurs twice while all other values only occur once, determine
which value occurs twice. Write a function that will return the value
of the number that occurs twice.

Input: Array of numbers
Output: Number

Explicit Rules:
  -All items in the array appear only once except for one value
  that appears twice.
  -Must return the value itself that repeats twice

Implicit Rules:

Examples
========

findDup([1, 5, 3, 1]);                                // 1
findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]);    // 73

Data structure
==============
N/A

Algorithm
=========
-Initialize `appearsTwice`
-Iterate through each of the elements in the given array,
  -If the indexOf of the element in the array is different
  from the lastIndexOf of the same element in the array,
    -Set appearsTwice to the element
-Print `appearsTwice`
*/

function findDup(array) {
  let appearsTwice;

  array.forEach(element => {
    if (array.indexOf(element) !== array.lastIndexOf(element)) {
      appearsTwice = element;
    }
  });
  return appearsTwice;
}

findDup([1, 5, 3, 1]);                                // 1
findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]);    // 73