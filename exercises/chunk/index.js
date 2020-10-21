// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    // SOLUTION 2: 
    // declare variable called 'chunk' to store result empty array
    // iterate thru array
    // use .slice() to copy a portion of array into 'chunked'
    // increment index by size, so that each subarray contains from index to size length
    // return 'chunked'

    let chunked = [];

    for (let i = 0; i < array.length; i = i + size) {
        chunked.push(array.slice(i, i + size));
    }

    return chunked; 
}

module.exports = chunk;

// SOLUTION 1: 
// declared variable 'chunked' to store result as an array
// iterate thru array
// check if 'chunked' does not have element, by checking its last element
// then push a subarray with current value to 'chunked'
// check if 'chunked' has at least 1 element
// then check if subarray size is equal to size, make new subarray
// else push current element into subarray
// return 'chunked' as final result; 
// let chunked = [];

// for (let el of array) {
//     let last = chunked[chunked.length - 1]; 
//     if (!last || last.length === size) {
//         chunked.push([el]);
//     } else {
//         last.push(el);
//     }
// }

// return chunked; 
