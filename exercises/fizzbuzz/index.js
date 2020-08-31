// --- Directions
// step 1 Write a program that console logs the numbers
// from 1 to n. 
//But for multiples of three print
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

    for (let i = 1; i <= n; i++) { //specifically iterate from 1 to n not from 0 
        //check to see if number a multiple of 3 & 5 if so console log here
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz');
    } else if (i % 3 === 0) {
        //Is the number a multiple of 3?
        console.log('fizz');
    } else if (i % 5 === 0) {
         //Is the number a multiple of 5?
        console.log('buzz')
    } else {
         //Is the number a multiple of 3/5 or 15 if not:
        console.log(i)
    }
 }
}
module.exports = fizzBuzz;