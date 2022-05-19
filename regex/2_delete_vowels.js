function removeVowels(arr) {
  /*
  input:
    - array of strings
  output:
    - array of strings (new/old?)

  problem:
    - returns an array with the same string vals, but with the vowels removed
    - case insensitive, remove all vowels
  */

  return arr.map(str => {
    return str.replace(/[aeiou]/ig, '');
  });
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]