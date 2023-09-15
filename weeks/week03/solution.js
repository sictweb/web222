/**
 * Week 3 - A Larger Example (String, Array, RegExp):
 * 
 * A sample solution to exercise.js
 */

// Multi-Line Template Literal to wrap the CSV data
let csvData = `0134134,John Smith,555-567-2341,62 inches
0134135   ,    June    Lee    ,  5554126347 ,        149 cm
0134136,       Kim Thomas       , 5324126347, 138cm`;

// Split the csv String on newlines, which could be \r\n (Windows) or just \n (Unix)
function splitIntoRows(csv) {
    let newlineRegex = /\r?\n/;
    return csv.split(newlineRegex);
}

// Split the row String on whitespace (none, or many), followed by a "," followed by more whitespace (or none).
function splitIntoFields(row) {
    let commaWithWhitespaceRegex = /\s*,\s*/;
    return row.split(commaWithWhitespaceRegex);
}

// Replace 2 or more whitespace characters in a row with a single space
function formatName(name) {
    let extraWhitespaceRegex = /\s{2,}/;
    let singleWhitespace = ' ';
    return name.replace(extraWhitespaceRegex, singleWhitespace);
}

// Extract the area code (first 3 digits) and return separate from rest of phone number.
function findAreaCode(phoneNumber) {
    let phoneNumberRegex = /(\d{3})-?\d{3}-?\d{4}/;
    let matches = phoneNumber.match(phoneNumberRegex);
    let areaCode = matches[1] || 'No Area Code';
    return areaCode;
}

function getHeightInInches(height) {
    // If the height is already in inches, we're done, and can return it back again.
    if(height.endsWith('inches')) {
        return height;
    }

    // Otherwise, it's a number in cm, so change into a Number (ignoring the "cm" bit)
    // then convert to inches (with 2 decimal places) and add "inches" before returning.
    let heightCM = parseFloat(height);
    let heightInches = (heightCM * 0.39).toFixed(2);
    return `${heightInches} inches`;
}

function processCSV(csv) {
    // Step 1.
    let rows = splitIntoRows(csv);

    let processedRows = rows.map(function(row) {
        // Step 2.
        let [id, name, areaCode, height] = splitIntoFields(row);

        // Step 3.
        name = formatName(name);

        // Step 4.
        areaCode = findAreaCode(areaCode);

        // Step 5.
        let heightInInches = getHeightInInches(height);

        // Step 6.
        return [id, name, areaCode, heightInInches].join(',');
    });

    // Step 7.
    return processedRows.join('\n');
}

let processed = processCSV(csvData);
console.log(processed);
