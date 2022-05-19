function transpose(matrix) {
  /*
  // further exploration
  input:
    - nested array of nums
  output:
    - same nested array of nums

  rules:
    - tranpose the 3x3 matrix
      - exchange rows & columns of input matrix

  [
    [1, 5, 8] => [1, 4, 3]
    [4, 7, 2] => [5, 7, 9]
    [3, 9, 6] => [8, 2, 6]
  ]

  [
    [0,0][0,1][0,2] => [0,0][1,0][2,0]
    [1,0][1,1][1,2] => [0,1][1,1][2,1]
    [2,0][2,1][2,2] => [0,2][1,2][2,2]
  ]
  [
    [00][  ][  ]
    [  ][11][  ]
    [  ][  ][22]
  ]

  [0,0] => [0,0]
  [0,1] => [1,0]
  [0,2] => [2,0]

  [1,1] => [1,1]
  [1,2] => [2,1]

  [2,2] => [2,2]

  x = 0
    y = 0, y = 1, y = 2
  x = 1
    y = 1, y = 2
  x = 2
   y = 2

  iterate through the outer array (idx = 0; idx < 3)
    iterate through the inner array (idy = idx; idy < 3)
      [ result[idx][idy], result[idy][idx]
  */

  for (let idx = 0; idx < matrix.length; idx += 1) {
    for (let idy = idx; idy < matrix[idx].length; idy += 1) {
      [matrix[idx][idy], matrix[idy][idx]] =
        [matrix[idy][idx], matrix[idx][idy]];
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