// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    // declare a new string 'string' with first word capitalized
    // split str into an array of words
    // iterate thru each char in str 
    // check if the char to the left of current word is an empty " "
    // concatenate to 'string'
    // then capitalized current word
    // else concatenate current char to 'string'
    // return 'string'
    let string = "" + str[0].toUpperCase();

    for (let i = 1; i < str.length; i++) {
        if (str[i-1] === " ") { 
            string += str[i].toUpperCase();
        } else {
            string += str[i];
        }
    }

    return string; 
}

module.exports = capitalize;

// SOLUTION 1: 
// split str into an array of words
// capitalize the first char of each word
// use .slice() to concatenate the rest of the char in each word to first char
// return array using .join(' ')

// const result = []; 

// for (let word of str.split(' ')) {
//     result.push(word[0].toUpperCase() + word.slice(1));
// }; 

// return result.join(' ');
