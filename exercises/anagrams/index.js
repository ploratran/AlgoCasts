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
	return sortCharacters(stringA) === sortCharacters(stringB) ; 
}

// make an array to store all characters in a string in sorted order
// then compare each character
function sortCharacters(string) {
	return string.replace(/[^\w/]/g, "").toLowerCase().split('').sort().join('');
}


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