/*
Problem
=======
Given a two-dimensional array with a fruit name and a number,
return a one-dimensional array containing the fruit name the number
amount of times.

Input: Two-dimensional array, [["string", num], ["string", num]]
Output: New, one dimensional array of strings

Explicit Rules:

Implicit Rules:

Questions:


Examples
========

Data structure
==============
[['apple', 3], ['orange', 1], ['banana', 2]]

const order: {
  'apple': 3,
  'orange': 1,
  'banana': 2
}

*/
function buyFruit(arr) {
  const order = Object.fromEntries(arr);
  let newArr = [];

  for (let key in order) {
    let quantity = order[key];
    while (quantity > 0) {
      newArr.push(key);
      quantity -= 1;
    }
  }

  console.log(newArr);
}

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
