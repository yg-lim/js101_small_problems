function stringToInteger(str) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  }
  
  let num = 0;
  
  str.split('').forEach((strNumber, index) => {
    placeOfDigit = str.substring(index).length - 1;

    num += (DIGITS[strNumber] * (10 ** placeOfDigit));
  })
  return num;
}

function stringToSignedInteger(str) {
  let stringWithoutSign;
  if (str.startsWith("-")) {
    stringWithoutSign = str.substring(1);
    return stringToInteger(stringWithoutSign) * -1;
  } else if (str.startsWith("+")) {
    stringWithoutSign = str.substring(1);
    return stringToInteger(stringWithoutSign);
  } else {
    return stringToInteger(str);
  }
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true