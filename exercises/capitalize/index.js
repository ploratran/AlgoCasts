// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    // make a new string with first letter capitalized
    // iterate over each character in str
    // if the character to the left is an empty space
    // then, capitalized the current character
    // else keep concatenate current character to the new string
    // return new string

    let result = "" + str.charAt(0).toUpperCase();

    for (let i = 1; i < str.length; i++) {
        if (str[i-1] === " ") {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }

    return result; 
}

module.exports = capitalize;

    // make an empty array
    // split the string to an array of words
    // iterate thru each character in each word
    // capitalize the first character in each word
    // then concatenate the rest of the character in each word with first character
    // push each word to the empty array and return it
    // const result = [];

    // for (let word of str.split(' ')) { 
    //     result.push(word.charAt(0).toUpperCase() + word.slice(1));
    // }

    // return result.join(' '); 