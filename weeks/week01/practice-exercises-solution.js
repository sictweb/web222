// Possible solution to the Week 01 Practice Exercises.

// ----------------------------------------------------------------------------
// 1. Create a variable `label` and assign it the value `"senecacollege"`.
// Create another variable `tld` and assign it `"ca"`. Create a third variable
// `domainName` that combines `label` and `tld` to produce the value `"senecacollege.ca"`.
let label = "senecacollege";
let tld = "ca";

// We could use + or a template literal:
// let domainName = label + "." + tld;
let domainName = `${label}.${tld}`;

console.log("1.", label, tld, domainName);

// ----------------------------------------------------------------------------
// 2. Create a variable `isSeneca` and assign it a boolean value (`true` or `false`)
// depending on whether or not `domainName` is equal to `"senecacollege.ca"`.
// HINT: use `===` and don't write `true` or `false` directly.
let isSeneca = domainName === "senecacollege.ca";

console.log("2. isSeneca is", isSeneca);

// ----------------------------------------------------------------------------
// 3. Create a variable `isNotSeneca` and assign it the inverse boolean value of
// `isSeneca`.  HINT: if `isSeneca` is `true`, `isNotSeneca` should be `false`.
let isNotSeneca = !isSeneca;

console.log("3. isNotSeneca is", isNotSeneca);

// ----------------------------------------------------------------------------
// 4. Create four variables `byte1`, `byte2`, `byte3`, `byte4`, and assign each
// of these a value in the range `0-255`.
let byte1 = 192;
let byte2 = 168;
let byte3 = 0;
let byte4 = 1;

// We could also have done this in one line using ,
// let byte1 = 192, byte2 = 168, byte3 = 0, byte4 = 1;

console.log("4.", byte1, byte2, byte3, byte4);

// ----------------------------------------------------------------------------
// 5. Convert `byte1` to a `String` using `.toString()`, and `console.log()`
//the result.  What happens if you use `toString(2)` or `toString(16)` instead?
//                String            Binary (base 3)    Hex (base 16)
console.log("5.", byte1.toString(), byte1.toString(2), byte1.toString(16));

// ----------------------------------------------------------------------------
// 6. Create a variable `ipAddress` and assign it the value of combining your
// four `byteN` variables together, separated by `"."`.  For example: `"192.168.2.1"`.
let ipAddress = `${byte1}.${byte2}.${byte3}.${byte4}`;

console.log("6.", ipAddress);

// ----------------------------------------------------------------------------
// 7. Create a variable `ipInt` and assign it the integer value of bit-shifting
// (`<<`) and adding your `byteN` variables.  HINT: your `ipInt` will contain
// 32 bits, the first byte needs to be shifted 24 bit positions (`<< 24`) so it
// occupies 32-25, the second shifted 16, the third 8.
let ipInt = (byte1 << 24) + (byte2 << 16) + (byte3 << 8) + byte4;

console.log("7.", ipInt);

// We can also get each number back again like so:
console.log(
  (ipInt >> 24) & 0xff, // 0xFF is 255 or 11111111
  (ipInt >> 16) & 0xff,
  (ipInt >> 8) & 0xff,
  ipInt & 0xff
);

// ----------------------------------------------------------------------------
// 8. Create a variable `ipBinary` that contains the binary representation of the
// `ipInt` value.  HINT: use `.toString(2)` to display the number with `1` and `0` only.
let ipBinary = ipInt.toString(2);

console.log("8.", ipBinary);

// ----------------------------------------------------------------------------
// 9. Create a variable `statusCode`, and assign it the value for the "I'm a teapot"
// HTTP status code.  HINT: see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
let statusCode = 418; // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418

console.log("9.", statusCode);

// ----------------------------------------------------------------------------
// 10. Write an `If` statement that checks to see if your `statusCode` is a
// `4xx` client error. HINT: use the `<`, `>`, `>=`, and/or `<=` operators to test the value
if (statusCode >= 400 && statusCode <= 499) {
  console.log(`10. statusCode ${statusCode} is a Client Error`);
} else {
  console.log(`10. statusCode ${statusCode} is not a Client Error`);
}

// ----------------------------------------------------------------------------
// 11. Write a `switch` statement that checks your `statusCode` for all possible
// `1xx` information responses.  In each case, you should `console.log()` the
// response text associated with the status code, or `"unknown information response"`
// if the status code is not known.
switch (statusCode) {
  case 100:
    console.log("11. Continue");
    break;
  case 101:
    console.log("11. Switching Protocol");
    break;
  case 102:
    console.log("11. Processing (WebDAV)");
    break;
  case 103:
    console.log("11. Early Hints");
    break;
  default:
    console.log("11. unknown information response");
    break;
}

// ----------------------------------------------------------------------------
// 12. Write a function `is2xx(status)` which takes a status code `status` (e.g., `200`)
// and returns `true` if the status code is a valid 2xx code.
function is200(status) {
  return status >= 200 && status <= 299;
}

console.log(
  "12.",
  200,
  is200(200),
  299,
  is200(299),
  100,
  is200(100),
  250,
  is200(250)
);

// ----------------------------------------------------------------------------
// 13. Create a variable `studentName` and assign it the value `"Alice"`.
// Create another variable `studentAge` and assign it the value `20`. Use `console.log()`
// to print out a sentence that includes both variables, like `"Alice is 20 years old."`.
let studentName = "Alice";
let studentAge = 20;
console.log(`${studentName} is ${studentAge} years old.`);

// ----------------------------------------------------------------------------
// 14. Create a variable `isEven` and assign it a boolean value (`true` or `false`)
// depending on whether a given number `num` is even or not.
// HINT: use the modulus operator `%`.
let num = 10;
let isEven = num % 2 === 0;
console.log(`Is ${num} even? ${isEven}`);

// ----------------------------------------------------------------------------
// 15. Create a variable `isOdd` and assign it the inverse boolean value of `isEven`.
// HINT: if `isEven` is `true`, `isOdd` should be `false`.
let isOdd = !isEven;
console.log(`Is ${num} odd? ${isOdd}`);

// ----------------------------------------------------------------------------
// 16. Create a variable `radius` and assign it a value of `10`. Calculate the
// area of a circle with this radius and assign the result to a variable `area`.
// HINT: use `Math.PI` and the formula `area = πr^2`.
let radius = 10;
let area = Math.PI * Math.pow(radius, 2);
console.log(`The area of a circle with radius ${radius} is ${area}`);

// ----------------------------------------------------------------------------
// 17. Create a variable `temperatureInCelsius` and assign it a value. Convert
// this temperature to Fahrenheit and assign the result to a variable 
// `temperatureInFahrenheit`. HINT: use the formula `F = C * 9/5 + 32`.
let temperatureInCelsius = 20;
let temperatureInFahrenheit = (temperatureInCelsius * 9) / 5 + 32;
console.log(
  `${temperatureInCelsius}°C is equal to ${temperatureInFahrenheit}°F`
);

// ----------------------------------------------------------------------------
// 18. Create a variable `heightInFeet` and assign it a value. Convert this height
// to meters and assign the result to a variable `heightInMeters`.
// HINT: use the conversion factor `1 foot = 0.3048 meters`.
let heightInFeet = 6;
let heightInMeters = heightInFeet * 0.3048;
console.log(`${heightInFeet} feet is equal to ${heightInMeters} meters`);

// ----------------------------------------------------------------------------
// 19. Create a variable `seconds` and assign it a value. Convert this time to
// minutes and seconds (e.g., 90 seconds becomes 1 minute and 30 seconds) and
// assign the result to two variables `minutes` and `remainingSeconds`.
let seconds = 90;
let minutes = Math.floor(seconds / 60);
let remainingSeconds = seconds % 60;
console.log(
  `${seconds} seconds is equal to ${minutes} minutes and ${remainingSeconds} seconds`
);

// ----------------------------------------------------------------------------
// 20. Create a variable `score` and assign it a value. Write an `if` statement
// that checks if the score is an A (90-100), B (80-89), C (70-79), D (60-69),
// or F (below 60) and assigns the result to a variable `grade`.
let score = 85;
let grade;
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else if (score >= 60) {
  grade = "D";
} else {
  grade = "F";
}
console.log(`A score of ${score} is a grade of ${grade}`);

// ----------------------------------------------------------------------------
// 21. Write a `switch` statement that checks the value of a variable `day` and
// `console.log()`s whether it is a weekday or weekend.
// HINT: `day` can be a value from 1 (Monday) to 7 (Sunday).
let day = 5;
switch (day) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Weekday");
    break;
  case 6:
  case 7:
    console.log("Weekend");
    break;
  default:
    console.log("Invalid day");
}

// ----------------------------------------------------------------------------
// 22. Write a function `isPositive(num)` which takes a number `num` and returns
// `true` if the number is positive and `false` otherwise.
function isPositive(num) {
  return num > 0;
}
console.log(`Is 5 positive? ${isPositive(5)}`);

// ----------------------------------------------------------------------------
// 23. Write a function `isLeapYear(year)` which takes a year `year` and
// returns `true` if the year is a leap year and `false` otherwise.
// HINT: a leap year is divisible by 4, but not by 100, unless it is also divisible by 400.
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(`Is 2000 a leap year? ${isLeapYear(2000)}`);

// ----------------------------------------------------------------------------
// 24. Write a function `getDayOfWeek(day)` which takes a number `day` (from 1
// to 7) and returns the day of the week as a string (e.g., "Monday").
function getDayOfWeek(day) {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return days[day - 1];
}
console.log(`The 5th day of the week is ${getDayOfWeek(5)}`);

// ----------------------------------------------------------------------------
// 25. Write a function `getFullName(firstName, lastName)` which takes two
// strings `firstName` and `lastName` and returns the full name as a single string.
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log(`Full name is ${getFullName("John", "Doe")}`);

// ----------------------------------------------------------------------------
// 26. Write a function `getCircleArea(radius)` which takes a number `radius`
// and returns the area of a circle with that radius.
function getCircleArea(radius) {
  return Math.PI * Math.pow(radius, 2);
}
console.log(`The area of a circle with radius 5 is ${getCircleArea(5)}`);

// ----------------------------------------------------------------------------
// 27. Write a function `getHypotenuse(a, b)` which takes two numbers `a` and
// `b` (the lengths of the two sides of a right triangle) and returns the length
// of the hypotenuse. HINT: use the Pythagorean theorem and `Math.sqrt()` to
// calculate the square root.
function getHypotenuse(a, b) {
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}

let hypotenuse = getHypotenuse(3, 4);
console.log(`The hypotenuse of a right triangle with sides 3 and 4 is ${hypotenuse}`);
