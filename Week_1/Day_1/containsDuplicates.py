# * @param {number[]} nums
# * @return {boolean}
# * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
# * https://leetcode.com/problems/contains-duplicate/

# 1st problem
# easy on leetcode
test1 = [1, 2, 3, 1]
expectedOutput1 = True

test2 = [1, 2, 3, 4]
expectedOutput2 = False

test3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
expectedOutput3 = True

test4 = [1, 2, 3, 1]
expectedOutput4 = True

test5 = [1, 2, 3, 1]
expectedOutput5 = True


def containsDuplicate(nums):
    dict = {}
    for num in nums:
        if num in dict:
            return True
        else:
            dict[num] = 1
    return False

print(containsDuplicate(test1))
print(containsDuplicate(test2))
print(containsDuplicate(test3))
print(containsDuplicate(test4))
print(containsDuplicate(test5))


# * #param {string} order
# * @param {string} s
# * @return {string}
# * You are given two strings: 'order' and 's'. All the characters of order are unique and were sorted in some custom order previously.

#    Permute the characters of s so that they match the order that order was sorted. More specifically,
#     if a character x occurs before a character y in order, then x should occur before y in the permuted string.

#   Return any permutation of s that satisfies this property.

#    https://leetcode.com/problems/custom-sort-string/

order1 = "cba"
string1 = "abcd"
expected3 = "cbad"

order2 = "cbafg"
string2 = "abcd"
expected2 = "cbad"

order3 = "kqep"
string3 = "pekeq"
expected3 = "kqeep"


def customSortString(order, s):
    result = ""
    obj = {}
    for oLetter in order:
        if oLetter in s:
            result += oLetter
    for let in s:
        if let not in obj:
            obj[let] = 0
        else:
            obj[let] += 1
        if obj[let] > 0:
            result += let
            obj[let] -= 1
    return result


print(customSortString(order1, string1))
print(customSortString(order2, string2))
print(customSortString(order3, string3))
