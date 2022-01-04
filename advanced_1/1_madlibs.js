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
let sentence = "The adjective brown noun adverb verb the adjective yellow
noun, who adverb verb his noun and looks around."

let template = {
  sentence: sentence,
  adjectives: adjectives,
  nouns: nouns,
  verbs: verbs,
  adverbs: adverbs,
}

Algorithm
=========


*/

function madlibs(template) {
  // ...
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