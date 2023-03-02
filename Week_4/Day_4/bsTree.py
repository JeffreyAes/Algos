# Definition for a binary tree node.
# function TreeNode(val, left, right) {
#     this.val = (val===undefined ? 0 : val)
#     this.left = (left===undefined ? null : left)
#     this.right = (right===undefined ? null : right)
#
#
#
# @param {TreeNode} root
# @return {TreeNode}
#
# Given the root of a binary tree, invert the tree, and return its root.
#
# https://leetcode.com/problems/invert-binary-tree/
# Solution: https://youtu.be/OnSn2XEQ4MY

# do inside of leetcode
def invertTree(root):
    """
    do in leetcode: https://leetcode.com/problems/invert-binary-tree/
    :type root: TreeNode
    :rtype: TreeNode

    if root:
            temp = root.left
            root.left = root.right
            root.right = temp
            Solution.invertTree(self, root.left)
            Solution.invertTree(self, root.right)
        return root
    """

# * Definition for a binary tree node.
# * function TreeNode(val, left, right) {
# *     this.val = (val===undefined ? 0 : val)
# *     this.left = (left===undefined ? null : left)
# *     this.right = (right===undefined ? null : right)
# * }
# *
# * @param {TreeNode} root
# * @return {number}
# *
# * Given the root of a binary tree, return its maximum depth.
# *
# * A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
# *
# * https://leetcode.com/problems/maximum-depth-of-binary-tree/
# * Solution: https://youtu.be/OnSn2XEQ4MY


# Do on leetcode https://leetcode.com/problems/maximum-depth-of-binary-tree/
def maxDepth(root):
    """
    do in leetcode: https://leetcode.com/problems/invert-binary-tree/
    :type root: TreeNode
    :rtype: int

    if not root: 
         return 0
    return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))
    """
