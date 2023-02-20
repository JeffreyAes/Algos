/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 * 
 * 
 * Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.
 */


let s1 = "ab"
let s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").


let sOne = "ab"
let sTwo = "eidboaoo"
// Output: false


var checkInclusion = function (s1, s2) {
//     let l = 0
//     let r = s1.length - 1
//     let hash = {}
//     let match = 0
//     for (i in s1) {
//         hash[s1[i]] ??= 0
//         hash[s1[i]]++
//     }
//     while (r < s2.length) {
//         for (i = l; i < r; i++) {
//             if (s2[i] in hash) {
//                 match++
//                 if (match === s1.length) {
//                     return true

//                 }

//             }
//             else {
//                 match = 0
//             }
//         }

//         l++
//         r++

//     }
//     return false
// };

    if (s1.length > s2.length) {
      return false
    }
    s1Count, s2Count = [0] * 26, [0] * 26;
     



};


console.log(checkInclusion(s1, s2))
console.log(checkInclusion(sOne, sTwo))