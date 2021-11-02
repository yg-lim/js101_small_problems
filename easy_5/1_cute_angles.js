/*
Problem
=======
Given a floating point number that represents an angle between 0 and 360 degrees
(inclusive), return a string that represents that angle in Degrees (°), Minutes (') 
and Seconds ("). There are 60 minutes in a degree, and 60 seconds in a minute.

Input: Floating point number
Output: String

Explicit Rules:
  -Given a floating value, return a string that represents the same value
  in different denominations.
  -60 minutes in a degree(hour?), 60 seconds in a minute.
  -Use the corresponding characters in the string

Implicit Rules:
  -0 will return 0
  -360 will return 360 OR 0

Examples
========
Below

Data structure
==============
30 Degrees -> 30°00'00"

76.73 Degrees -> 76 hours + 73% of an hour
                 73% of an hour = 43 minutes + 80% of a minute
                 80% of a minute = 48 seconds
                 = 76°43'48"

360 Degrees -> 360 hours

Algorithm
=========
-Set PERCENTAGE_TO_HOURS to 60
-Set PERCENTAGE_TO_MINUTES to 60
-Set result to String(degrees, hours, minutes), with enough 0's before
hours and minutes to make the length 2 each
-Set degrees, hours, minutes to 0

-Set the whole numbers of the digits to variable `degrees`
-If there are no decimals, print result
-Set the decimal points (up to 2 digits) to a variable `percentageOfHours`
-Multiply percentageOfHours by PERCENTAGE_TO_HOURS and save to `hours`

-Set the whole numbers of the digits to variable `hours`
If there are no decimals, print result
-Set the decimals of the digits to variable `percentageOfMinutes`
-Multiply `percentageOfMinutes` by PERCENTAGE_TO_MINUTES and save to `minutes`

*/
function dms(float) {
  const PERCENTAGE_TO_HOURS_OR_MINUTES = 60;
  let degrees = 0;
  let hours = 0;
  let minutes = 0;
  
  degrees = Math.trunc(float);

  let percentageOfHours = float - degrees;
  hours = percentageOfHours * PERCENTAGE_TO_HOURS_OR_MINUTES;

  let percentageOfMinutes = hours - Math.trunc(hours);
  minutes = percentageOfMinutes * PERCENTAGE_TO_HOURS_OR_MINUTES;
  
  let result = `${degrees}°${String(Math.trunc(hours))
    .padStart(2, '0')}'${String(Math.trunc(minutes))
    .padStart(2, '0')}"`;
  return result;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"