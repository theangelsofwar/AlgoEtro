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


# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def mergeKLists(self, lists):
        """
        :type lists: List[ListNode]
        :rtype: ListNode
        """
        if not lists: return 
        n = len(lists)
        if n == 1: return lists[0]
        mid = n//2
        left = self.mergeKLists(lists[:mid])
        # print(left)
        right = self.mergeKLists(lists[mid:])
                
        return self.merge(left, right)
    
    def merge(self, left, right):
        dummy = ListNode(0)     
        cur = dummy
        while left and right:
            if left.val <=right.val:
                cur.next = left
                left = left.next
            else:
                cur.next = right
                right = right.next
            cur=cur.next
            
        if left:
            cur.next = left
        if right:
            cur.next = right
        return dummy.next

""" Solution 2
Merge with Divide and Conquer
O nlogk time, O(1) space

"""
# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object): 
    def mergeKLists(self, lists):
        """
        :type lists: List[ListNode]
        :rtype: ListNode
        """
        amount = len(lists)
        interval = 1
        while interval < amount:
            for i in range(0, amount - interval, interval * 2):
                lists[i] = self.merge2Lists(lists[i], lists[i + interval])
                interval *= 2
        return lists[0] if amount > 0 else lists

        
    def merge2Lists(self, l1, l2):
        head = point = ListNode(0)
        while l1 and l2:
            if l1.val <= l2.val:
                point.next = l1 #order the node relative position
                l1 = l1.next
            else:
                point.next = l2
                l2 = l1
                l1 = point.next.next
                point = point.next 
        if not l1:
            point.next=l2
        else:
            point.next=l1
        return head.next