// leet # 23
/**
Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

Example:

Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6 
*/

//Option 1
function mergeLists(a, b){
  const dummy = new ListNode(0);
  let temp = dummy;
  while(a !== null && b !== null) {
    if(a.val < b.val){
      temp.next = a;
      a = a.next;
    } else {
      temp.next = b;
      b = b.next;
    }
    temp = temp.next;
  }
  if(a !== null){
    temp.next = a;
  }
  if( b!== null){
    temp.next = b;
  }
  return dummy.next;
}

var mergeKLists = function(lists){
  if(lists.length === 0){
    return null;
  }

  while(lists.length > 1){
    let a = lists.shift();
    let b = lists.shift();
    const h = mergeLists(a, b);
    lists.push(h);
  }

  return lists[0];
};

//second, divide and conquer
function merge(left, right){
  if(!left){
    return right;
  } else if(!right){
    return left;
  } else if(left.val < right.val){
    left.next = merge(left.next, right);
    return left;
  } else {
    right.next = merge(left, right.next);
    return right;
  }
}

function helper(lists, start, end) {
  if(start === end) {
    return lists[start];
  } else if (start < end) {
    const mid = parseInt((start+end)/2);
    const left = helper(lists, start, mid);
    const right = helper(lists, mid+1, end);
    return merge(left, right);
  } else {
    return null;
  }
}
var mergeKLists = function(lists){
  return helper(lists, 0, lists.length-1);
};