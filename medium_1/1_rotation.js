/*
input:
-array
output:
-a new array

rules:
-rotate the input array by moving the first elem to the end of array
-do not modify original array
-if input is not array, return undefined
-if input is empty array, return empty array

eg: below

ds:
['a', 'b', 'c'] => ['b', 'c', 'a']

algo:
-if input is not array, return undefined
-if input array length is 0, return empty array copy
-create a copy of the input array
-remove the first element of the copy array, save it
-append removed element to the end of copy array
-return the array
*/

function rotateArray(inputArr) {
  if (!Array.isArray(inputArr)) return 'undefined';
  if (inputArr.length === 0) return [];

  let arr = inputArr.slice();
  arr.push(arr.shift());
  return arr;
}

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