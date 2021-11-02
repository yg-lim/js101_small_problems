function interleave(array1, array2) {
  const resultArray = [];

  for (let index = 0; index < array1.length; index += 1) {
    resultArray.push(array1[index]);
    resultArray.push(array2[index]);
  }
  return resultArray;
}
console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
