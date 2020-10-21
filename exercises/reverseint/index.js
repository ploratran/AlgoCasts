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
    // SOLUTION: 
    // convert num into string
    // use split() and .reverse() to reverse string then .join()
    // use .parseInt() to convert back into number
    // then multiply with Math.sign(n) to determine sign 
    
    const numToString = n.toString();
    const reversedInt = numToString
                            .split('')
                            .reduce((accumulator, char) => char + accumulator, "");
    const stringToNum = parseInt(reversedInt);

    return stringToNum * Math.sign(n);
}

module.exports = reverseInt;
