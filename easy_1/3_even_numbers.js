function isEven(num) {
  return num % 2 === 0 ? true : false;
}

let index = 1;

while (index <= 99) {
  if (isEven(index)) {
    console.log(index);
  }
  index += 1;
}