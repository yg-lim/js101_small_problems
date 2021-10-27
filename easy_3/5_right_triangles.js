/*
problem
=======
given a positive integer, return a string that forms a right angled triangle
with the hypotenuse and height of the triangle equal to the integer

input: integer
output: new string

rules:
  -explicit:
    -function takes a positive integer
    -prints triangle using stars (*)
    -triangle hypotenuse facing the left
  
  -implicit:
    -top of the triangle has a line break

examples/test cases
===================

triangle(5);

    *
   **
  ***
 ****
*****

triangle(9);

        *
       **
      ***
     ****
    *****
   ******
  *******
 ********

data structure
==============
n/a

algorithm
=========
-create a variable `numOfStars` and set it to 0
-while numOfStars is less than or equal to the length of the integer `n`
  -print enough spaces in the beginning of the line,
  so that `numOfStars` stars + spaces = `int`
  -numOfStars + 1
*/

function triangle(n) {
  let numOfStars = 0;
  let star = '*';

  while (numOfStars <= n) {
    console.log(star.repeat(numOfStars).padStart(n, ' '));
    numOfStars += 1;
  }
}

triangle(9);