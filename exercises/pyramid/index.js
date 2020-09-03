// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    const midpoint = Math.floor((2 * n -1) / 2);


    for (let row = 0; row < n; row++) {
        let level = '';

        for (let column = 0; column < 2 * n -1; column++) { 
        //iterates through columns, adds together then minus 1 from bottom row ie 4x2=8 -1 =7
           if(midpoint - row <= column && midpoint + row >= column) {
        // midpoint checkpoint to make sure check is within some bracket of numbers/bounds of midpoint minus row and midpoint plus row
               level += '#'; //if condition is met pound is added
           } else {
               level += ' ';
           }
        }
        console.log(level)
    }
}
module.exports = pyramid;

// solution 1 
// from 0 to n (iterate through rows)
// create an empty string
// from 0 to ??? (columns)
// IF the column should have a #
// Add a pound to level
// ELSE
// Add a space to 'level
//console log 'stair'
