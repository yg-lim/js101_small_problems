function wordCap(str) {
  return str.replace(/\b[a-z]/g, function replacer(match) {
    return match.toUpperCase();
  });
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'