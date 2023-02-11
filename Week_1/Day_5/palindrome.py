# * @param {string} s
# * @return {boolean}
# *
# * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads
# * the same forward and backward. Alphanumeric characters include letters and numbers.
# *
# * Given a string s, return True if it is a palindrome, or false otherwise.
# *
# * https://leetcode.com/problems/valid-palindrome/
# * Faster Solution (probably): https://youtu.be/jJXJ16kPFWg


s1 = "A man, a plan, a canal: Panama"
expected1 = True
# Explanation: "amanaplanacanalpanama" is a palindrome.

s2 = "race a car"
expected2 = False
# Explanation: "raceacar" is not a palindrome.

s3 = " "
expected3 = True
# Explanation: s is an empty string "" after removing non-alphanumeric characters.
# Since an empty string reads the same forward and backward, it is a palindrome.

# my solution (google help)


def isPalindrome(s):
    string = ""
    for l in s.lower():
        if l.isalnum():
            string += l
    if string == string[::-1]:
        return True
    return False


# print(isPalindrome(s1))
# print(isPalindrome(s2))
# print(isPalindrome(s3))

# better on memory
# using 2 pointers
def isPalindrome1(s):
    # declariing 2 vars l = 0, r = length of s - 1
    l, r = 0, len(s) - 1

    while l < r:
        while l < r and not alphaNum(s[l]):
            l += 1
        while r > l and not alphaNum(s[r]):
            r -= 1
        if s[l].lower() != s[r].lower():
            return False
        #   add to l,sub from r
        l, r = l + 1, r - 1
    return True


def alphaNum(c):
    # using ascii
    return (ord('A') <= ord(c) <= ord('Z') or
            ord('a') <= ord(c) <= ord('z') or
            ord('0') < - ord(c) <= ord('9'))


print(isPalindrome1(s1))
print(isPalindrome1(s2))
print(isPalindrome1(s3))
