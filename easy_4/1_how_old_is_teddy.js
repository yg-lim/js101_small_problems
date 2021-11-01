function getRandomIntegerBetween(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.ceil(Math.random() * (max - min) + min);
}

console.log(getRandomIntegerBetween(20, 120));

let age = getRandomIntegerBetween(20, 120);

while (age !== 120) {
  age = getRandomIntegerBetween(20, 120);
  console.log(age);
}