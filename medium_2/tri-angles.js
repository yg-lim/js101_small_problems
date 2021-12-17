function isValidTriangle(arrOfAngles) {
  const TOTAL_DEGREES_IN_VALID_TRIANGLE = 180;
  return arrOfAngles.reduce((a, b) => a + b, 0) ===
    TOTAL_DEGREES_IN_VALID_TRIANGLE && !arrOfAngles.includes(0);
}

function classifyTriangle(arrOfAngles) {
  if (arrOfAngles.every(angle => angle < 90)) {
    return 'acute';
  } else if (arrOfAngles.includes(90)) {
    return 'right';
  } else {
    return 'obtuse';
  }
}

function triangle(deg1, deg2, deg3) {
  let arrOfAngles = [deg1, deg2, deg3];

  if (isValidTriangle(arrOfAngles)) {
    return classifyTriangle(arrOfAngles);
  } else {
    return 'invalid';
  }
}

triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"