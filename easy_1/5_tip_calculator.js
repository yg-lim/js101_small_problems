const readline = require('readline-sync');
const PERCENT_TO_DECIMAL = 100;

console.log("What is the bill?");
let bill = Number(readline.question());

console.log("What is the tip percentage?");
let tipPercentage = Number(readline.question());
tipPercentage /= PERCENT_TO_DECIMAL;

let tip = bill * tipPercentage;
let total = bill + tip;

console.log(`The tip is \$${tip.toFixed(2)}`);
console.log(`The total is \$${total.toFixed(2)}`);