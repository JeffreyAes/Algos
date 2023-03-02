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
 */

// do inside of leetcode
var invertTree = function (root) {
    // do in leetcode: https://leetcode.com/problems/invert-binary-tree/
    if (root) {
        temp = root.right
        root.right = root.left
        root.left = temp
        invertTree(root.right)
        invertTree(root.left)
    }
    return root
};

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
 * 
 * Given the root of a binary tree, return its maximum depth.
 * 
 * A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 * 
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * Solution: https://youtu.be/OnSn2XEQ4MY
 */
var maxDepth = function (root) {
    // Do on leetcode https://leetcode.com/problems/maximum-depth-of-binary-tree/
    let depth = 0
    depthCounter(root)
    function depthCounter(root, listDepth = 1) {
        if (!root) {
            return
        }

        if (listDepth > depth) {
            depth = listDepth
        }


        depthCounter(root.left, listDepth + 1)
        depthCounter(root.right, listDepth + 1)
    }

    return depth
};