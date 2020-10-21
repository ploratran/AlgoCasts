// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    // SOLUTION 2:  
    // .split() str into an array of characters
    // use .every() to compare each character with
    // last character in the array
    // return true of false
    const result = str.split('').every((char, index) => {
        return char === str[str.length - 1 - index];
    });

    return result; 
}

module.exports = palindrome;

// SOLUTION 1:
// split str into an array of characters
// .reverse() array then .join()
// compare reversed string with str
// const reversed = str.split('').reverse().join('');
// return reversed === str; 
