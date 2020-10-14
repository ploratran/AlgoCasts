// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let numToString, reversed, negative;
	if (Math.sign(n) === -1) {
        numToString = n.toString().slice(1);
        negative = '-' + numToString.split('').reverse().join('');
        reversed = parseInt(negative);
    } else if (Math.sign(n) === 1) {
        numToString = n.toString();
        reversed = parseInt(numToString.split('').reverse().join(''));
    } else if (n === 0) {
        reversed = 0;
    }
    return reversed;
}

module.exports = reverseInt;
