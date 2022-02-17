/*
input: array
output: new array

-given a 'matrix' of numbers (3x3),
-return a new matrix (not modifying the original)
-exchange the rows and columns

[1, 5, 8], [0][0], [0][1], [0][2]
[4, 7, 2]  [1][0], [1][1], [1][2]
[3, 9, 6]  [2][0], [2][1], [2][2]

[col][row]

[1, 4, 3] [0][0], [1][0], [2][0]
[5, 7, 9] [0][1], [1][1], [2][1]
[8, 2, 6] [0][2], [1][2], [2][2]

[ [0][0], [0][0] ] 1, 1
[ [0][1], [1][0] ] 4, 5
[ [0][2], [2][0] ] 3, 8
[ [1][1], [1][1] ] 7, 7
[ [1][2], [2][1] ] 9, 2
[ [2][2], [2][2] ] 6, 6


-create a copy of the original array
-iterate through each row
  -iterate through each idx
    -newArr[row][idx] = arr[idx][row]
*/
function transpose(matrix) {
  let resultArr = matrix.map(subArr => subArr.map(elem => elem));
  for (let row = 0; row < resultArr.length; row += 1) {
    for (let idx = 0; idx < resultArr[row].length; idx += 1) {
      resultArr[row][idx] = matrix[idx][row];
    }
  }
  return resultArr;
}

function transposeInPlace(matrix) {
  for (let row = 0; row < matrix.length; row += 1) {
    for (let col = row; col < matrix[row].length; col += 1) {
      [ matrix[row][col], matrix[col][row] ] =
        [ matrix[col][row], matrix[row][col] ];
    }
  }
  return matrix;
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

transposeInPlace(matrix);
console.log(matrix);