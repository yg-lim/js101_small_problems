function rotate90(matrix) {
  /*
  input:
    - array of nums
  output:
    - new array of nums
    - do not mutate original input

  rules:
    - rotate 90

  [
    [1, 5, 8], => [3, 4, 1],
    [4, 7, 2], => [9, 7, 5],
    [3, 9, 6], => [6, 2, 8],
  ]

  [[1,5,8],[4,7,2],[3,9,6]] => [[        ],[        ],[        ]]
                            => [[20,10,00],[21,11,01],[22,12,02]]
                            => input0,0 => output0,2
                            => input0,1 => output1,2
                            => input0,2 => output2,2
                            => input1,0 => output0,1
                            => input1,1 => output1,1
                            => input1,2 => output2,1
                            => input2,0 => output0,0
                            => input2,1 => output1,0
                            => input2,2 => output2,0
                            => x = 0, y = 1
  [
    [3, 7, 4, 2] => [5, 3]
    [5, 1, 0, 8] => [1, 7]
  ]              => [0, 4]
                 => [8, 2]

  [[3,7,4,2],[5,1,0,8]] => [[     ],[     ],[     ],[     ]]
                        => [[10,00],[11,01],[12,02],[13,03]]
                        => input0,0 = output0,1
                        => input0,1 = output1,1
                        => input0,2 = output2,1
                        => input0,3 = output3,1

                        => input1,0 = output0,0
                        => input1,1 = output1,0
                        => input1,2 = output2,0
                        => input1,3 = output3,0

                        x = 0
                        y = 0

  - create result array
  - create template array within result to match transposed array
  - iterate through the matrix array
    (idx = 0, idxAlt = matrix.length - 1, x += 1, idxAlt -=1)
    -iterate through the matrix sub array
    (idy = 0, idy < matrix[idx].length; idy += 1)
      result[idy][idxAlt] = matrix[idx][idy]

  -return result
  */
  let result = [];
  matrix[0].forEach(_ => result.push([]));

  let idx = 0;
  let idxAlt = matrix.length - 1;

  while (idx < matrix.length) {
    let idy = 0;
    while (idy < matrix[idx].length) {
      result[idy][idxAlt] = matrix[idx][idy];
      idy += 1;
    }
    idx += 1;
    idxAlt -= 1;
  }
  return result;
}

let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]