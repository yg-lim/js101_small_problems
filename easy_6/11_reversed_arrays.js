/*
Problem
=======
-Given an array, reverse the elements in place without using the
Array.prototype.reverse() method.

Input: Array
Output: Same array

Explicit Rules:
-Cannot use reverse()
-Return array with reversed elements

Implicit Rules:
-Single element arrays return the same array with no change

Examples
========
+ Tests cases below

Data structure
==============
a  b  c  d  e  f
0  1  2  3  4  5

f  e  d  c  b  a
5  4  3  2  1  0

f  a  b  c  d  e
f  e  a  b  c  d
f  e  d  a  b  c
f  e  d  c  a  b
f  e  d  c  b  a

a  b  c  d  e  f

0 => 5
1 => 4
2 => 3
3 => 2
4 => 1
5 => 0

Algorithm
=========
-Given the array of elements
-Set the counter to the length of the array
-While counter is greater than 0
  -array.unshift(array.pop);
*/

function reverse(list) {
  let counter = list.length;
  let counter2 = list.length;

  while (counter > 0) {
    list.push(list[counter - 1]);
    counter -= 1;
  }

  while (counter2 > 0) {
    list.shift();
    counter2 -= 1;
  }
  return list;
}

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true