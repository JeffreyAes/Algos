/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
 * 
 * Hint: Math.abs()
 * 
 * https://leetcode.com/problems/squares-of-a-sorted-array/
 */

const nums1 = [-4, -1, 0, 3, 10]
const expected1 = [0, 1, 9, 16, 100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

const nums2 = [-7, -3, 2, 3, 11]
const expected2 = [4, 9, 9, 49, 121]

var sortedSquares = function (nums) {
    let arr = new Array(nums.length)
    let left = 0
    let right = nums.length - 1
    for (let i = arr.length - 1; i >= 0; i--) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            arr[i] = nums[left] * nums[left]
            left++
        } else {
            arr[i] = nums[right] * nums[right]
            right--
        }
    }
    return arr
};


console.log(sortedSquares(nums1))
console.log(sortedSquares(nums2))