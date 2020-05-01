# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def levelOrder(self, root):
        """
        :type root: TreeNode
        :rtype: List[List[int]]
        """
        if root is None: return []
        q = [[root]]
        for level in q:
          record = []
          for node in level:
            if node.left: record.append(node.left)
            if node.right: record.append(node.right)
          if record: q.append(record)
        return [[x.val for x in level] for level in q]