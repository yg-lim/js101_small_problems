/*
Problem
=======
Write a function that rotates an array by moving the first element to the end of
the array. Do not modify the original array.

Input: Array
Output: New array

Rules:
-If the input is not an array, return undefined
-If the input is an empty array, return []
-For a non-empty array, slice off the first element and
append it to the end of the array

Examples
========
rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]

Data structure
==============
n/a

Algorithm
=========
-If `arr` is an array
  -Subprocess: Rotate the array
    -Set `rotatedArr` to a copy of `arr`
    -Remove the first element from `rotatedArr` and set it to `removedElement`
    -Append `removedElement` to the end of `rotatedArr`
    -Return rotatedArr
-Else, return 'undefined'
*/

function rotateArray(arr) {
  if (Array.isArray(arr)) {
    if (arr.length === 0) return [];
    let rotatedArr = arr.slice();
    let removedElement = rotatedArr.shift();
    rotatedArr.push(removedElement);

    return rotatedArr;
  } else {
    return undefined;
  }
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                    // [1, 2, 3, 4]