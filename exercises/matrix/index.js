// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const results = []; //empty array

    for (let i = 0; i < n; i++) { //number of sub arrays in dep on value n iterate
    results.push([]);   // and push in empty sub array
    }

    let counter = 1; //counter variable, keeps track of what number im trying to push into array
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;
    while (startColumn <= endColumn && startRow <= endRow) {
        //Top row: progress through FL i = end then inc 1 with results assign counter and increment start row
        for (let i = startColumn; i <= endColumn; i++) { //iterate st col > end col
            results[startRow] [i] = counter;             // put value into result set
            counter++;
        }
        startRow++;  //inc start row

        //Right Column FLoop
        for (let i = startRow; i <= endRow; i++) {
            results [i] [endColumn] = counter;
            counter++; 
        }
        endColumn--;

         // Bottom Row FLoop
         for (let i = endColumn; i >= startColumn; i--) {
            results[endRow] [i] = counter;
            counter++; 
        }
        endRow--;

        //Start Column Floop
        for (let i = endRow; i >= startRow; i--) {
            results[i] [startColumn] = counter;
            counter++;
        }
        startColumn++;
    } 
    return results;
}

// module.exports = matrix;


//SPIRAL of variables for matrix
//algorithm pseudo code is predicated on the idea of maintaining...
//....counter variables that reflect what 'start col end col' 'start row and end row' working on 
//to keep track of index point of current integer values being filled inside matrix (start row starts @ 0 /n depends on end row mutable)
//create 4 'For Loops' that is resp for filling a side of matrix, 
//they run then increment and 'constrain' the start row | end row etc to control what section of matrix each loop is attempting to create 
        //1st Floop: assembles first row / top row of solution 
        //2nd FLoop: defines the assemble of values in row on far right hand side of solution 
        //3rd FLoop: defines the assemble of values in row on bottom of solution 
        //4th FLoop: defines the assemble of values on left hand side of solution > then goes into while Loop 
//Very start > build out empty arrays then insert numbers

//BOUNDS:
//1. create empty array of arrays called results
//2. create a counter variable starting at 1
//3. as long as (start column <= end column) AND (start row <= end row)
//4. Loop from start column to end column
//5. At results[start_row][i]assign counter variable
//6. increment counter
//7. increment start row
//8. loop from start row to end row
//9. at results[i][end_column]assign counter variable
//10. Increment counter
//11. Decrement end column
//12....repeat for other two sides