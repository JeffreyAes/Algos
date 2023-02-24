# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        self.maxD = 0
        self.findMaxDiam(root)
        return self.maxD
    
    def findMaxDiam(self, root):
        if not root: return 0
        left = self.findMaxDiam(root.left)
        right = self.findMaxDiam(root.right)
        diameter = left + right
        self.maxD = max(self.maxD, diameter)
        return max(left, right) + 1