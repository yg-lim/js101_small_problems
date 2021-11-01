/*
Given a user's age from input, and then given the user's desired
retirment age from input, log the current year, and then the year
in which it will be when the user reaches their desired retirement
year. Then print how many years of work they have remaining.
*/

const readlineSync = require('readline-sync');
const CURRENT_DATE = new Date();
const CURRENT_YEAR = CURRENT_DATE.getFullYear();

console.log('What is your age?')
let age = Number(readlineSync.prompt());

console.log('At what age would you like to retire?');
let retirementAge = Number(readlineSync.prompt());

let yearsOfWorkLeft = retirementAge - age;
let retirementYear = CURRENT_YEAR + yearsOfWorkLeft;

console.log(`It's ${CURRENT_YEAR}. You will retire in ${retirementYear}.`);
console.log(`You only have ${yearsOfWorkLeft} years of work to go!`);