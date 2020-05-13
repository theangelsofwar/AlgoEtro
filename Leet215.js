// Angels of War
/**
 * Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Example 1:

Input: [3,2,1,5,6,4] and k = 2
Output: 5
Example 2:

Input: [3,2,3,1,2,4,5,5,6] and k = 4
Output: 4
Note:
You may assume k is always valid, 1 ≤ k ≤ array's length.
 */

 /**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  //kth largest, dynamic programming, sliding window
  
  //brute: we can sort and get the 3rd largest from the end, sort in O(nlogn) with merge sort, quicksort, or radix sort
  
  //instead, we can have a running tracker of top three largest, starting with the first k elements of the array
  
  if(!nums || nums.length < k || k<0 || nums.length === 0) {
    return;

  }
  
  let kArr = [];
  //this could be a heap, we will sort from largest to smallest
  
  
  for(let i=0; i<nums.length; i++) {
    let el = nums[i];
    if(kArr.length===0){
      kArr.push(el);
    }
    else if(kArr.length < k){
      // kArr.push(el);
      //add it to the relative elements
      let isValid = false;
      for(let j=0; j<kArr.length && !isValid; j++) {
        let elk = kArr[j];
        if(elk>el) { 
          //we can continue
          continue;
        }
        else if(elk<=el ) {
          //we must shift this element down, possibly cut out if k length
        //we have found the place to shift, after the shift we can escape for loop by making valid
          let temp = elk;
          kArr[j] = el;
          for(let p=j+1; p<kArr.length; p++) {
            let current = kArr[p];
            kArr[p] = temp;
            temp = current; //outer scope, 
          }
          isValid = true; //exit for loop outer
          
        }
      }
    }
    else {
      //shift the other elements, arrange them
    }
  }
   //or kArr.pop();
  return kArr[k-1];
  
  
};