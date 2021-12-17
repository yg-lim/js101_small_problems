/*
Problem
=======
Input: 3 integers
Output: String

Rules:
-Sum of the two shortest sides must be greater than the longest side
-Every side must have a greater length than 0

-All 3 sides the same: equilateral
-Two sides the same: isosceles
-No sides the same: scalene

Examples
========
Below

Data structure
==============
triangle = [1, 3, 3] sort from a < b

((triangle[0] + triangle[1]) <= triangle[2] && triangle.includes(0)) => invalid

sides.every(side === triangle[0]) => equilateral

(sides.indexOf(sides[1], 1) === 2 ||
sides.indexOf(sides[1]) === 0)) => isosceles

else => scalene
*/

function triangle(side1, side2, side3) {
  let sides = [side1, side2, side3].sort((a, b) => a - b);
  let shortest = sides[0];
  let middle = sides[1];
  let longest = sides[2];

  if ((shortest + middle) <= longest || sides.includes(0)) {
    return 'invalid';
  }

  if (sides.every(side => side === shortest)) {
    return 'equilateral';
  } else if (
    shortest === middle ||
      middle === longest ||
      shortest === longest
  ) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"