function multiplyList(array1, array2) {
  const resultArray = [];

  for (let index = 0; index < array1.length; index += 1) {
    resultArray.push(array1[index] * array2[index]);
  }

  return resultArray;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]