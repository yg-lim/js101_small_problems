function leadingSubstrings(str) {
  let substrings = [];
  let strLength = str.length;

  for (let idx = 1; idx <= strLength; idx += 1) {
    substrings.push(str.slice(0, idx));
  }
  return substrings;
}

// function substrings(str) {
//   let allSubstrings = [];

//   for (let idx = 0; idx < str.length; idx += 1) {
//     allSubstrings.push(leadingSubstrings(str.slice(idx)));
//   }

//   console.log(allSubstrings.flat());
//   return allSubstrings.flat();
// }


function substrings(str) {
  let substrings = str.split('').map((_, idx) => {
    return leadingSubstrings(str.slice(idx));
  });
  console.log(substrings.flat());
  return substrings.flat();
}

/*
[e]
[d, e]
[c, d, e]
[b, c, d, e]
[a, b, c, d, e]

[a, b, c, d, e]
[b, c, d, e]
[c, d, e]
[d, e]
[e]
*/

substrings('abcde');

/*
returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
*/