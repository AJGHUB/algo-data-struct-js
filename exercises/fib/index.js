// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3












// Recursive solution for fib;
// function fib(n) {       //base case that returns value - use a tree diagram if unsure
//   if (n < 2) {
//     return n;
//   }

//   return fib(n - 1) + fib(n - 2);
// }

// module.exports = fib;
//the run time of this is?; 'exponential because every increase in n, there will be an big increase in number of funct calls got.
//how can it be improve the run time to not be exponential? ...
// ...Funct calls ie fib w 6 is called many times with identical args
// ...avoid duplicate calls to fib funct with identical args
//USE 'MEMOIZATION' term that stores args of each funct call along with the result. "arg, run funct, store result > called again? ret result !"
// If the function is called again with the same argument, return the precomputed result, rather than run func again




//Fib solution 1 iterative option:
//The runtime complexity of this is linear runtime. A fixed for loop that iterates over close set
// function fib(n) {
//   const result = [0, 1]; //start @ 2 in array manually insert 0 & 1 into result set to produce the math addition

//   for (let i = 2; i <= n; i++) {
//     // for loop start iteration at 2 all the way up to n
//     const a = result[i - 1]; //inside of for loop pull out prev two records and add and push into result set [result.length -1] another option here
//     const b = result[i - 2]; //result at i - 2  calculated by 2 - 2 which gives 0 the first element in array

//     result.push(a + b); //generates fib series up to entry n
//   }

//   return result[n]; //OR to get last entry....  result[result.length -1];
// }
// module.exports = fib;

//NOTES
//performance of algoritim; Runtime Complexity notes Different cases:
//Constant Time: (1) No matter how many elements we work with, the algorithm / operation / whatever will always take the same amount of time.
//Logarithmic: (logn) You have this if doubling the number of elements you are iterating over doesnt double the amount of work. Always assume that searching options are log(n)
//Linear Time (n) Iterating through all elements in a collection of data. If you see a for loop spanning from '0' to array.length'
//Quasilinear Time (n * log (n)) You have this if doubling the number of elements you are iterating over doesnt double the amount of work. Always assume that any sorting is n*log(n)
//Quadratic Time (n ^ 2) Every element in a collection has to be compares to every other element. 'The handshake problem'
//Exponential Time ( 2 ^ n ) If you add a 'single' element to a collection, the processing power required doubles. > use other options to highlight inefficiency than this one

// BIG O NOTATION ~ run time complexity > what is the efficiency of your algorithm
// O(n) Linear
// O(1) Constant
// O(n^2) Quadratic

//Simple for loop iteration through single collection= linear runtime Probably O(n)
//Iterating through half a collection = Linear O(n) no constants in runtime
//Iterating through two diff collections with seperate for loops = O(n+m) add a second term arg/ string. seperate them to represent
//Nested for loops iterating over the same collection (ie pyramid or steps) you have = O(n^m) nsquared runtime
//Two nested for loops iterating over diff sets of data = O (n*m)
//sorting? = O(n*log(n))
//searching a sorted array O(log(n))

//Space complexity: how much more memory is required by doubling the problem set?
