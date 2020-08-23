// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse#:~:text=The%20reverse%20method%20transposes%20the,applied%20to%20objects%20resembling%20arrays.

function reverse(str) {
  return str.split('').reduce((reversed, character) => {
    //array str.string takes values and condense to single string value
    return character + reversed;
  }, '');
}

module.exports = reverse;

//es6 JS syntax difference solution 3
// function reverse(str) {
//  return str.split('').reduce((reversed, character) => {   //array str.string takes values and condense to single string value
//     return character + reversed;
//   }, '');
// }

//   module.exports = reverse;

//array str.string takes values and condense to single string value
//the first argument passed into reduced is the 'reversed' string
//the second argument passed into reduced is the element operating on in the array 'character'
//character + reversed are added together and returned
//the function runs one time for every element in the array

//solution 2 > dont use reverse

//   function reverse(str) {
//     let reversed = '';

//     for (let character of str) {
//         reversed = character + reversed;
//     }
//     return reversed;
//   }
//   module.exports = reverse;

//solution 1 refactored
// function reverse(str) {
//   return str
//   .split('')
//   .reverse()
//   .join('');
// }
// module.exports = reverse;

//solution 1 basic with reverse
// function reverse(str) {
//     const arr = str.split('')
//     arr.reverse();
//     return arr.join('');
//  }
//  module.exports = reverse;

// DEBUG practice
// function reverse(str) {
//   debugger;
//   return str.split('').reduce((reversed, character) => {
//     //array str.string takes values and condense to single string value
//     return character + reversed;
//   }, '');
// }
// reverse('asdf');

// module.exports = reverse;
