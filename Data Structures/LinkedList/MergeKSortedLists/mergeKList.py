""" Solution 1
O NlogK time , O(k) space
from Queue import PriorityQueue

class Solution(object):
  def mergeKLists(self, lists):
   
    # :type lists: List[ListNode]
    # :rtype: ListNode
  
    head = point = ListNode(0)
    q = PriorityQueue()
    for l in lists:
       if l: 
         q.put((l.val,1))
    while not q.empty():
      val, node = q.get()
      point.next = ListNode(val)
      pont = point.next
      node = node.next
      if node:
        q.put((node.val, node))
    return head.next
"""


""" Solution 2
Merge with Divide and Conquer
O nlogk time, O(1) space

"""
