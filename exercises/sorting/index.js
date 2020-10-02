// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  //Implement bubblesort
  for (let i = 0; i < arr.length; i++) {
    for (
      let j = 0;
      j < arr.length - i - 1;
      j++                                   //array length within bounds increment j by 1 using two for loops
    ) 
    {
      if (arr[j] > arr[j+1]) {              //logic looks at current element index > if one is greater in value > swap them                                     
        const lesser = arr[j + 1];          //point at lesser of two values
        arr[j + 1] = arr[j];                //arr value no @ j + 1  is lesser
        arr[j] = lesser;                    //take lesser assign to current index
      }
    }
 }
  //return the sorted array
  return arr;
}

function selectionSort(arr) {}

function mergeSort(arr) {}

function merge(left, right) {}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
