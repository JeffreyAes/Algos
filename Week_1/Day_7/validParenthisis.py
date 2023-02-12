# /**
#  * @param {string} s
#  * @return {boolean}
#  * 
#  * 
#  * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

# An input string is valid if:

# Open brackets must be closed by the same type of brackets.
# Open brackets must be closed in the correct order.
# Every close bracket has a corresponding open bracket of the same type.

#  */

s1 = "()"
# const expected1 = true

s2 = "()[]{}"
# // Output: true

s3 = "(]"
# // Output: false

# // Constraints:
# // 1 <= s.length <= 104
# // s consists of parentheses only '()[]{}'.

def isValid( s: str):
    stack = []
    closingPar = {')' : '(', ']' : '[', '}' : '{'}
    for c in s:
        if c in closingPar:
            if stack and stack[-1] == closingPar[c]:
                stack.pop()
            else:
                return False
        else:
            stack.append(c)
    return True if not stack else False
        
print(isValid(s1))
print(isValid(s2))
print(isValid(s3))
# // create two pointers, one at the first index (tracks openings)
# // second pointer tracks closing
# // if a closing !== opening
# // return false
