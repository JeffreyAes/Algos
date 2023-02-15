// i already did this one >:D

/**
 * @param {string} s
 * @return {boolean}
 * 
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * 
 * 
 * An input string is valid if:
 * 
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 * 
 * https://leetcode.com/problems/valid-parentheses/
 * solution: https://youtu.be/WTzjTskDFMg
 */

// tip: try to use a stack to store data

const s1 = "()"
const expected1 = true

const s2 = "()[]{}"
const expected2 = true

const s3 = "(]"
const expected3 = false

var isValid = function (s) {
    let stack = [];
    let closingTag = { ')': '(', ']': '[', '}': '{' }
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
};

console.log(isValid(s1))
console.log(isValid(s2))
console.log(isValid(s3))