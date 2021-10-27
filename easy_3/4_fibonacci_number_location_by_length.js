/*
problem
=======
-given an integer that represents the number of digits in a fibonacci number,
return the index of the first fibonacci number that has that number of digits

input = big int
output = new big int

rules:
  -explicit req:
    -must work with big ints
    -must return index of first fibonacci number that has input number of digits
    -input is always greater than or equal to 2
    -fibonacci index starts at 1, not 0
  
  -implicit req:
    -n/a

example/test cases
==================
findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;

data structure
==============
n/a

algorithm
=========
-create variable `index` and set to 1
-loop:
  -find the fibonacci number at `index`
  -if the passed in `int` is less than the number of digits in the fibonacci number
    -index + 1
  else
    -break
return index

-subprocess findFibonacciNumberByIndex
if the index is 1 or 2, then return 1
return fibonacci(index - 1) + fibonacci(index - 2)
*/

function fibonacciByIndex(index) {
  if (index === 1n || index === 2n) return 1n;

  return fibonacciByIndex(index - 1n) + fibonacciByIndex(index - 2n);
}

function findFibonacciIndexByLength(length) {
  let index = 1n;

  while (String(fibonacciByIndex(index)).length < length) {
    index += 1n;
  }
  return index;
}

findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;