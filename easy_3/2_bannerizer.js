/*
Problem
=======
input: string
output: new string

rules:
  -may assume that output will always fit in browser window

  -explicit req:
    -output new multiline string
  
  -implicit req:
    -empty string returns empty box

Examples
========
below

Data Structure
==============
n/a

Algorithm
=========
find the number of characters in the string, save it to variable `numOfChars`
  -string.prototype.length
then print:
  -for the top/bottom border, it's created by +(numOfChars +2 '-')+
  -for above/below spaces, it's created by |(numOfChars +2 ' ')|
  -for the line containing thes tring, it's created by | ${string} |
*/

function logInBox(string) {
  const numOfChars = string.length;
  let fillerString = '';
  
  let border = `+-${fillerString.padStart(numOfChars, '-')}-+`;
  let space = `| ${fillerString.padStart(numOfChars, ' ')} |`;
  let sentence = `| ${string} |`;

  let box = (`${border}\n${space}\n${sentence}\n${space}\n${border}`);

  console.log(box);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');
/*
+--+
|  |
|  |
|  |
+--+
*/