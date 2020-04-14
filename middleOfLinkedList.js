/**
 * Given a non-empty, singly linked list with head node head, return a middle node of linked list.
 * If there are two middle nodes, return the second middle node.
 * //Leet 30 Day Chellenge 
 * 
 * 
 * Input: [1,2,3,4,5]
 * Output: Node 3 from this list (Serialization: [3,4,5])
 * The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
 * Note that we returned a ListNode object ans, such that:
 * ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.
 * 
 * Input: [1,2,3,4,5,6]
 * Output: Node 4 from this list (Serialization: [4,5,6])
 * Since the list has two middle nodes with values 3 and 4, we return the second one.
 * 
 * 1<=n<=100
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
var middleNode = function(head) {
    
  if(head===undefined || head===null){
      return;
  }
  else if(head.next===null){
      return head;//head is the result, the middle
  }
  
  let currentNode=head;
  let i=0;
  let doublerNode=head;
  let j=i*2;
  while(doublerNode && doublerNode!==null){
      //essentiallly, we have a fast and slow, but the fast counters needs to be double the length
      //for a case that it is even length, that double/2 is the one of the right           //because of 0 indexing
      //migrate doubleNode to the position j by moving i-1 spaces
      i++;
      j=i*2; //the length index,
      for(let c=i;c<=j;c++){
          if(doublerNode===null || doublerNode.next===null){
              if(c%2!==0){
                  return currentNode; //we have surpassed the middle, return the                       //current middle
              }
              else{
                  return currentNode.next;
              }
          }
          doublerNode=doublerNode.next;
      }
      currentNode=currentNode.next;
  }
  //doing this is good for not only getting the middle of the node and the length     //of the list, it is also good for mergesorts/binary searches of linked lists       //and unchaining
  
  return currentNode;
  
};
 module.exports = middleName;
