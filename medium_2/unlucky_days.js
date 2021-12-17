/*
problem
=======
input: integer
output: new integer

rules:
-returns number of friday the 13ths in the given year
-can assume that input year is > 1752
-can assume that same calendar will be used for the foreseeable future
(can take any value greater than 1752)

examples
========
below

data structure
==============
n/a

algorithm
=========
-given the year,
-set the date to the jan 13th, year
-set `numOfFridayThe13ths` = 0
-iterate through each 13th of the month of the year
  -if the 13th is a friday
    -`numOfFridayThe13ths` += 1
-return `numOfFridayThe13ths
*/

function fridayThe13ths(year) {
  let date = new Date(`January 13, ${year}`);
  let numOfFridayThe13ths = 0;

  for (let idx = 1; idx <= 12; idx += 1) {
    let day = date.getDay();

    if (day === 5) numOfFridayThe13ths += 1;
    date.setMonth(idx);
  }
  console.log(numOfFridayThe13ths);
}

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2