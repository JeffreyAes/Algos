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
 * @return {boolean}
 */
var isBalanced = function (root) {
    if (!root) {
        return true
    }
    let flag = true;
    const balanceCount = (node, height) => {

        if (!node) {
            return 0;
        }

        const left_height = balanceCount(node.left, height + 1);
        const right_height = balanceCount(node.right, height + 1);

        if (Math.abs(right_height - left_height) > 1) {
            flag = false;
        }
        return Math.max(left_height, right_height) + 1;

    }
    balanceCount(root, 0)
    return flag;
};