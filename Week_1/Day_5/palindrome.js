/**
 * @param {string} s
 * @return {boolean}
 * 
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads
 * the same forward and backward. Alphanumeric characters include letters and numbers.
 * 
 * Given a string s, return true if it is a palindrome, or false otherwise.
 * 
 * https://leetcode.com/problems/valid-palindrome/
 * Faster Solution (probably): https://youtu.be/jJXJ16kPFWg
 */

const s1 = "A man, a plan, a canal: Panama"
const expected1 = true
// Explanation: "amanaplanacanalpanama" is a palindrome.

const s2 = "race a car"
const expected2 = false
// Explanation: "raceacar" is not a palindrome.

const s3 = " "
const expected3 = true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

var isPalindrome = function (s) {
        let lowArr = s.toLowerCase();
        let palArr = ""
        let palReversed = ""
        for (let i = 0; i < lowArr.length; i++) {
            if (lowArr.charCodeAt(i) >= 97 && lowArr.charCodeAt(i) <= 122) //ASCII values for lower case characters
            {
                palArr += (lowArr[i]);
            }
            
        }
        for(let i = palArr.length-1; i>=0; i--){
            palReversed += palArr[i]
        }
        if(palArr === palReversed){
            return true
        }
        else { 
            return false
        }
    };

//     const _s = s.toLowerCase().replace(/\W/g, '');
//   // console.log(_s);

//   for (let i = 0; i < Math.floor(_s.length / 2); i++) {
//     if (_s[i] !== _s[_s.length - i - 1]) {
//       // console.log(_s[i]);
//       return false;
//     }
//   }
//   return true;

// };


console.log(isPalindrome(s1))
console.log(isPalindrome(s2))
console.log(isPalindrome(s3))