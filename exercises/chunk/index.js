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
    const chunked = [];
    let index = 0; 

    while (index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size; 
    }
    
    return chunked; 
}

module.exports = chunk;
/*
    // loop thru array
    // iterate over each element in array
    // check if last element of chunked does not exist
    // or the length of subarray inside chunked equals to size
    // push new element into subarray into chunked
    // else push new element into subarray
    for (let el of array) {
        let last = chunked[chunked.length - 1]; 
        if (!last || last.length === size) {
            chunked.push([el])
        } else {
            last.push(el);
        }
    }
*/