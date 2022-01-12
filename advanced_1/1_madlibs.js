/*
Problem
=======
Input: Object
Output: String

Rules:
-Single argument passed into function outputs string with
template but interchangeable words
-Interchangeable words are randomized from curated list
-Template determines sentence template + interchangeable words
-Function invoked with same template can yield different
strings because of randomization
-Interchangeable words can be repeated within the sentence

Examples
========
Below

Data structure
==============
sentence = "The adjective brown noun adverb verb the adjective yellow
noun, who adverb verb his noun and looks around."

let adjectives = ["quick", "lazy", "sleepy", "noisy", "hungry"];
let nouns = ["fox", "dog", "head", "leg", "tail", "cat"];
let verbs = ["jumps", "lifts", "bites", "licks", "pats"];
let adverbs = ["easily", "lazily", "noisily", "excitedly"];
let sentence =
`The ${getWord(adjectives)} brown ${getWord(nouns)} ${getWord(adverbs)} ` +
`${getWord(verbs)}the ${getWord(adjectives)} yellow ${getWord(nouns)}, ` +
`who ${getWord(adverbs)} ${getWord(verbs)} his ${getWord(nouns)} and ` +
`looks around.`

noun = nouns[Math.floor(Math.random() * nouns.length)]
let sentence = `The adjective brown noun adverb verb the adjective yellow
noun, who adverb verb his noun and looks around.`

function getWord(type) {
  return type[Math.floor(Math.random() * type.length)];
}

const template = {
  adjectives: ["quick", "lazy", "sleepy", "noisy", "hungry"],
  nouns: ["fox", "dog", "head", "leg", "tail", "cat"],
  verbs: ["jumps", "lifts", "bites", "licks", "pats"],
  adverbs: ["easily", "lazily", "noisily", "excitedly"],
  getWordFrom: function (type) {
    let idx = Math.floor(Math.random() * this[type].length);
    return this[type][idx];
  },
  sentence: function() {
    return `The ${this.getWordFrom('adjectives')} brown ` +
    `${this.getWordFrom('nouns')} ${this.getWordFrom('adverbs')} ` +
    `${this.getWordFrom('verbs')} the ${this.getWordFrom('adjectives')} ` +
    `yellow ${this.getWordFrom('nouns')}, who ${this.getWordFrom('adverbs')} ` +
    `${this.getWordFrom('verbs')} his ${this.getWordFrom('nouns')} and ` +
    `looks around.`
  }
}

Algorithm
=========
n/a

*/
const template1 = {
  adjectives: ["quick", "lazy", "sleepy", "noisy", "hungry"],
  nouns: ["fox", "dog", "head", "leg", "tail", "cat"],
  verbs: ["jumps", "lifts", "bites", "licks", "pats"],
  adverbs: ["easily", "lazily", "noisily", "excitedly"],
  getWordFrom: function(type) {
    let idx = Math.floor(Math.random() * this[type].length);
    return this[type][idx];
  },
  sentence: function() {
    return `The ${this.getWordFrom('adjectives')} brown ` +
    `${this.getWordFrom('nouns')} ${this.getWordFrom('adverbs')} ` +
    `${this.getWordFrom('verbs')} the ${this.getWordFrom('adjectives')} ` +
    `yellow ${this.getWordFrom('nouns')}, who ${this.getWordFrom('adverbs')} ` +
    `${this.getWordFrom('verbs')} his ${this.getWordFrom('nouns')} and ` +
    `looks around.`;
  }
};
// The "fox" "bites" the "dog"'s "tail".
const template2 = {
  nouns: ["fox", "dog", "cat", "tail", "head"],
  verbs: ["bites", "pats"],
  getWordFrom: function(type) {
    let idx = Math.floor(Math.random() * this[type].length);
    return this[type][idx];
  },
  sentence: function() {
    return `The ${this.getWordFrom('nouns')} ${this.getWordFrom('verbs')} ` +
    `the ${this.getWordFrom('nouns')}'s ${this.getWordFrom('nouns')}`;
  },
};

function madlibs(template) {
  console.log(template.sentence());
}

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