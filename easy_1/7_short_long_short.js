function shortLongShort(str1, str2) {
  let longerString = str1;
  let shorterString = str2;

  if (str2.length > str1.length) {
    longerString = str2;
    shorterString = str1;
  }

  return shorterString + longerString + shorterString;
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"