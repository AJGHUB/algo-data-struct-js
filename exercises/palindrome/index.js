// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


//  solution 2 - not ideal but one way of solving 'an advanced array helper "every" ' - complex in array and mirroring & access to array;
 function palindrome(str)  { //turn string to array every helper only has access to an array
    return str.split('').every((char, i) => {     //str.split makes array | i=0 first element of array 
        return char === str[str.length - i - 1];  //give access to length -1 of array other end, returns index at other sid eof array mirrored
    }); 
 }

 module.exports = palindrome;



//solution 1 reverses string to help
// function palindrome(str)  {
//     const reversed = str
//     .split('')
//     .reverse()
//     .join('');

//     return str === reversed;
//  }

// module.exports = palindrome;

//double comparisons first to last or last to first I can propose a clear solution 
//alternative solutions could be offered to interviewer
