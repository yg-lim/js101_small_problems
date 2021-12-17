/*
Problem
=======
Input:
-Array

Output:
-Same mutated Array

Rules:
-Sort the array using bubble sort algo
-On each pass, compare consecutive items
-If the first is greater than the last, swap

Examples
========
Below

Data structure
==============
let arr = [6, 2, 7, 1, 4]


let elementsSwapped = false;

while (element B < arr.length)
arr[0] > arr[1] ? [arr[0], arr[1]] = [arr[1], arr[0]]
arr[1] > arr[2] ? [arr[1], arr[2]] = [arr[2], arr[1]]
arr[2] > arr[3] ? [arr[2], arr[3]] = [arr[3], arr[2]]
arr[3] > arr[4] ? [arr[3], arr[4]] = [arr[4], arr[3]]

elementA = 0
elementB = 1

elementA = elementB
elementB += 1

[arr[0], arr[1]] = [arr[1], arr[0]];

Algorithm
=========
-Set the elementsSwapped flag
-Do/While the elementsSwapped flag is true
  -Set the elementsSwapped flag to false
  -Set elemA to 0
  -Set elemB to 1
  -While elemB < length of the array,
    -Iterate through the array
      -Compare the nth two elements,
      -If the first is greater than the last
        -Swap the elements
        -Set the elementsSwapped flag to true
      -elemA = elemB
      -elemB += 1
*/
function sortArray(arr, elementsSwapped) {
  let idxA = 0;
  let idxB = 1;

  while (idxB < arr.length) {
    if (arr[idxA] > arr[idxB]) {
      [arr[idxA], arr[idxB]] = [arr[idxB], arr[idxA]];
      elementsSwapped = true;
    }
    idxA = idxB;
    idxB += 1;
  }
  return elementsSwapped;
}

function bubbleSort(arr) {
  let elementsSwapped;

  do {
    elementsSwapped = false;
    elementsSwapped = sortArray(arr, elementsSwapped);
  } while (elementsSwapped === true);
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]