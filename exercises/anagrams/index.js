// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


//second run
function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCHarMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (let char in aCharMap) {
    if (aCharMAp[char] !== bCharMap[char]) {
      return false;
    }
  } 
  return true;
}

function buildCharMap(str) {
  const charMap = {};
  
  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
      charMap[char] = charMap[char] + 1 || 1;
  }

  return char;
}

module.exports = anagrams;



// function anagrams(stringA, stringB) {
//   return cleanString(stringA) === cleanString(stringB); //compare strings Identical = anagram
// }

// function cleanString(str) {
//   return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
// }

// module.exports = anagrams;

// solution 1 option
// function anagrams(stringA, stringB) {
//     const aCharMap = buildCharMap(stringA);
//     const bCharMap = buildCharMap(stringB);

//     if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//       return false; //no anagram one char map has diff type
//     }
//     // if same char ..proceed with map check process > final iterate over both a & b and compare both here
//     for (let char in aCharMap) {
//       if (aCharMap[char] !== bCharMap[char]) {
//         //how many times has a been used inside charM? If not used return false
//         return false;
//       }
//     }
//     return true;
//   }

//   function buildCharMap(str) {
//     const charMap = {};

//     for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//       //take char map assign key and then increment value at the char > assign value
//       charMap[char] = charMap[char] + 1 || 1;
//     }
//     return charMap;
//   }

//   module.exports = anagrams;

//notes
// const word = "HI THERE!!!!!"
// word.replace(/[^\w]/g, '')  //this removes spaces, capitals and makes an empty string
// word.replace(/[^\w]/g, '').toLowerCase();  //this does same as above and puts into lowercase from the string
