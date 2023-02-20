
#  * @param {string} s
#  * @return {number}
#  * 
#  * Given a string s, find the length of the longest 
# substring
#  without repeating characters.


 


s1 = "abcabcbb"
#  Output: 3
#  Explanation: The answer is "abc", with the length of 3.

s2 = "bbbbb"
#  Output: 1
#  Explanation: The answer is "b", with the length of 1.

s3 = "pwwkew"
#  Output: 3
#  Explanation: The answer is "wke", with the length of 3.
#  Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

def lengthOfLongestSubstring(s):
    charSet = set()
    l = 0
    res = 0

    for r in range(len(s)):
        while s[r] in charSet:
            charSet.remove(s[l])
            l += 1
        charSet.add(s[r])
        res = max(res, r - l +1)
    return res





print(lengthOfLongestSubstring(s1))
print(lengthOfLongestSubstring(s2))
print(lengthOfLongestSubstring(s3))