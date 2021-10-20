function multisum (num) {
  let multiplesOfFiveAndThree = [];

  for (let i = num; i >= 1; i--) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiplesOfFiveAndThree.push(i);
    }
  }
  return multiplesOfFiveAndThree.reduce((a, b) => a + b);
}

console.log(multisum(20));
