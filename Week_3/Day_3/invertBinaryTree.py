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
  # Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def invertTree(self, root):
        if root:
            temp = root.left
            root.left = root.right
            root.right = temp
            Solution.invertTree(self,root.left)
            Solution.invertTree(self, root.right)
        return root