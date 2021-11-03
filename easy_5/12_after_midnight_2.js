/*
Problem
=======
Given a string that represents the time, return a number that represents
the minutes elapsed after or before midnight.

Input: String of numbers
Output: Positive integer

Explicit Rules
  -Output should be integer between 0 and 1439
  -Cannot use Javascripts built-in Time methods

Implicit Rules
  -24:00 is the same as 00:00, or 0 minutes

Examples
========
Below

Data structure
==============
const MINUTES_PER_HOUR = 60;
hh * MINUTES_PER_HOUR = minutes
minutes + mm = total minutes since midnight
1440 - midnights = minutes before midnight
1440 = 0
1439 = 23:59

"00:00"


Algorithm
=========
-Set MINUTES_PER_HOUR to 60
-Given the string, split it into two separated by the colon
-Set the hours to `hh`, set the minutes to `mm`
-Set `minutes` to hh multiplied by MINUTES_PER_HOUR plus mm
-Print minutes
*/
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY;

function afterMidnight(string) {
  const time = string.split(':');
  const hh = Number(time[0]);
  const mm = Number(time[1]);

  let minutes = (hh * MINUTES_PER_HOUR) + mm;
  if (minutes === MINUTES_PER_DAY) {
    minutes = 0;
  }
  return minutes;
}

function beforeMidnight(string) {
  return afterMidnight(string) === 0 ?
    0 : MINUTES_PER_DAY - afterMidnight(string);
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);