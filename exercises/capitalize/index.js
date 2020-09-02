// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


//solution 2
//create 'result' which is the first character of the input string capitalized in an empty string (not an array)
//FOR each char in the string
// IF the char to the left has space
//capitalize it and add it to a 'result'
//ELSE add it to a result

function capitalize(str) {
    let result = str[0].toUpperCase();
    
    for (let i = 1; i< str.length; i++){
        if (str[i - 1] === ' ') {
            result += str[i].toUpperCase();
     } else {
         result += str[i];
     }
   }
   return result;
  }
  
  module.exports = capitalize;





//solution 1 option
// pseudo code make empty array constant 'words'
// split the input string by spaces to get an array 
//for each word in the array 
//uppercase the first letter of the word
//join the first letter with the rest of the string
//push result into words array
//join 'words' into a string and return it 

// function capitalize(str) {
//     const words = [];

//     for (let word of str.split(' ')) {
//         words.push(word[0].toUpperCase() + word.slice(1));
//     }

//     return words.join(' ');
// }

// module.exports = capitalize;
