/**
 * @param {string} s
 * @return {number}
 * 
 * Given a string s, find the length of the longest 
substring
 without repeating characters.


 */


const s1 = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

const s2 = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

let s3 = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

var lengthOfLongestSubstring = function (s) {
    let charSet = {}
    let l = 0
    let res = 0
    for (r in s) {
        while (s[r] in charSet) {
            delete charSet[s[l]]
            l++
        }
        charSet[s[r]]=1 
        // console.log(charSet)
        res = Math.max(res, r-l+1)
    }
    return res

};

console.log(lengthOfLongestSubstring(s1))
console.log(lengthOfLongestSubstring(s2))
console.log(lengthOfLongestSubstring(s3))