#  * @param {string[]} strs
#  * @return {string[][]}
#  *
#  * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
#  *
#  * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
#  *
#  * solution: https://youtu.be/vzdNOK2oB2E
#  * https://leetcode.com/problems/group-anagrams/

strs1 = ["eat", "tea", "tan", "ate", "nat", "bat"]
Output1 = [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]

strs2 = [""]
Output2 = [[""]]


strs3 = ["a"]
Output3 = [["a"]]


def groupAnagrams(strs):
    map = {}
    for str in strs:
        key = str.split().sort().join('')
        print(key)


print(groupAnagrams(strs1))
print(groupAnagrams(strs2))
print(groupAnagrams(strs3))
