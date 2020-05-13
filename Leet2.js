/**
 * 
 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    //two nodes backgrounds add, double pointers linked

  //must get the sum result, and or rereate the nodes, 
  
  //two parallel pointers while simultaneously traversing the nodes
  
  
  let result; //the tail
  
  //the result is a list node
  // return the recursive, then the recursive callstack is going to reverse
  
  
  //base case
  if(!l1 || !l2) {
    return;
  }
  else {
    result = new ListNode(l1.val+l2.val);
    let lsum = l1.val + l2.val;
    let carry=0; 
    if(lsum/10 > 0) {
      //if you must carry the 1
      //like a binary adder.....
      
      
    }
    if(l1.next){
      l1.next.val+=carry;
    }
    else if(l2.next){
      l2.next.val+=carry;
    }
    else{
      result.next = new ListNode(carry); //next tens place
    }
    //add the carry to l1.next.val or l2.next.val
    result.next = addTwoNumbers(l1.next, l2.next);
    return result; //if not this way, do it the reverse and sign reuslt to the recursive case, and the next to the current new ListNode with the values added, and return the entire datastructure rather than just a value;
  }

  return result;
};