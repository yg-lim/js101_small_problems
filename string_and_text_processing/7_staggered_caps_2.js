function isAlphabeticChar(char) {
  return (char >= "A" && char <= "Z") || (char >= "a" && char <= "z");
}

function toggleCapitalizeChar(boolean) {
  return !boolean;
}

function staggeredCase(string) {
  let capitalizeChar = true;
  let arr = string.split('');

  for (let idx = 0; idx < arr.length; idx += 1) {
    if (isAlphabeticChar(arr[idx])) {
      if (capitalizeChar) {
        arr[idx] = arr[idx].toUpperCase();
        capitalizeChar = toggleCapitalizeChar(capitalizeChar);
      } else {
        arr[idx] = arr[idx].toLowerCase();
        capitalizeChar = toggleCapitalizeChar(capitalizeChar);
      }
    }
  }
  return arr.join('');
}

staggeredCase("I Love Launch School!");

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);