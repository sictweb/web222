/**
 * Week 3 - A Larger Example (String, Array, RegExp):
 * 
 * Write a series of functions to accomplish the following, building a larger program as you go:
 * 
 * 1. Split the string into an `Array` of separate rows (i.e., an `Array` with rows separated by `\n`).
 *    Bonus: how could we deal with data that includes both Unix (`\n`) and Windows (`\r\n`) line endings?
 * 
 * 2. Each row contains information user info: `ID`, `Name`, `Phone Number`, and `Height` info all separated by commas.
 *    Split each row into an `Array` with all of its different fields.  You need to deal with extra and/or no
 *    whitespace between the commas.
 * 
 * 3. Get rid of any extra spaces around the `Name` field
 * 
 * 4. Using a `RegExp`, extract the Area Code from the `Phone Number` field.  All `Phone Number`s are in one of two
 *    formats: `"555-555-5555"` or `"5555555555"`.
 * 
 * 5. Check if the `Height` field has `"cm"` at the end.  If it does, strip that out, convert the number to inches,
 *    and turn it into a `String` in the form `"xx inches"`.  For example: `"152 cm"` should become `"59 inches"`.  
 * 
 * 6. After doing all of the above steps, create a new record with `ID`, `Name`, `Area Code`, `Height In Inches`
 *    and separate them with commas.
 * 
 * 7. Combine all these processed records into a new CSV formatted string, with rows separated by `\n`.
 * 
 * Sample Data:
 * 
 * ```
 * 0134134,John Smith,555-567-2341,62 inches\n
 * 0134135   ,    June    Lee    ,  5554126347 ,        149 cm\n
 * 0134136,       Kim Thomas       , 5324126347, 138cm\n
 * ```
*/

// Multi-Line Template Literal to wrap the CSV data
var csvData = `0134134,John Smith,555-567-2341,62 inches
0134135   ,    June    Lee    ,  5554126347 ,        149 cm
0134136,       Kim Thomas       , 5324126347, 138cm`;

// Split the csv String on newlines, which could be \r\n (Windows) or just \n (Unix)
function splitIntoRows(csv) {
    var newlineRegex = /\r?\n/;
    return csv.split(newlineRegex);
}

// Split the row String on whitespace (none, or many), followed by a "," followed by more whitespace (or none).
function splitIntoFields(row) {
    var commaWithWhitespaceRegex = /\s*,\s*/;
    return row.split(commaWithWhitespaceRegex);
}

// Replace 2 or more whitespace characters in a row with a single space
function formatName(name) {
    var extraWhitespaceRegex = /\s{2,}/;
    var singleWhitespace = ' ';
    return name.replace(extraWhitespaceRegex, singleWhitespace);
}

// Extract the area code (first 3 digits) and return separate from rest of phone number.
function findAreaCode(phoneNumber) {
    var phoneNumberRegex = /(\d{3})-?\d{3}-?\d{4}/;
    var matches = phoneNumber.match(phoneNumberRegex);
    var areaCode = matches[1] || 'No Area Code';
    return areaCode;
}

function getHeightInInches(height) {
    // If the height is already in inches, we're done, and can return it back again.
    if(height.endsWith('inches')) {
        return height;
    }

    // Otherwise, it's a number in cm, so change into a Number (ignoring the "cm" bit)
    // then convert to inches (with 2 decimal places) and add "inches" before returning.
    var heightCM = parseFloat(height);
    var heightInches = (heightCM * 0.39).toFixed(2);
    return heightInches + ' inches';
}

function processCSV(csv) {
    // Step 1.
    var rows = splitIntoRows(csv);

    var processedRows = rows.map(function(row) {
        // Step 2.
        var fields = splitIntoFields(row);

        var id = fields[0];

        // Step 3.
        var name = formatName(fields[1]);

        // Step 4.
        var areaCode = findAreaCode(fields[2]);

        // Step 5.
        var heightInInches = getHeightInInches(fields[3]) 

        // Step 6.
        return [id, name, areaCode, heightInInches].join(',');
    });

    // Step 7.
    return processedRows.join('\n');
}

var processed = processCSV(csvData);
console.log(processed);
