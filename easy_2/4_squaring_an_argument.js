function multiply(number1, number2) {
  return number1 * number2;
}

function square (number) {
  return multiply(number, number);
}

function power (number, exponent) {
  let result = number;

  for (let i = exponent; i > 1; i -= 1) {
    result = multiply(result, number);
  }

 return result;
}

function recursivePower (number, exponent) {
  if (exponent === 1) {
    return number;
  }
  
  return multiply(number, recursivePower(number, exponent - 1));
}

/*
multiply(3, 9)
  multiply(3, 3)
    multiply(3, 1)
*/

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true

console.log(recursivePower(3, 3));