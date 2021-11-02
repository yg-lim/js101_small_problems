function union(array1, array2) {
  const resultArray = array1.slice();

  array2.forEach(element => {
    if (!resultArray.includes(element)) {
      resultArray.push(element);
    }
  });
  return resultArray;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]