/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    if (!root) {
        return 0
    }
    let maxD = 0
    const findMaxDiam = (node) => {
        if (!node) return 0
        let left = findMaxDiam(node.left)
        let right = findMaxDiam(node.right)
        maxD = Math.max(maxD, left + right)
        return Math.max(left, right) + 1
    }
    findMaxDiam(root)
    return maxD

};