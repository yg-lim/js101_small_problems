/*
Problem
=======
-Given an integer that represents the number of minutes from Midnight,
return a string that shows the respective time in hh:mm format.

Input: Integer (negative or positive)
Output: String (hh:mm format)

Explicit Rules:
  -Cannot use built-in Javascript Date methods
  -Negative is before midnight
  -Positive is after midnight

Implicit Rules:
  -0 returns 00:00

Examples
========
Below

Data structure
==============
N/A

Algorithm
=========
-Given minutes argument
-Set `hh` to 0;
-Set `mm` to 0;

-Set numberOfHours = Math.trunc(minutes / 60);
  -if numberOfHours > 24, then numberOfHours %= 24
-Set numberOfMinutes = minutes % 60;

-If numberOfHours is a negative number,
  -set -1 as the index
  -While index is greater than numberOfHours
    -Subtract 1 from hh
      -If hh < -24 then set hh to 0
    -index =- 1
}
*/
const HOURS_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;

function calculateNumOfHours(minutes) {
  let numberOfHours = Math.trunc(minutes / MINUTES_PER_HOUR);
  if (Math.abs(numberOfHours) > HOURS_PER_DAY) {
    numberOfHours %= HOURS_PER_DAY;
  }
  return numberOfHours;
}

function calculateHour(numberOfHours) {
  let hh = 0;

  if (numberOfHours < 0) {
    for (let idx = -1; idx >= numberOfHours; idx -= 1) {
      hh -= 1;
      if (hh < 0) {
        hh = HOURS_PER_DAY - 1;
      }
    }
  } else if (numberOfHours > 0) {
    for (let idx = 1; idx <= numberOfHours; idx += 1) {
      hh += 1;
      if (hh > HOURS_PER_DAY - 1) {
        hh = 0;
      }
    }
  }
  return hh;
}

function calculateMinutes(minutes) {
  return minutes % MINUTES_PER_HOUR;
}

function timeOfDay(minutes) {
  let hh = calculateHour(calculateNumOfHours(minutes));
  let mm = calculateMinutes(minutes);

  if (mm < 0) {
    hh -= 1;
    if (hh < 0) {
      hh = HOURS_PER_DAY - 1;
    }
    mm += MINUTES_PER_HOUR;
  }

  let result = `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}`;
  return result;
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");