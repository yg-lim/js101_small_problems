function swapCase(str) {
  return str
    .split('')
    .map(char => {
      if (char >= "A" && char <= "Z") {
        return char.toLowerCase();
      } else if (char >= "a" && char <= "z") {
        return char.toUpperCase();
      } else {
        return char;
      }
    })
    .join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"