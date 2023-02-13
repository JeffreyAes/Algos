# * @param {number[]} nums
# * @return {number[]}
# *
# * Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
# *
# * Hint: abs() returns a absolute value
# *
# * https://leetcode.com/problems/squares-of-a-sorted-array/

nums1 = [-4, -1, 0, 3, 10]
expected1 = [0, 1, 9, 16, 100]
# Explanation: After squaring, the array becomes [16,1,0,9,100].
# After sorting, it becomes [0,1,9,16,100].

nums2 = [-7, -3, 2, 3, 11]
expected2 = [4, 9, 9, 49, 121]


def sortedSquares(nums):
    arr = [0] * len(nums)
    left = 0
    right = len(nums) - 1
    for i in range(len(arr) - 1, -1, -1):
        if abs(nums[left]) > abs(nums[right]):
            arr[i] = nums[left] ** 2
            left += 1
        else:
            arr[i] = nums[right] ** 2
            right -= 1
    return arr


print(sortedSquares(nums1))
print(sortedSquares(nums2))
