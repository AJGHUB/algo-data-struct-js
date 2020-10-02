// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort



//______________________________________BUBBLE SORT______________________________________________________________


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



//______________________________________SELECTION SORT__________________________________________________________


function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i; //lowest value in array prove me wrong

    for (let j = i+1; j <arr.length; j++) {
        if (arr[j] < arr[indexOfMin]) {
            indexOfMin = j;
        }
    }

    if (indexOfMin !== i) {
        let lesser = arr[indexOfMin];
        arr[indexOfMin] = arr[i];
        arr[i] = lesser;
    }
    }

    return arr;
}



//______________________________________MERGE SORT_____________________________________________________________


function mergeSort(arr) {                       //split arr into 2 
    if (arr.length === 1) {                     //check does array has one element inside it . return immed 
        return arr;
    }
    
    
    //divide arr into 2 equal half to find centre
    const center = Math.floor(arr.length /2);
    const left = arr.slice(0, center);          //index 0 up to 2 not inc 2
    const right = arr.slice(center);            //take everything from index 2 to end of arr
 
    return merge(mergeSort(left), mergeSort(right));

}
 



//______________________________________MERGE_____________________________________________________________


function merge(left, right) {

const results = [];

while(left.length && right.length) {
    if (left[0] < right[0]) {
        results.push(left.shift());
    } else {
        results.push(right.shift());
    }
}

return [...results, ...left, ...right];  //es6 JS concat - join left right and add using spread op
}


module.exports = { bubbleSort, selectionSort, mergeSort, merge };    
//consider calling merge sort alg with an array of length 2


// Bubble sort
// √ sorts an array (2 ms)
// Selection sort
// √ sorts an array
// Merge sort
// √ merge function can join together two sorted arrays (1 ms)     
// √ sorts an array