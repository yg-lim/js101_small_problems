function letterCaseCount(str) {
  /*
  input:
    - string
  output:
    - object with 3 properties: lowercase, uppercase, neither
  */
  let result = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };

  for (let idx = 0; idx < str.length; idx += 1) {
    let currentChar = str[idx];
    if (currentChar.match(/[A-Z]/)) result.uppercase += 1;
    if (currentChar.match(/[a-z]/)) result.lowercase += 1;
    if (currentChar.match(/[\d\W]/)) result.neither += 1;
  }
  console.log(result);
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }