# **
#  * @param {number[]} nums
#  * @return {number}
#  * 
#  * You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

# Return the single element that appears only once.

# Your solution must run in O(log n) time and O(1) space.
#  *

nums1 = [1, 1, 2, 3, 3, 4, 4, 8, 8]
#  Output: 2

nums2 = [3, 3, 7, 7, 10, 11, 11]
#  Output: 10

def singleNonDuplicate(nums):
    l = 0
    r = len(nums)-1
    while l < r:
        mid = (l+r)//2
        if mid % 2 ==1:
            mid -=1
        if nums[mid] != nums[mid+1]:
            r = mid
        else:
            l = mid+2
    return nums[l]

print(singleNonDuplicate(nums1))
print(singleNonDuplicate(nums2))