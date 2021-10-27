function greetings (arr, obj) {
  let fullName = arr.join(' ');
  let fullTitle = Object.values(obj).join(' ');

  return `Hello, ${fullName}! Nice to have a ${fullTitle} around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.