// Object to provide lookup of morse code (value) for a given letter (key).
let alpha = {
    A: '.-',
    B: '-...',
    C: '-.-.',
    D: '-..',
    E: '.',
    F: '..-.',
    G: '--.',
    H: '....',
    I: '..',
    J: '.---',
    K: '-.-',
    L: '.-..',
    M: '--',
    N: '-.',
    O: '---',
    P: '.--.',
    Q: '--.-',
    R: '.-.',
    S: '...',
    T: '-',
    U: '..-',
    V: '...-',
    W: '.--',
    X: '-..-',
    Y: '-.--',
    Z: '--..',
    ' ': '/'
};

// Object to provide lookup of letter (value) for a given morse code (key).
let morse = {
    '.-': 'A',
    '-...': 'B',
    '-.-.': 'C',
    '-..': 'D',
    '.': 'E',
    '..-.': 'F',
    '--.': 'G',
    '....': 'H',
    '..': 'I',
    '.---': 'J',
    '-.-': 'K',
    '.-..': 'L',
    '--': 'M',
    '-.': 'N',
    '---': 'O',
    '.--.': 'P',
    '--.-': 'Q',
    '.-.': 'R',
    '...': 'S',
    '-': 'T',
    '..-': 'U',
    '...-': 'V',
    '.--': 'W',
    '-..-': 'X',
    '-.--': 'Y',
    '--..': 'Z',
    '/': ' '
};

// Return `true` if all characters are morse code.  Use a RegExp. 
function isMorse(characters) {
    return /^[.\- /]*$/.test(characters);
}

// Return `true` if all characters are part of the alphabet defined in `alpha`.  Use a RegExp.
function isAlpha(characters) {
    return /^[A-Z ]*$/.test(characters);
}

// Given an alphabet message, convert and return in morse code.  Use your morse and/or alpha object.
// Return undefined if text is not alpha.
function textToMorse(text) {
    function convertWordToMorse(word) {
        let morse = '';
        let letter;

        // Loop across all letters in the word, convert to morse, and build a new string
        for(const letter of word) {
            // Look up the morse value for this, by using the letter as a key into the alpha object.
            // Each morse "letter" has a space after it.
            morse += alpha[letter] + ' ';
        }
        
        // Return this new morse string, removing the extra trailing whitespace
        return morse.trim();
    }

    // turn text into UPPER CASE (if not already)
    text = text.toUpperCase();
    
    // Split into separate words (break on spaces)
    words = text.split(' ');

    // Run each word through convertWordToMorse and build a new array
    let morse = words.map(function(word) {
        return convertWordToMorse(word);
    });

    // Return a string of all words converted to morse, joined by /
    return morse.join('/');
}

// Given a morse code message, convert and return in text.  Use your morse and/or alpha object.
// Return undefined if morse is not proper code.
function morseToText(data) {
    function convertMorseToWord(morseWord) {
        // Each morse letter is sparated by a space. Convert to an array.
        morseWord = morseWord.split(' ');

        // Build a new array by looking up each morse letter in the morse object, join together
        // into a string, and return.
        let letters = morseWord.map(function(morseLetter) {
            return morse[morseLetter];
        });

        return letters.join('');
    }

    // Split the morse into separate words (/ is the separator)
    let morseWords = data.split('/');

    // Go through each morse word, and convert into alpha, building a new array.
    let words = morseWords.map(function(morseWord) {
        return convertMorseToWord(morseWord);
    });

    return words.join(' ');
}

// Constructor function that takes a `message` (String), which can be either morse or alpha.
// Use your functions above to decide how to store a value for `any` on `this`  
class Message {
    text;

    constructor(text) {
        // Store the value as UPPER CASE, since our objects work that way.
        this.text = text.toUpperCase();
    }

    // Return the message as morse code, converting if necessary
    toMorse() {
        if(isMorse(this.text)) { 
            return this.text;
        }

        return textToMorse(this.text);
    }

    // Return the message as alpha characters, converting if necessary
    toAlpha() {
        if(isAlpha(this.text)) {
            return this.text;
        }
        
        return morseToText(this.text);
    }
}


let msg1 = new Message('--- -... .--- . -.-. - .../.. -./.--- .- ...- .- ... -.-. .-. .. .--. -/.- .-. ./...- . .-. -.--/.--. --- .-- . .-. ..-. ..- .-..');
console.log(msg1.toAlpha());
console.log(msg1.toMorse());

let msg2 = new Message('I am learning how to use Objects in JavaScript');
console.log(msg2.toMorse());
console.log(msg2.toAlpha());
