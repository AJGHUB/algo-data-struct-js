// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {}

module.exports = fib;



//Runtime Complexity notes Different cases: 
//Constant Time: (1) No matter how many elements we work with, the algorithm / operation / whatever will always take the same amount of time.
//Logarithmic: (logn) You have this if doubling the number of elements you are iterating over doesnt double the amount of work. Always assume that searching options are log(n)
//Linear Time (n) Iterating through all elements in a collection of data. If you see a for loop spanning from '0' to array.length'
//Quasilinear Time (n * log (n)) You have this if doubling the number of elements you are iterating over doesnt double the amount of work. Always assume that any sorting is n*log(n)
//Quadratic Time (n ^ 2) Every element in a collection has to be compares to every other element. 'The handshake problem'
//Exponential Time ( 2 ^ n ) If you add a 'single' element to a collection, the processing power required doubles. > use other options to highlight inefficiency than this one