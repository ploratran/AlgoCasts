// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
    // SOLUTION 2: 
    // iterate thru n
    // declare a variable to hold empty string as result
    // if current i is divisible by 3 => result is "fizz"
    // if current i is divisible by 5 => result is "buzz"
    // else console.log() result || current i
    for (let i = 1; i <= n; i++) {
        let result = '';
        if (i % 3 === 0) { result += 'fizz'; }
        if (i % 5 === 0) { result += 'buzz'; }
        console.log(result || i);
    }
}

module.exports = fizzBuzz;

// SOLUTION 1:
// iterate thru n
// check if current i is divisible to 15 => "fizzbuzz"
// if current i is divisivle to 3 => "fizz"
// current i is divisible to 5 => "buzz"
// else just log current i
// for (let i = 1; i <= n; i++) {
//     if (i % 15 === 0) { console.log("fizzbuzz"); }
//     else if (i % 3 === 0) { console.log("fizz"); }
//     else if (i % 5 === 0) { console.log("buzz"); }
//     else { console.log(i); }
// }