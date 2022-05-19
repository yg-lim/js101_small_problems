function transpose(matrix) {
  /*
  input:
    - nested array of nums
    - can differ in col/row (MxN)

  output:
    - new nested arr of nums
    - do not mutate input matrix

  rules:
    - transposed:
      - rows exchanged with cols

  [
    [1, 2, 3, 4]
  ]
  [0][1], [0][2], [0][3], [0][4]
  [1][0], [2][0], [3][0], [4][0]
  [
    [1],
    [2],
    [3],
    [4]
  ]

  let result = [];

  [                [
    [1, 5, 8, 5], => [1, 4, 3]
    [4, 7, 2, 0], => [5, 7, 9]
    [3, 9, 6, 1], => [8, 2, 6]
                  => [5, 0, 1]
  ]                ]
  x = 4, y = 3 | y = 4, x = 3

  [[], [], []] => [[], [], [], []]
  [[], [], [], []] => [[1, 4, 3], [], []]
  idx = 0, idy = 0
  result[idx][idy] = matrix[idy][idx]


  let result = [];
  matrix[0].forEach(elem => result.push([]));

  [[1, 2, 3, 4]] => [[], [], [], []] => [[1], [2], [3], [4]]
  [[1], [2], [3], [4]] => [[]] => [[1, 2, 3, 4]]
  [[1]] => [[]] => [[1]]

  - create result empty array
  - create template array within result that matches tranposed array dimensions
  - iterate through matrix and push nums into result in transposed positions
    (idx = 0, idx < matrix.length; idx += 1)
    (idy = 0, idy < matrix[idx].length; idy += 1)
      -result[idx][idy] = matrix[idy][idx]
  - return the result
  */

  let result = [];
  matrix[0].forEach(_ => result.push([]));

  for (let idx = 0; idx < matrix.length; idx += 1) {
    for (let idy = 0; idy < matrix[idx].length; idy += 1) {
      result[idy][idx] = matrix[idx][idy];
    }
  }
  return result;
}

const matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
console.log(matrix);         // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]