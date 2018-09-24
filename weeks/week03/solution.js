/**
 * Week 3 - A Larger Example (String, Array, RegExp):
 * 
 * A sample solution to exercise.js
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
