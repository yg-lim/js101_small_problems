function leadingSubstrings(str) {
  let substrings = [str];

  str.split('').reduce((accum, val) => {
    substrings.push(accum);
    return accum + val;
  });
  return substrings.sort((a, b) => a.length - b.length);
}

function substrings(str) {
  let substrings = str.split('').map((_, idx) => {
    return leadingSubstrings(str.slice(idx));
  });
  return substrings.flat();
}

function palindromes(str) {
  let palindromes = substrings(str).filter(word => {
    return word.length > 1 && word === word.split('').reverse().join('');
  });
  console.log(palindromes);
  return palindromes;
}

palindromes('abcd');
palindromes('madam');
palindromes('hello-madam-did-madam-goodbye');
palindromes('knitting cassettes');