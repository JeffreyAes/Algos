/**
 * @param {number[]} nums
 * @return {number}
 * 
 * You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

Return the single element that appears only once.

Your solution must run in O(log n) time and O(1) space.
 */

const nums1 = [1, 1, 2, 3, 3, 4, 4, 8, 8]
// Output: 2

const nums2 = [3, 3, 7, 7, 10, 11, 11]
// Output: 10

var singleNonDuplicate = function (nums) {
    let l = 0
    let r = nums.length - 1
    while (l < r) {
        let mid = Math.floor((r + l) / 2)
        if (mid % 2 === 1) {
            mid--
        }
        if (nums[mid] !== nums[mid + 1]) {
            r = mid
        }
        else {
            l = mid + 2
        }

    }
    return nums[l]

};

console.log(singleNonDuplicate(nums1))
console.log(singleNonDuplicate(nums2))