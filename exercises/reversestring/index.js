// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // SOLUTION 3: 
    // split str into an array of strings
    // use .reduce() to accumulate reversed character into new result
    // concatenate each character into an empty string (an accumulator)
    // return accumulator
    return str.split('').reduce((accumulator, char) => char + accumulator, '');
}

module.exports = reverse;

// SOLUTION 1:
// .split('') into array of characters
// .reverse() characters, then .join('')
// return reversed string

// return str.split('').reverse().join('');

// SOLUTION 2:
// declare new variable of empty string as result
// iterate thru each character in str
// concatenate each character to empty str
// return new empty string as result
// let reversed = '';
// for (let char of str) {
//     reversed = char + reversed; 
// }; 
// return reversed; 