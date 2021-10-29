function getGrade(score1, score2, score3) {
  let average = (score1 + score2 + score3) / 3;
  let grade;

  if (average >= 90 && average <= 100) {
    grade = 'A';
  } else if (average >= 80 && average < 90) {
    grade = 'B';
  } else if (average >= 70 && average < 80) {
    grade = 'C';
  } else if (average >= 60 && average < 70) {
    grade = 'D';
  } else {
    grade = 'F';
  }
  console.log(grade);
}

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"