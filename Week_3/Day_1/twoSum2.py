# **
#  * @param {number[]} numbers
#  * @param {number} target
#  * @return {number[]}
#  *
#  * Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order,
#  * find two numbers such that they add up to a specific target number. Let these two
#  * numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

# Return the indices of the two numbers, index1 and index2, added by one as an integer array
# [index1, index2] of length 2.

# The tests are generated such that there is exactly one solution. You may not use the same element
# twice.

# Your solution must use only constant extra space.


#  *

numbers1 = [2, 7, 11, 15]
target1 = 9
#  Output: [1,2]
#  Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

numbers2 = [2, 3, 4]
target2 = 6
#  Output: [1,3]
#  Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

numbers3 = [-1, 0]
target3 = -1
#  Output: [1,2]
#  Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].


def twoSum(numbers, target):
    l = 0
    r = len(numbers)-1
    num1 = 0
    num2 = 0
    while l < r:
        if numbers[l] + numbers[r] > target:
            r -= 1
        elif numbers[l] + numbers[r] < target:
            l+=1
        else:
            num1 = l+1
            num2 = r+1
            break
    return [num1, num2]


print(twoSum(numbers1, target1))
print(twoSum(numbers2, target2))
print(twoSum(numbers3, target3))
