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

//solution 2 recursive function
// if (row ===n) then we have hit the end of our problem
//if the stair string has a length of ===n then we are at the end of the row > console.log here
// if the length of the stair string is less than or equal to the row number we're working on, we add a'#', otherwise add a space
//

function steps(n, row = 0, stair = '') {
  if (n === row) {
    return; //case here ?: is n = to row no its equal to defaults
  }

  if (n === stair.length) {
    console.log(stair); //case here: have hit end of row, console log stair and call steps and increment with row +1
    return steps(n, row + 1); //?: is n = to row no its not because its still an empty string
  }

  if (stair.length <= row) {
    //is stair.length = 0 yes
    stair += '#'; //now add # to stair
  } else {
    stair += ' ';
  }
  steps(n, row, stair); //call steps again @ top and re iterate over entire function adding # spaces
}

module.exports = steps;


//NOTES
//what is the bare min info that represents prob to pass here from call to call in rec funct:
//this is to get current counter down by subtract - 1
//reasonable defaults to the bare min pieces of info ir provide number subt 1
//(or OTHER arg > give reasonable default to protect from infin recurs)
//check the base case. Is there any work left to do? If not return
//to prevent infinitive recursion think on base case code which is:
// function printNumber(n) {
//     if (n === 0 ) {
//         return;
//     }
// }
// printNumber(10);
//
// Call your (print no) function again, check number printing out
//making sure the args have changes in some fashion






//iterative solution 1 psuedo code
//first I need rows row 1 row 2 row 3
//I need columns 1/2/3
// FOR loop iterates through rows from 0 to n
//create an empty string called 'stair'
//second FOR loop iterates through columns left to right
//If the current col is equal to or less than current row add a # to the stair
// ELSE add a space to the stair
//running through for loop and iterate through col and console log stair
// the stair variable is declared as a new empty string in the continued iterations

// function steps(n) {
//     for (let row = 0; row < n; row++) {
//         let stair = '';

//         //row processing step
//         for (let column = 0; column <n; column++) {
//             if (column <= row) {
//                 stair += '#';
//             } else {
//                 stair += ' ';
//             }
//         }
//         console.log(stair);
//      }
//     }

//     module.exports = steps;
