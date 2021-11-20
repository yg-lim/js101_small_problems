/*
iterate through the string,
if character is lowercase,
*/

function letterCaseCount(str) {
  let count = { lowercase: 0, uppercase: 0, neither: 0 };

  for (let idx = 0; idx < str.length; idx += 1) {
    if (str[idx] >= "A" && str[idx] <= "Z") {
      count['uppercase'] += 1;
    } else if (str[idx] >= "a" && str[idx] <= "z") {
      count['lowercase'] += 1;
    } else {
      count['neither'] += 1;
    }
  }
  return count;
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }