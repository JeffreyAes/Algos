/**
 * @param {number[]} nums
 * @return {boolean}
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 * https://leetcode.com/problems/contains-duplicate/
 */

// 1st problem
// easy on leetcode
const test1 = [1, 2, 3, 1]
const expectedOutput1 = true

const test2 = [1, 2, 3, 4]
const expectedOutput2 = false

const test3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
const expectedOutput3 = true

const test4 = [1, 2, 3, 1]
const expectedOutput4 = true

const test5 = [1, 2, 3, 1]
const expectedOutput5 = true

const containsDuplicate = (nums) => {
   let vals = {}
   for(let i = 0; i < nums.length; i++) {
      // hasOwnProperty
      vals[nums[i]] ??= 0
      vals[nums[i]]++;
      if(vals[nums[i]] > 1) {
         return true
      }
   } return false
   
};

console.log(containsDuplicate(test1))
console.log(containsDuplicate(test2))
console.log(containsDuplicate(test3))
console.log(containsDuplicate(test4))
console.log(containsDuplicate(test5))

/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 * You are given two strings order and s. All the characters of order are unique and were sorted in some custom order previously.

    Permute the characters of s so that they match the order that order was sorted. More specifically,
    if a character x occurs before a character y in order, then x should occur before y in the permuted string.

    Return any permutation of s that satisfies this property.

    https://leetcode.com/problems/custom-sort-string/
 */

// 2nd problem
// medium
// try to make this efficiently
const order1 = "cba"
const string1 = "abcd"
const expected3 = "cbad"

const order2 = "cbafg"
const string2 = "abcd"
const expected2 = "cbad"
const customSortString = (order, s) => {
   // set index to a variable
   // while 
   let result = ""
   let index = 0
   while(order.includes(s[index])){
      result = result + order[index]
      index++
   }
   for(let j = index; j < s.length; j++){
      result = result + s[j]
   }
   return(result)
}

console.log(customSortString(order1, string1))
console.log(customSortString(order2, string2))