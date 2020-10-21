// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    // SOLUTION 1:
    // declare an empty object
    // iterate thru str, let object's key as each char
    // let object's value as count of char
    // if object's key is not yet defined, its value will be 1
    // else value will increment
    // iterate thru newly declared object, find maxChar with max count

    let obj = {};

    for (let char of str) {
        obj[char] === undefined ? obj[char] = 1 : obj[char]++;
    }

    let max = 0, maxChar;

    for (let key in obj) {
        if (obj[key] > max) {
            max = obj[key];
            maxChar = key;
        }
    }

    return maxChar;
}

module.exports = maxChar;
