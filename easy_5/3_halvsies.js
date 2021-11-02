/*
Problem
=======
Given an array as an argument, create a function that returns an array
with two elements. Each of which is a nested element each containing
the first half of the array and the second half of the array respectively.
If there's an odd number of items in the array, then put the middle element
into the first nested array.

Input: Array
Output: New Array with two nested arrays

Explicit Rules:
  -Output is an array with two elements, each are an array
  -First nested array contains the first half of the original array
  -Second nested array contains the second half of the original array
  -If the number of elements in the original array is odd, the middle
  item will be in the first array.

Implicit Rules:
  -A single element array -> the element goes into the first nested
  array and the second nested array is empty
  -An empty array returns two empty nested arrays

Examples
========
Below

Data structure
==============
[[], []]

Algorithm
=========
-Set `resultArray` to an array with two elements (empty arrays)
-Set the length of the original array to `originalArrayLength`
-Set the `midpointOfArray` to originalArrayLength / 2
-Iterate through the original array,
  -If the index of the element is less than `midpointOfArray`
  -Push the element to the resultArray[0] array
  -Else
    -Push the element to the resultArray[1] array
-Print `resultArray`
*/
function halvsies(array) {
  const resultArray = [[], []];
  const originalArrayLength = array.length;
  const midpointOfArray = originalArrayLength / 2;

  array.forEach((element, index) => {
    resultArray[Number(index >= midpointOfArray)].push(element);
  });
  return resultArray;
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]] (2)
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]] (5) (2.5)
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]