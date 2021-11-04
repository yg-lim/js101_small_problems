/*
Problem
=======
Given an argument count and a number,
*/

function sequence(count, number) {
  let sequenceArray = [];

  while (count > 0) {
    sequenceArray.unshift(count * number);
    count -= 1;
  }
  console.log(sequenceArray);
  return sequenceArray;
}

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []