// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//pseudo code
//create empty 'chunked' array
//create variable 'index' start at 0
//create a while loop that runs so long as index is less than original array.length
//inside of while loop take then push a slice of length 'size' from 'array' into chunked array
//re loop function and it gives whats left this is added 'size to index


// function chunk (array, size) {
//     const chunked = [];
//     let index = 0;
//     while (index < array.length) {
//         chunked.push(array.slice(index + size));
//         index += size;
//     }
// }


//second run through 
function chunk(array, size) {
    const chunked = []
    
    
    for (let element of array) {
        const last = chunked[chunked.length - 1];

        if (!last || last.length === size) {
            chunked.push([element]);
        } else {
            last.push(element);
        }
    }

    return chunked;
}

module.exports = chunk;


// function chunk(array, size) {
//   const chunked = []; //empty array
//   let index = 0; //variable changing over time 'let'
//   //while loop index is less thant array length | array
//   //takes slice from original array. Using chunked.push slice is added in
//   while (index < array.length) {
//     chunked.push(array.slice(index, index + size));
//     index += size;
//   } //index variable add size to it to increment by size
//   return chunked;
// }
// module.exports = chunk;

//pseudo code
// create empty array to hold chunks called 'chunked'
//for each element in the 'unchunked' array
//retrieve the last element in 'chunked'
//IF last element does not exist, or if length is equal to chunk size
//Push a new chunk into 'chunked' with the current element
//ELSE add the current element into the chunk





// //Iterative solution 1 option:
// function chunk(array, size) {
//     const chunked = []; //new array holds chunks of data

//     //iterate through array to get last element of array
//     for (let element of array) {
//         const last = chunked[chunked.length - 1];
//     //check if last element does not exist or if length is equal to chunk size then add a new element to chunk and put element inside that
//         if (!last || last.length === size) {
//             chunked.push([element]);
//         } else {
//             last.push(element) //otherwise push last element into end of chunked array
//         }
//         }
//         return chunked;
//     }

// module.exports = chunk;
