// 1. Given `r` (radius) of a circle, calculate the area of a circle (A = π * r * r).
function calculateArea(r) {
  return Math.PI * r * r;
}

// 2. Simulate rolling a dice using `random()`.
function roll(sides = 6) {
  return Math.floor(Math.random() * sides) + 1;
}

// 3. Write a function that converts values in Celcius to Farenheit.
function convert(temp, scale = "C") {
  if (scale === "C") {
    return temp * 9/5 + 32 + " F";
  } else if (scale === "F") {
    return (temp - 32) * 5/9 + " C";
  }
}

// 4. Function taking any number of arguments (`Number`s), returning `true` if they are all less than 50.
function isUnder50() {
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] >= 50) {
      return false;
    }
  }
  return true;
}

// 5. Function allowing any number of arguments (`Number`s), returning their sum.
function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

// 6. Function allowing any number of arguments of any type, returns `true` only if none of the arguments is falsy.
function allExist() {
  for (let i = 0; i < arguments.length; i++) {
    if (!arguments[i]) {
      return false;
    }
  }
  return true;
}

// 7. Function to create a JavaScript library name generator.
function generateName(name) {
  return `${name}.js`;
}

// 8. Function to check if a number is a multiple of 3.
function isMultipleOfThree(num) {
  return num % 3 === 0;
}

// 9. Check if a number is between two other numbers.
function checkBetween(num, lower, upper, inclusive = false) {
  return inclusive ? num >= lower && num <= upper : num > lower && num < upper;
}

// 10. Function to calculate the HST (13%) on a purchase amount.
function calculateHST(amount) {
  return amount * 0.13;
}

// 11. Function to subtract a discount % from a total.
function applyDiscount(total, discount = 0) {
  return total - (total * (discount / 100));
}

// 12. Function that takes a number of seconds as a `Number`, returning a `String`.
function formatTime(seconds) {
  const days = Math.floor(seconds / (24 * 60 * 60));
  seconds %= 24 * 60 * 60;
  const hours = Math.floor(seconds / (60 * 60));
  seconds %= 60 * 60;
  const minutes = Math.floor(seconds / 60);
  return `${days} Days, ${hours} Hours, ${minutes} Minutes`;
}

// 13. Modify your solution above to only include units that make sense.
function formatTimeProperly(seconds) {
  const days = Math.floor(seconds / (24 * 60 * 60));
  seconds %= 24 * 60 * 60;
  const hours = Math.floor(seconds / (60 * 60));
  seconds %= 60 * 60;
  const minutes = Math.floor(seconds / 60);
  let result = "";
  if (days > 0) result += `${days} Days, `;
  if (hours > 0) result += `${hours} Hours, `;
  if (minutes > 0) result += `${minutes} Minutes`;
  return result;
}

// 14. Function that takes any number of arguments (`Number`s), and returns them in reverse order.
function flip() {
  let result = "";
  for (let i = arguments.length - 1; i >= 0; i--) {
    result += arguments[i];
  }
  return result;
}

// 15. Function that takes two `Number`s and returns their sum as an `Integer`.
function intSum(num1, num2) {
  return Math.floor(num1 + num2);
}

// 16. Function that returns the number of matches found for the first argument in the remaining arguments.
function findMatches(match) {
  let count = 0;
  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i] === match) {
      count++;
    }
  }
  return count;
}

// 17. Function to log all arguments larger than `255`.
function showOutsideByteRange() {
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > 255) {
      console.log(arguments[i]);
    }
  }
}

// 18. Function that takes a `String` and returns its value properly encoded for use in a URL.
function prepareString(str) {
  return encodeURIComponent(str);
}

// 19. Using the previous function, write an enclosing function that takes any number of `String` arguments.
function buildQueryString() {
  let result = "?";
  for (let i = 0; i < arguments.length; i++) {
    if (i > 0) {
      result += "&";
    }
    result += prepareString(arguments[i]);
  }
  return result;
}

// 20. Function that takes a `Function` followed by any number of `Number`s, and applies the function to all the numbers.
function applyFn(fn) {
  let total = 0;
  for (let i = 1; i < arguments.length; i++) {
    total += fn(arguments[i]);
  }
  return total;
}
