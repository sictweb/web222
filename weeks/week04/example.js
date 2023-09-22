// Morse Code character map (format is LETTER=MORSE,LETTER=MORSE,...)
let characters = 'A=.-,B=...,C=-.-.,D=-..,E=.,F=..-.,G=--.,H=....,I=..,J=.---,K=-.-,L=.-..,M=--,N=-.,O=--,P=.--.,Q=--.-,R=.-.,S=...,T=-,U=..-,V=...-,W=.--,X=-..-,Y=-.--,Z=--.., =/';

// Object to provide lookup of morse code (value) for a given letter (key).
let alpha = {
    // define the mapping here as a literal
};

// Object to provide lookup of letter (value) for a given morse code (key).
let morse = {};
// Hint: use the [] operator to specify these special key values rather than a literal.

// Return `true` if all characters are morse code.  Use a RegExp. 
function isMorse(characters) {

}

// Return `true` if all characters are part of the alphabet defined in `alpha`.  Use a RegExp.
// Bonus: can you rewrite it using `Object.keys()` and your `alpha` Object instead?
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys 
function isAlpha(characters) {
    
}

// Given an alphabet message, convert and return in morse code.  Use your morse and/or alpha object.
// Return undefined if text is not alpha.
function textToMorse(text) {

}

// Given a morse code message, convert and return in text.  Use your morse and/or alpha object.
// Return undefined if morse is not proper code.
function morseToText(morse) {

}


// Message class that takes a `message` (String), which can be either morse or alpha.
// Use your functions above to decide how to store a value for `any` on `this`  
class Message {
    constructor(text) {

    }

    // Return the message as morse code, converting if necessary
    toMorse() {

    }

    // Return the message as alpha characters, converting if necessary
    toAlpha() {

    }
}


let msg1 = new Message('--- -... .--- . -.-. - .../.. -./.--- .- ...- .- ... -.-. .-. .. .--. -/.- .-. ./...- . .-. -.--/.--. --- .-- . .-. ..-. ..- .-..');
//console.log(msg1.toAlpha());
//console.log(msg1.toMorse());

let msg2 = new Message('I am learning how to use Objects in JavaScript');
//console.log(msg2.toMorse());
//console.log(msg2.toAlpha());
