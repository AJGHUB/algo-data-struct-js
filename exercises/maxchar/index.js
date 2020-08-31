// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = ''; //helper variables iterate through key value pairs

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
  //to iterate over an object we use 'for in' don't be confused as object starts with o we do not use 'of' .
  // for loop below looks at each character 'char' is assigned the keys inside the object
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;

//option 3 with maxChar function req & definition above
// function maxChar(str) {

//     const charMap = {};
// //now iterate over source and iterate over character map
//     for (let char of str) {  //for every character add an entry to character map
//         if (charMap[char]) {  //if entry increment by one
//             charMap[char]++;
//         } else {
//             charMap[char] = 1; //otherwise set function as equal to 1
//         }
//     }
//     console.log(charMap);
// }
// module.exports = maxChar;

//option 2
// for (let char of string) {
//     chars[char] = chars [char] + 1 || 1; //if adding one produces null assign value of 1
// }
// chars;

//option 1:
// const string = "Hello There!"

// const chars = {};

// for (let char of string) {
//     if(!chars[char]) {
//         chars[char] = 1;
//     } else {
//         chars[char]++;
//     }
// }

// chars;
