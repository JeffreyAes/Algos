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
 * @return {TreeNode}
 * 
 * Given the root of a binary tree, invert the tree, and return its root.
 * 
 * https://leetcode.com/problems/invert-binary-tree/
 * Solution: https://youtu.be/OnSn2XEQ4MY
 * 
 * 
 */

// do inside of leetcode
var invertTree = function (root) {
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(root) {
        temp = root.right
        root.right=root.left
        root.left = temp
        invertTree(root.right)
        invertTree(root.left)
    }
    return root
    
};

};