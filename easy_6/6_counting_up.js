function sequence(number) {
  let array = [];

  while (number > 0) {
    array.unshift(number);
    number -= 1;
  }
  return array;
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]