// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//solution 2 uses a regular expression regex
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);

  return matches ? matches.length : 0;
}
module.exports = vowels;
//regular exp says: if this string contains any char in the square brackets then let us know
// g reg exp = makes sure don't stop at first match found inside of string > Find all vowels
// i reg exp = 'case' insensitive > auto case check of Capitals
// 'matches' if finds any matches will return an array of all matches found
// if no matches are found then this returns null/undefined code next handles both cases as above



//solution 1
//how to check to see if working with vowel?
//uses helper method for strings and arrays
// function vowels(str) {
//     let count = 0;
//     const checker = ['a', 'e', 'i', 'o', 'u']; //has includes helper method - is char in array [,1 2,3, 123, 5] > works too

//     for (let char of str.toLowerCase()) {
//        if (checker.includes(char)) {
//            count++;
//        }
//     }

//     return count;
//    }
// module.exports = vowels;
