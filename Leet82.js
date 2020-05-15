/**
 * Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

Return the linked list sorted as well.

Example 1:

Input: 1->2->3->3->4->4->5
Output: 1->2->5
Example 2:

Input: 1->1->1->2->3
Output: 2->3

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
var deleteDuplicates = function(head) {
  if(!head || head===null || head.next===null) {
    return head;
  } 
  
  
  const headVal = head.val;
  while(head && head.next && head.val === head.next.val ) {
        //duplicates on the first, reassing head as the current
        head = head.next;
    if(head.val===headVal) {
          head = head.next; //last remaining
        }
  }
  let currentNode = head.next ? head.next : head;
  let previousNode = head;
  //three pointers
  
  while(currentNode && currentNode.next) {
    
    if (currentNode.val === currentNode.next.val){
      //unique distinct only 
      //unpoint/unlink
      
      currentNode = currentNode.next.next; //unchained both the duplicate and the original that has duplicate
      previousNode.next = currentNode;
      
    }
    else {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }
  
  return head;
  
};