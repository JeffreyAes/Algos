/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 * 
 * You are given a string s and an integer k. You can choose any character of the string and
 * change it to any other uppercase English character. You can perform this operation at most
 * k times.

Return the length of the longest substring containing the same letter you can get after 
performing the above operations.
 */

const s1 = "ABAB"
let k1 = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.

const s2 = "AABABBA"
let k2 = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.

var characterReplacement = function (s, k) {
// slightly slower runtime
        // let count = {}
        // let res = 0
        // let l = 0
        // for (r in s) {
        //     count[s[r]] ??= 0
        //     count[s[r]]++
        //     while ((r - l + 1) - Math.max(...Object.values(count)) > k) {
        //         count[s[l]]--
        //         l++
        //     }
        //     res = Math.max(res, r - l + 1)
        // }
        // return res
        
// faster verion
    let count = {}
    let res = 0
    let l = 0
    let maxF = 0
    for (r in s) {
        count[s[r]] ??= 0
        count[s[r]]++
        maxF = Math.max(maxF, count[s[r]])
        while ((r - l + 1) -maxF > k) {
            count[s[l]]--
            l++
        }
        res = Math.max(res, r - l + 1)
    }
    return res


};

console.log(characterReplacement(s1, k1))
console.log(characterReplacement(s2, k2))