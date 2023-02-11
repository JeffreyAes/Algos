/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 
 * Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
 * 
 * 
 * Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
 * 
 * https://leetcode.com/problems/top-k-frequent-elements/
 * solution: https://www.youtube.com/watch?v=YPTqKIgVk-k&ab_channel=NeetCode
 */

const nums1 = [1, 1, 1, 2, 2, 3]
const k1 = 2
const expected1 = [1, 2]

const nums2 = [1]
const k2 = 1
const expected2 = [1]

var topKFrequent = function (nums, k) {
    // send back the most common values k amount of times
    let frequencyObj = {}
    let arr = []
    result = []
    for (let i = 0; i < nums.length; i++) {
        frequencyObj[nums[i]] ??= 0
        frequencyObj[nums[i]]++;
    }

    for (key in frequencyObj) {
        arr.push(frequencyObj[key])
    }
    arr.sort((a, b) => b - a);
    for (let i = 0; i < k; i++) {
        for (key in frequencyObj) {
            if (frequencyObj[key] == arr[i]) {
                result.push(parseInt(key))
                delete frequencyObj[key]
                break
            }
        }
    }
    return result
}


console.log(topKFrequent(nums1, k1))
console.log(topKFrequent(nums2, k2))


/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 * 
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 * 
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 * 
 * 
 * Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)
 * 
 * https://leetcode.com/problems/product-of-array-except-self/
 * solution: https://youtu.be/bNvIQI2wAjk
 */

const arrNums1 = [1, 2, 3, 4]
const expect1 = [24, 12, 8, 6]

const arrNums2 = [-1, 1, 0, -3, 3]
const expect2 = [0, 0, 9, 0, 0]
var productExceptSelf = function (nums) {
};

console.log(productExceptSelf(arrNums1))
console.log(productExceptSelf(arrNums2))