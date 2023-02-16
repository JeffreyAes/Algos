# * @param {number[]} nums
# * @param {number} target
# * @return {number}
# *
# * Given an array of integers nums which is sorted in ascending order, and an integer target,
# * write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
# *
# * You must write an algorithm with O(log n) runtime complexity.
# *
# * https://leetcode.com/problems/binary-search/
# * solution: https://youtu.be/s4DPM8ct1pI

# if you need to refer back to binary search that is completely fine.
nums1 = [-1, 0, 3, 5, 9, 12]
target1 = 9
expected1 = 4
# Explanation: 9 exists in nums and its index is 4

nums2 = [-1, 0, 3, 5, 9, 12]
target2 = 2
expected2 = -1
# Explanation: 2 does not exist in nums so return -1


def search(nums, target):
    start = 0
    end = len(nums) -1
    while start <= end:
        mid = ((start + end)//2)
        if nums[mid] < target:
            start = mid +1
        elif nums[mid] > target:
            end = mid -1
        else:
            return mid
    return -1

print(search(nums1, target1))
print(search(nums2, target2))
