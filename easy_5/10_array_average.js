/*
Problem
=======
-Given an array of positive integers, return the average of all numbers
in the array, rounded down to the integer component of the average. The
array will never be empty.
*/
function average(array) {
  let sum = array.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  }, 0);

  let average = sum / array.length;

  return Math.floor(average);
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40