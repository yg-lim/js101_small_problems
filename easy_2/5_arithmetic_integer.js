const readlineSync = require('readline-sync');

function prompt(sentence) {
  console.log(`==> ${sentence}`);
}

prompt('Enter the first number:');
let num1 = Number(readlineSync.question());

prompt('Enter the second number:');
let num2 = Number(readlineSync.question()); 

prompt(`${num1} + ${num2} = ${num1 + num2}`);
prompt(`${num1} - ${num2} = ${num1 - num2}`);
prompt(`${num1} * ${num2} = ${num1 * num2}`);
prompt(`${num1} / ${num2} = ${num1 / num2}`);
prompt(`${num1} % ${num2} = ${num1 % num2}`);
prompt(`${num1} ** ${num2} = ${Math.pow(num1, num2)}`);