// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// use a function helper toString (trick 1)
//helper function built into map library used in javascript Math.sign() you can pass in a number math.sign will return 1 or -1 (trick 2)
//if you call toString() and turn it back to a number you can use parseInt function takes a string and turns it into a number (trick 3)

// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//solution 3 one line tidy code - tough to understand whats goin on in this one
function reverseInt(n) {
    return (
      parseInt(
          n
            .toString()
            .split('')
            .reverse()
            .join('')
      ) * Math.sign(n)
    );
} 
   
module.exports = reverseInt;


//solution 2
// function reverseInt(n) {
//     const reversed = n
//     .toString()
//     .split('')
//     .reverse()
//     .join('');
    
//     return parseInt(reversed) * Math.sign(n);
// } 
   
// module.exports = reverseInt;



// solution 1 
// function reverseInt(n) {
//     const reversed = n
//     .toString()
//     .split('')
//     .reverse()
//     .join('');
    
//     if (n < 0 ) {
//         return parseInt(reversed) * -1;
//     }
//     return parseInt(reversed);
// } 
   
// module.exports = reverseInt;

//turn n into string, call split to turn into array, reverse it because it is an array, join it back together into a string
//the two return statements is not ideal - another way is to use math.sign
