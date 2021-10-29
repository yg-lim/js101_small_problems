const readlineSync = require('readline-sync');

console.log("Enter a noun:");
let noun = readlineSync.question();

console.log("Enter a verb:");
let verb = readlineSync.question();

console.log("Enter an adjective:");
let adjective = readlineSync.question();

console.log("Enter an adverb:");
let adverb = readlineSync.question();

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
console.log(`The ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}.`);
console.log(`The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`);