function swapCase(str) {
  let result = '';

  for (let idx = 0; idx < str.length; idx += 1) {
    let currentChar = str[idx];

    if (currentChar.match(/[a-z]/)) {
      result += currentChar.toUpperCase();
    } else if (currentChar.match(/[A-Z]/)) {
      result += currentChar.toLowerCase();
    } else {
      result += currentChar;
    }
  }

  console.log(result);
}

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"