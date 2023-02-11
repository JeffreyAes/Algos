# * @param {number[]} nums
# * @param {number} k
# * @return {number[]}
# *
# * Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
# *
# *
# * Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
# *
# * https://leetcode.com/problems/top-k-frequent-elements/
# * solution: https://www.youtube.com/watch?v=YPTqKIgVk-k&ab_channel=NeetCode

nums1 = [1, 1, 1, 2, 2, 3]
k1 = 2
expected1 = [1, 2]

nums2 = [1]
k2 = 1
expected2 = [1]

nums3 = [4, 1, -1, 2, -1, 2, 3]
k3 = 2
expected3 = [-1, 2]


# def topKFrequent(nums, k):
#     obj = {}
#     arr = []
#     i = 0
#     for num in nums:
#         if num not in obj:
#             obj[num] = 1
#         else:
#             obj[num] += 1
#     for key in obj.keys():
#         if len(arr) < k:
#             arr.append(key)
#         lowest = 1000
#         while i < len(arr):
#             # print(arr[i])
#             if obj[arr[i]] < lowest:
#                 lowest = arr[i]
#             print(lowest)
#             if obj[key] > lowest:
#                 arr[i] = key
#             i += 1
#     return arr

def topKFrequent(nums, k):
    count = {}
    freq = [[] for i in range(len(nums) +1)]
    
    for n in nums:
        count[n] = 1 + count.get(n, 0)
    for n, c in count.items():
        freq[c].append(n)

    res = []
    for i in range(len(freq) - 1, 0, -1):
        for n in freq[i]:
            res.append(n)
            if len(res) == k:
                return res




print(topKFrequent(nums1, k1))
print(topKFrequent(nums2, k2))
print(topKFrequent(nums3, k3))


# * @param {number[]} nums
# * @return {number[]}
# *
# * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
# *
# * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
# *
# * You must write an algorithm that runs in O(n) time and without using the division operation.
# *
# *
# * Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)
# *
# * https://leetcode.com/problems/product-of-array-except-self/
# * solution: https://youtu.be/bNvIQI2wAjk


arrNums1 = [1, 2, 3, 4]
expect1 = [24, 12, 8, 6]

arrNums2 = [-1, 1, 0, -3, 3]
expect2 = [0, 0, 9, 0, 0]


def productExceptSelf(nums):
    """
    :type nums: List[int]
    :rtype: List[int]
    """
    res = [1] * (len(nums))

    prefix = 1
    for i in range(len(nums)):
        res[i] = prefix
        prefix *= nums[i]
    postfix = 1
    for i in range(len(nums) - 1, -1, -1 ):
        res[i] *= postfix
        postfix *= nums[i]
    return res



print(productExceptSelf(arrNums1))
print(productExceptSelf(arrNums2))
