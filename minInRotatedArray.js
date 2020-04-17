/**
 * Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

Find the minimum element.

You may assume no duplicate exists in the array.

Example 1:

Input: [3,4,5,1,2] 
Output: 1
Example 2:

Input: [4,5,6,7,0,1,2]
Output: 0
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  //approach 1: iterate array until the element previous is greater than the current element, return current element;
  
  if(!nums || nums===null || nums.length===0){ return nums; }
  else if(nums.length===1){ return nums[0]; }
  for(let i = 1; i< nums.length; i++){
      let el = nums[i]; //until last, but we will start at index 1
      if(el<nums[i-1]){
          return el; //we found the pivot, and therefore the min
      }
  }
  //if we have traversed the entire array and have not found a pivot(about the min), 
  //then it had no pivot
  return nums[0];
};
