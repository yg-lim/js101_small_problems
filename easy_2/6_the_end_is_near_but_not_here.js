function penultimate(string) {
  let words = string.split(' ');

  words.reverse();


  return words[1];
}

function findMiddleWord(string) {
  let words = string.split(' ');

  if (words.length <= 1) {
    return "Input needs to be at least 3 words!";
  }

  let middleIndex = Math.round(words.length / 2) - 1;

  return words[middleIndex];
}

// console.log(findMiddleWord("the middle word IS the capitalized one."));
console.log(findMiddleWord("522525 555 hello hi hi"));


console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true