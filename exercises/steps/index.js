// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//solution 1 psuedo code
//first I need rows row 1 row 2 row 3
//I need columns 1/2/3
// FOR loop iterates through rows from 0 to n
//create an empty string called 'stair'
//second FOR loop iterates through columns left to right
//If the current col is equal to or less than current row add a # to the stair
// ELSE add a space to the stair
//running through for loop and iterate through col and console log stair
// the stair variable is declared as a new empty string in the continued iterations

function steps(n) {
for (let row = 0; row < n; row++) {
    let stair = '';
    
    //row processing step
    for (let column = 0; column <n; column++) {
        if (column <= row) {
            stair += '#';
        } else {
            stair += ' ';
        }
    }
    console.log(stair);
 }
}

module.exports = steps;
