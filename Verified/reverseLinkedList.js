/**
 * Leet #206
 * Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/** easy, 93.5%
 * @param {ListNode} head
 * @return {ListNode}
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  //do this in place

if(!head || head===null) {
  return head;
}
else if(head.next===null) {
  return head;
}


var previousNode= null; //to make the head the new tail
var currentNode = head;
//O(n)
var temp = currentNode.next; //temp, goal is that new temp is head assigned last of the re-linking
while(currentNode!==null) {
  //as we move unidirectinally until the end of the chain
  //we swap the currentNodes next pointer with the previous whilst storing next pointer in temp
  
  
  temp = currentNode.next; // store temp;
  
  
  currentNode.next = previousNode; //reassign it to the previous
  
  previousNode = currentNode;  //to assign tail linking
  
  currentNode = temp; //the same thing as moving to currentNode.next
  
} 
//now the currentNode is head
head = previousNode;

return head;
};