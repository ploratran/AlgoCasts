// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    // make an empty array
    // split the string to an array of words
    // iterate thru each character in each word
    // capitalize the first character in each word
    // then concatenate the rest of the character in each word with first character
    // push each word to the empty array and return it
    const result = [];

    for (let word of str.split(' ')) { 
        result.push(word.charAt(0).toUpperCase() + word.slice(1));
    }

    return result.join(' '); 
}

module.exports = capitalize;
