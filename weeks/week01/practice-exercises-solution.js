// Possible solution to the Practice Exercises.

// 1. Create a variable `label` and assign it the value `"senecacollege"`.
// Create another variable `tld` and assign it `"ca"`. Create a third variable 
// `domainName` that combines `label` and `tld` to produce the value `"senecacollege.ca"`.
let label = "senecacollege";
let tld = "ca";

// We could use + or a template literal:
// let domainName = label + "." + tld;
let domainName = `${label}.${tld}`;

console.log("1.", label, tld, domainName);

// 2. Create a variable `isSeneca` and assign it a boolean value (`true` or `false`)
// depending on whether or not `domainName` is equal to `"senecacollege.ca"`.
// HINT: use `===` and don't write `true` or `false` directly.
let isSeneca = domainName === "senecacollege.ca";

console.log("2. isSeneca is", isSeneca);

// 3. Create a variable `isNotSeneca` and assign it the inverse boolean value of
// `isSeneca`.  HINT: if `isSeneca` is `true`, `isNotSeneca` should be `false`.
let isNotSeneca = !isSeneca;

console.log("3. isNotSeneca is", isNotSeneca);

// 4. Create four variables `byte1`, `byte2`, `byte3`, `byte4`, and assign each
// of these a value in the range `0-255`.
let byte1 = 192;
let byte2 = 168;
let byte3 = 0;
let byte4 = 1;

// We could also have done this in one line using ,
// let byte1 = 192, byte2 = 168, byte3 = 0, byte4 = 1;

console.log("4.", byte1, byte2, byte3, byte4);

// 5. Convert `byte1` to a `String` using `.toString()`, and `console.log()`
//the result.  What happens if you use `toString(2)` or `toString(16)` instead?
//                String            Binary (base 3)    Hex (base 16)
console.log("5.", byte1.toString(), byte1.toString(2), byte1.toString(16));

// 6. Create a variable `ipAddress` and assign it the value of combining your
// four `byteN` variables together, separated by `"."`.  For example: `"192.168.2.1"`.
let ipAddress = `${byte1}.${byte2}.${byte3}.${byte4}`;

console.log("6.", ipAddress);

// 7. Create a variable `ipInt` and assign it the integer value of bit-shifting
// (`<<`) and adding your `byteN` variables.  HINT: your `ipInt` will contain
// 32 bits, the first byte needs to be shifted 24 bit positions (`<< 24`) so it
// occupies 32-25, the second shifted 16, the third 8.
let ipInt = (byte1 << 24) + (byte2 << 16) + (byte3 << 8) + byte4;

console.log("7.", ipInt);

// We can also get each number back again like so:
console.log(
  (ipInt >> 24) & 0xFF, // 0xFF is 255 or 11111111
  (ipInt >> 16) & 0xFF,
  (ipInt >> 8) & 0xFF,
  ipInt & 0xFF
);

// 8. Create a variable `ipBinary` that contains the binary representation of the
// `ipInt` value.  HINT: use `.toString(2)` to display the number with `1` and `0` only.
let ipBinary = ipInt.toString(2);

console.log("8.", ipBinary);

// 9. Create a variable `statusCode`, and assign it the value for the "I'm a teapot"
// HTTP status code.  HINT: see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
let statusCode = 418; // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418

console.log("9.", statusCode);

// 10. Write an `If` statement that checks to see if your `statusCode` is a
// `4xx` client error. HINT: use the `<`, `>`, `>=`, and/or `<=` operators to test the value
if(statusCode >= 400 && statusCode <= 499) {
  console.log(`10. statusCode ${statusCode} is a Client Error`);
} else {
  console.log(`10. statusCode ${statusCode} is not a Client Error`);
}

// 11. Write a `switch` statement that checks your `statusCode` for all possible
// `1xx` information responses.  In each case, you should `console.log()` the
// response text associated with the status code, or `"unknown information response"`
// if the status code is not known.
switch(statusCode) {
  case 100:
    console.log('11. Continue');
    break;
  case 101:
    console.log('11. Switching Protocol');
    break;
  case 102:
    console.log('11. Processing (WebDAV)');
    break;
  case 103:
    console.log('11. Early Hints');
    break;
  default:
    console.log('11. unknown information response');
    break;
}

// 12. Write a function `is2xx(status)` which takes a status code `status` (e.g., `200`)
// and returns `true` if the status code is a valid 2xx code.
function is200(status) {
  return status >= 200 && status <= 299;
}

console.log("12.", 200, is200(200), 299, is200(299), 100, is200(100), 250, is200(250));
