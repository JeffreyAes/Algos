/**
 * Question: valid-anagram
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * 
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly
 * once.
 * https://leetcode.com/problems/valid-anagram/description/
 * Answer: https://www.youtube.com/watch?v=9UtInBqnCgA&ab_channel=NeetCode
 */

const s1 = "anagram"
const t1 = "nagaram"
const result1 = true

const s2 = "rat"
const t2 = "car"
const result2 = false

const isAnagram = function (s, t) {
    let object = {}
    for (let i = 0; i < s.length; i++) {
        if (!object[s[i]]) {
            object[s[i]] = 1
        }
        else {
            object[s[i]]++
        }
    }
    for (let i = 0; i < t.length; i++) {
        // if (s.includes(t[i])) {
        if (object[t[i]]) {
            object[t[i]]--

        } else {
            return false;
        }
    } for (let key in object) {
        if (object[key] !== 0) {
            return false
        }
    }
    return true;
};


console.log(isAnagram(s1, t1))
console.log(isAnagram(s2, t2))
// reminder to also test code in leetcode

/**
 * Question: Two Sum
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * 
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * 
 * You can return the answer in any order.
 * https://leetcode.com/problems/two-sum/
 * Answer: https://www.youtube.com/watch?v=KLlXCFG5TnA&ab_channel=NeetCode
*/
var twoSum = function (nums, target) {
    let num1 = 0
    let num2 = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target && i !== j) {
                num1 = i
                num2 = j

                return ([num1, num2])
            }
        }
    }
};

const nums1 = [2, 7, 11, 15]
const target1 = 9
const expected1 = [0, 1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

const nums2 = [3, 2, 4]
const target2 = 6
const expected2 = [1, 2]

const nums3 = [3, 3]
const target3 = 6
const expected3 = [0, 1]

console.log(twoSum(nums1, target1))
console.log(twoSum(nums2, target2))
console.log(twoSum(nums3, target3))
// reminder to also test code in leetcode