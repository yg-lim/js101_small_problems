function multiplicativeAverage(array) {
  let product = array.reduce((previousValue, currentValue) => {
    return previousValue * currentValue;
  }, 1);

  let average = product / array.length;

  return average.toFixed(3);
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"