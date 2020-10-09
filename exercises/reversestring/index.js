// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reduce((accumulator, char) => char + accumulator, '');  
}

module.exports = reverse;

// let reverseStr = '';
//     for (let char of str) {
//         /**
//          * a + "" = "a"
//          * b + "a" = "ba"
//          * c + "ba" = "cba"
//          * d + "cba" = "dcba" 
//         */
//         reverseStr = char + reverseStr;
//     }
// return reverseStr;
