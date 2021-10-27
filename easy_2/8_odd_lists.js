/*
Write a function that returns an Array that contains every other element
of an Array that is passed in as an argument. The values in the returned
list should be those values that are in the 1st, 3rd, 5th, and so on
elements of the argument Array.

Problem
=======

- Given an array of elements, return same or a new array that has only the
values in the 1st, 3rd, 5th elements 

Input: array
output: a new array

Explicit req:
- A new array with only the 1st, 3rd, 5th, ... elements  of given array

Implicit req:
- input with length of 1 or less returns the input array

Data structure/algo
===================
Create a new empty array `odds`
Iterate through the input array, if the index even,
then add the element at that index to the new array `odds`
*/

function oddities(arr) {
  const odds = [];

  arr.forEach((element, index) => {
    if (index % 2 === 0) odds.push(element);
  })
  return odds;
}

function evenities(arr) {
  const evens = arr.filter((element, index) => {
    if (index % 2 === 1) return element;
  });
  return evens;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

console.log(evenities([2, 3, 4, 5, 6])); // logs [3, 5]
console.log(evenities([1, 2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(evenities(["abc", "def"])); // logs ['def']
console.log(evenities([123])); // logs []
console.log(evenities([])); // logs []