const readline = require('readline-sync');
const SQ_METERS_TO_SQ_FEET = 10.7639;

console.log("Enter the input type METERS or FEET:")
let inputType = readline.question().trim().toUpperCase();

console.log("Enter the length of the room in meters:");
let length = readline.question();
length = parseInt(length, 10);

console.log("Enter the width of the room in meters:")
let width = readline.question();
width = parseInt(width, 10);

if (inputType === "METERS") {
  let areaInMeters = length * width;
  let areaInSqFt = areaInMeters * SQ_METERS_TO_SQ_FEET;
  console.log(`The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInSqFt.toFixed(2)} square feet).`);
} else if (inputType === "FEET") {
  let areaInSqFt = length * width;
  let areaInMeters = areaInSqFt / SQ_METERS_TO_SQ_FEET;
  console.log(`The area of the room is ${areaInSqFt.toFixed(2)} square feet (${areaInMeters.toFixed(2)} square meters).`);
}

