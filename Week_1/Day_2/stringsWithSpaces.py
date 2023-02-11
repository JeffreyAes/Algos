# * @param {string} s
# * @param {string[]} wordDict
# * @return {boolean}
# *
# * Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.
# *
# * Note that the same word in the dictionary may be reused multiple times in the segmentation.
# *
# * https://leetcode.com/problems/word-break/
# * test your code here^

s1 = "leetcode"
wordDict1 = ["leet", "code"]
expected1 = True
# Explanation: Return true because "leetcode" can be segmented as "leet code".

s2 = "applepenapple"
wordDict2 = ["apple", "pen"]
expected2 = True
# Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
# Note that you are allowed to reuse a dictionary word.

s3 = "catsandog"
wordDict3 = ["cats", "dog", "sand", "and", "cat"]
expected3 = False


def wordBreakLVL1(s, wordDict):
    resultS = ""
    newS = ""
    sNew = ""
    i = 0
    while i < len(wordDict):
        if wordDict[i] in s:
            resultS += wordDict[i] + "_"
            tempI = s.index(wordDict[i])
            while tempI < len(s):
                newS += s[tempI]
                if (newS == wordDict[i]):
                    if (i != len(wordDict) - 1):
                        newS += "_"
                    sNew += newS
                    newS = ""
                    break
                if (tempI == len(s)):
                    newS = ""
                tempI += 1
        i += 1
    return sNew


print(wordBreakLVL1(s1, wordDict1))
print(wordBreakLVL1(s2, wordDict2))
print(wordBreakLVL1(s3, wordDict3))


# * @param {string} s
# * @param {string[]} wordDict
# * @return {string[]}
# *
# * Given a string s and a dictionary of strings wordDict, add spaces in s to construct a sentence where each word is a valid dictionary word.
# * Return all such possible sentences in any order.
# *
# * Note that the same word in the dictionary may be reused multiple times in the segmentation.
# *
# * https://leetcode.com/problems/word-break-ii/

string1 = "catsanddog"
word1 = ["cat", "cats", "and", "sand", "dog"]
expect1 = ["cats and dog", "cat sand dog"]

string2 = "pineapplepenapple"
word2 = ["apple", "pen", "applepen", "pine", "pineapple"]
expect2 = ["pine apple pen apple",
           "pineapple pen apple", "pine applepen apple"]
# Explanation: Note that you are allowed to reuse a dictionary word.

string3 = "catsandog"
word3 = ["cats", "dog", "sand", "and", "cat"]
expect3 = []


def wordBreakLVL2(s, wordDict):
    """
    :type s: str
    :type wordDict: List[str]
    :rtype: List[str]
    """

# print(wordBreakLVL2(string1, word1))
# print(wordBreakLVL2(string2, word2))
# print(wordBreakLVL2(string3, word3))
