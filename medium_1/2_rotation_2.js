/*
p:
input:
-integer (number), integer (count)
output:
-integer (number)

rules:
-write a f'n that rotates the nth digit from the right to the end
-a single rotation is moving the nth digit from the right, and
appending it to the end of the number

eg: below

ds:
735291, length = 6

735291, 1 => 735291
735291, 2 => 735219, removed idx 4
735291, 3 => 735912, removed idx 3
735291, 4 => 732915, removed idx 2
..
735291, 6 => 735291, removed idx 0

idx of element to remove = length - count

algo:
-take the input number, convert into string, split it into an array
-remove the element at array.length - count arg
-append removed element to end of array
-convert array back into number
-return number
*/
function rotateRightmostDigits(number, count) {
  let arr = String(number).split('');
  let idxOfElemToRotate = arr.length - count;
  let elemToRotate = arr.splice(idxOfElemToRotate, 1);
  let resultArray = arr.concat(elemToRotate);

  return Number(resultArray.join(''));
}

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917