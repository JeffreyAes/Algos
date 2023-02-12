/**
 * @param {string} s
 * @return {boolean}
 * 
 * 
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

 */

const s1 = "()"
const expected1 = true

const s2 = "()[]{}"
// Output: true

const s3 = "(]"
// Output: false

// Constraints:
// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

var isValid = function (s) {
    let stack = [];
    let closingTag = { ')': '(', "]": "[", '}': '{' }
    for (c in s) {
        if (s[c] in closingTag) {
            if (stack && stack[stack.length - 1] === closingTag[s[c]]) {
                stack.pop()
            }
            else {
                return false
            }
        } else {
            stack.push(s[c])
        }
    }
    if (stack.length === 0) {
        return true
    }
    return false
}

// create two pointers, one at the first index (tracks openings)
// second pointer tracks closing
// if a closing !== opening
// return false

console.log(isValid(s1))
console.log(isValid(s2))
console.log(isValid(s3))