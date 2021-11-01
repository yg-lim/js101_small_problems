/*
Write a program that solicits six numbers from the user and logs a message
that describes whether the sixth number appears among the first five numbers.

Problem
=======
Write a program that requests 6 numbers from the user.
The program then logs a message of whether or not the 6th number
appears among the first five numbers that were entered.

Input: 6 numbers
Output: Console.log string, true or false

Explicit rules:
  -
Implicit rules:
  -Five numbers can be printed with commas, no space (25,31,12,3,7)
  -Expecting positive integer inputs only

*/

const readlineSync = require('readline-sync');
const numbers = [];

console.log('Enter the 1st number:');
numbers.push(Number(readlineSync.question()));

console.log('Enter the 2nd number:');
numbers.push(Number(readlineSync.question()));

console.log('Enter the 3rd number:');
numbers.push(Number(readlineSync.question()));

console.log('Enter the 4th number:');
numbers.push(Number(readlineSync.question()));

console.log('Enter the 5th number:');
numbers.push(Number(readlineSync.question()));

console.log('Enter the last number:');
let lastNumber = Number(readlineSync.question());

if (numbers.includes(lastNumber)) {
  console.log(`The number ${lastNumber} appears in ${numbers.join(', ')}.`);
} else {
  console.log(`The number ${lastNumber} does not appear in ${numbers.join(', ')}.`);
}