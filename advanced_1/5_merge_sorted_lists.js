function merge(arr1, arr2) {
  /*
  input:
    - two array of nums

  output:
    - one new array of sorted nums

  rules:
    - cannot sort the result array
    - must build result array on element at a time

  [1, 5, 9] [2, 6, 8] => [1, 5, 9, 2, 6, 8]
  []

  - combine the two input arrs into a reference array
  - let result array = []
  - starting from num = 0, while reference array.length > 0, num += 1
    - iterate through num
    - if reference array has num
        - add num to result array
        - remove num from reference array
    - else if reference array does not have num
        - increment num by 1
  - return result array
  */

  let referenceArr = [ ...arr1, ...arr2 ];
  let result = [];
  let num = 0;

  while (referenceArr.length > 0) {
    let idxOfNum = referenceArr.indexOf(num);
    if (idxOfNum >= 0) {
      result.push(num);
      referenceArr.splice(idxOfNum, 1);
    } else {
      num += 1;
    }
  }
  return result;
}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]