// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    // SOLUTION 2:
    // make a helpfer function to make an object
    // with char as key and value as count of char
    // use Object.keys() to make an array contains all keys of obj
    // compare the length from Object.keys()
    // if 2 array's length are not equal => false
    // iterate thru 1 object
    // compare each value in 1 object with value in other object
    // if not equal => false
    // else true

    const objA = makeObject(stringA);
    const objB = makeObject(stringB);

    if (Object.keys(objA).length !== Object.keys(objB).length) { 
        return false; 
    }

    for (let char in objA) {
        if (objA[char] !== objB[char]) {
            return false;
        }
    }

    return true; 
}

function makeObject(string) {
    let obj = {};

    for (let char of string.replace(/[^\w]/g, '').toLowerCase()) {
        obj[char] === undefined ? obj[char] = 1 : obj[char]++;
    }

    return obj; 
}

// SOLUTION 1:
// declare a helper function to sort each string
// use regex .replace() to replace " ", ! with ''
// .split() string, then use .sort() => return sorted string
// if both string's lengths are not equal => false
// iterate thru 1 string
// comapre each character in 1 string to another string
// if they don't have same character => false
// else return true

// const strA = sortString(stringA);
// const strB = sortString(stringB);

// if (strA.length !== strB.length) { return false; }

// for (let i = 0; i < strA.length; i++) {
//     if (strA[i] !== strB[i]) {
//         return false; 
//     }
// }

// return true; 

// function sortString(string) {
//     return string
//             .replace(/[^\w]/g, '')
//             .toLowerCase()
//             .split('')
//             .sort()
//             .join('');
// }

module.exports = anagrams;

// // take only word characters without special characters and/or empty spaces
// const strA = stringA.replace(/[^\w]/g, "").toLowerCase();
// const strB = stringB.replace(/[^\w]/g, "").toLowerCase(); 
// /* console.log('strA:', strA, ' and strB:', strB); */

// const charsA = {}, charsB = {};

// for (let char of strA) {
// if (!charsA[char]) {
//     charsA[char] = 1;
// } else {
//     charsA[char] += 1;
// }
// }
// for (let char of strB) {
// if (!charsB[char]) {
//     charsB[char] = 1;
// } else {
//     charsB[char] += 1;
// }
// }

// // if the objects are not having the same length
// // return false
// if (Object.keys(charsA).length !== Object.keys(charsB).length) {
//     return false;
// } 

// // if the objects have same length, not meaning they are anagrams
// // loop thru 1 object, compare each character between objects
// for (let char in charsA) {
//     if (charsA[char] !== charsB[char]) {
//         return false;
//     }
// }

// return true; 