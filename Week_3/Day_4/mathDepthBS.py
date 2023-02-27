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
    def depthCounter(root, depth):
        if not root: return depth
        return max(depthCounter(root.left, depth + 1), depthCounter(root.right, depth + 1))
                    
    return depthCounter(root, 0)

# if not root: return 0
    # return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))