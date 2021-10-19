function sumOfConsecutiveIntegers (int) {
  if (int === 1) return 1;
  return int + sumOfConsecutiveIntegers(int - 1);
}

function productOfConsecutiveIntegers (int) {
  if (int === 1) return 1;
  return int * productOfConsecutiveIntegers(int - 1);
}

function sumOfArray (arr) {
  return arr.reduce((previousVal, currentVal) => previousVal + currentVal, 0);
}

function productOfArray (arr) {
  return arr.reduce((previousVal, currentVal) => previousVal * currentVal, 1);
}

const readline = require('readline-sync');

console.log("Please enter an integer greater than 0:");
let int = Number(readline.prompt().trim());

while (Number.isNaN(int) || int <= 0) {
  console.log("Invalid input! Must be an integer greater than 0.");
  int = Number(readline.prompt().trim());
}

console.log('Enter "s" to compute the sum, or "p" to compute the product.')
let operationChoice = readline.prompt().trim().toLowerCase();

while (operationChoice !== "s" && operationChoice !== "p") {
  console.log('Invalid input! Must be "s" or "p".');
  operationChoice = readline.prompt().trim().toLowerCase();
}

let result;

if (operationChoice === "s") {
  result = sumOfConsecutiveIntegers(int);
  operationMessage = "sum";
  console.log(`The sum of the integers between 1 and ${int} is ${result}.`)
} else if (operationMessage === "p") {
  result = productOfConsecutiveIntegers(int);
  console.log(`The product of the integers between 1 and ${int} is ${result}.`)
  operationMessage = "product";
}

console.log(`The ${operationMessage} of the integers between 1 and ${int} is ${result}.`);