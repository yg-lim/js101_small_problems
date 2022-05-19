function madlibs(template) {
  /*
  input:
    -template (object?)
  output:
    -string

  {
    sentence: 'The adjective brown noun adverb verb the
    adjective yellow noun, who adverb verb his noun and
    looks around.',
    adjectives: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
    nouns: ['fox', 'dead', 'head', 'leg', 'tail', 'cat'],
    verbs: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
    adverbs: ['easily', 'lazily', 'noisily', 'excitedly'],
  }

  -take the string in `sentence` property of the template
  -split into an array of words
  -iterate through the words,
    -if the current word is a property of the template,
    -replace the word with a random word from the property of the template
  -return the new string
  */

  let sentence = template.sentence;
  console.log(sentence.replace(/(noun|verb|adverb|adjective)/g, getWord));

  function getWord(match) {
    let idx = Math.floor(Math.random() * template[match].length);
    return template[match][idx];
  }
}

let template1 =   {
  sentence: 'The adjective brown noun adverb verb the adjective yellow noun, who adverb verb his noun and looks around.',
  adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
  noun: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
  verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
  adverb: ['easily', 'lazily', 'noisily', 'excitedly'],
};

let template2 =   {
  sentence: `The noun verb the noun's noun`,
  adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
  noun: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
  verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
  adverb: ['easily', 'lazily', 'noisily', 'excitedly'],
};

// These examples use the following list of replacement texts:
// adjectives: quick lazy sleepy noisy hungry
//nouns: fox dog head leg tail cat
// verbs: jumps lifts bites licks pats
// adverbs: easily lazily noisily excitedly
// ------

madlibs(template1);
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

madlibs(template1);
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

madlibs(template2);      // The "fox" "bites" the "dog"'s "tail".

madlibs(template2);      // The "cat" "pats" the "cat"'s "head".