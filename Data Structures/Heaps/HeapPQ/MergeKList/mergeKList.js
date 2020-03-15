//use of Min Heap for merge K sorted Linked Lists
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */// Leet 
function build_min_heap(A, arr_length, i){
  const l = 2*i+1, r=2*i+2;
  if(l<arr_length){
    build_min_heap(A, arr_length, l);
  }
  if(r<arr_length){
    build_min_heap(A, arr_length, r);
  }
  min_heapify(A, arr_length, i);
}
/**
 * 
 * @param {*} A lists Array of Linked Lists Nodes
 * @param {*} arr_length K Linked Lists
 * @param {*} i the index is the current Linked List head node
 */
function min_heapify(A, arr_length, i){
  //i is building with the index, A is lists array of Linked Lists Nodes
  //a heap is built keeping track of the smallest, while keeping track of left and right siblings like a horizontal binary tree
  const l=2*i+1, r=2*i+2, smallest=i; //taking the array lists and making it become geometric into a tree structure
  if(l<arr_length && A[l].val < A[smallest].val){
    smallest = l;
  }
  if(r<arr_length && A[r].val < A[smallest].val){
    smallest = r;
  }
  if(smallest !==i){
    swap_in_array(A, i, smallest);
    min_heapify(A, arr_length, smallest);
  }
}

function swap_in_array(A, i, j){
  let temp = A[i];
  A[i] = A[j];
  A[j] = temp;
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists=function(lists){
   if(!lists.length){
     return null;
   }
   let result = null;
   let tail = null;
   for(let i = 0; i< lists.length; i++){ //simply a validation check
     if(lists[i] === null){
       lists[i] = new ListNode(Number.POSITIVE_INFINITY);
     }
   }
   build_min_heap(lists, lists.length, 0); //build a min heap starting around the head of the first Linked List
   let rootValue = lists[0].val;
   while(isFinite(rootValue)){
     if(result === null){
       result = new ListNode(rootValue);
       tail=result; //re-sorting the linked list
     }
     else{
       tail.next = new ListNode(rootValue);
       tail = tail.next;
     }
     lists[0] = lists[0].next;
     if(lists[0] === null){
       lists[0] = new ListNode(Number.POSITIVE_INFINITY);
     }
     min_heapify(lists, lists.length, 0);
     rootValue = lists[0].value;
   }
   return result;
 };
