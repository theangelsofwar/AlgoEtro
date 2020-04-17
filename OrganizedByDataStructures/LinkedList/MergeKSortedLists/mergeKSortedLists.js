/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
//main function
//use of divide and conquer/PQ
const mergeKLists = (lists){
  if(lists.length ===0){
    return null;
  }
  while(lists.length>1){
    //length of lists is dynamically shrinking as an interval is expanding
    let a = lists.shift(); //remove the first 2 elements
    let b = lists.shift();
    const h = mergeLists(a,b);
    lists.push(h);
  }
  //list length is 1, interval merged, single element linkedList in the array
  return lists[0];
};

const mergeLists= (a, b) => {
  const result = new ListNode(0);//store result
  let temp = result; //current node
  while(a !==null && b !== null){
    if(a.val < b.val){
      temp.next = a;
      a=a.next;
    } else {
      temp.next = b;
      b = b.next;
    }
    temp = temp.next;
  }
  if(a !==null){ temp.next = a; }
  if(b!==null){ temp.next = b; }
  return result.next; //the next end of the head node is returned
}
