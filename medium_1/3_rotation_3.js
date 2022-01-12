/*
p:
input:
-integer
output:
-integer

rules:
-return the maximum rotation of a number
-max rotation defined by rotating the last (left) digit,
then the next, then the next, etc. etc.
-from last exercise: rotating 6, 5, 4, 3, 2, 1
-use function from last exercise

eg: below

ds:
735291 => 321579
735291 => 352917 => 329175 => 321759 => 321597 => 321579
      (6)       (5)       (4)       (3)       (2)

algo:
-take the input number
-find its length
-rotate it with n = length, save it
-rotate it with n = length - 1, save it
-rotate it with n = length - 2, save it
...
return number
*/
function maxRotation(number) {
  let count = String(number).length;

  while (count >= 2) {
    number = rotateRightmostDigits(number, count);
    count -= 1;
  }
  return number;
}

function rotateRightmostDigits(number, count) {
  let arr = String(number).split('');
  let idxOfElemToRotate = arr.length - count;
  let elemToRotate = arr.splice(idxOfElemToRotate, 1);
  let resultArray = arr.concat(elemToRotate);

  return Number(resultArray.join(''));
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845

