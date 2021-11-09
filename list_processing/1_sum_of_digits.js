/*
without using any loops, find the sum of the digits using method calls
*/

function sum(num) {
  let digits = String(num).split('');
  let sum = digits.reduce((previousValue, currentValue) => {
    return previousValue + Number(currentValue);
  }, 0);

  return sum;
}

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45