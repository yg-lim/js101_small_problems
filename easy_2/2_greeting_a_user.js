const readline = require('readline-sync');

function prompt (sentence) {
  console.log(sentence);
}

prompt('What is your name?');
let name = readline.prompt().trim();

if (name.endsWith('!')) {
  name = name.slice(0, name.length - 1);
  prompt(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  prompt(`Hello ${name}.`)
}