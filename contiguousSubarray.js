/**
 * 581. Shortest Unsorted Continuous Subarray
Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.

You need to find the shortest such subarray and output its length.

Example 1:
Input: [2, 6, 4, 8, 10, 9, 15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
Note:
Then length of the input array is in range [1, 10,000].
The input array may contain duplicates, so ascending order here means <=.
 */

 /**
 * @param {number[]} nums
 * @return {number} length
 */
var findUnsortedSubarray = function(nums) {
  //   if(!nums || nums===null){
  //     return;
  //   }
  //   else if(nums.length<=1){
  //     return nums.length;
  //   }
    
  //   //nums array is at least of length 2
  //   let prevIndex = 0;
  //   let currentIndex = 1;
    
  //   var result = [];
  //   boolean triggered = false;
  //   while(currentIndex<nums.length) {
  //     let previousElement = nums[prevIndex];
  //     let currrentElement = nums[currentIndex];
  //     if(currrentElement<previousElement){
  //       //add to contiguous array
  //       triggered = true;
  //       result.push(currentElement); //start continuous
  //     }
  //     else if(triggered){
        
  //     }
  //     prevIndex = currentIndex++; //assign to the shift, then increment, 
  //   }
    
    
  //   return result.length;
    
    let start = 0;
    let end = 0;
    let max = 0;
    
    for( let i = 1; i< nums.length; i++) {
      if(nums[i] >= nums[max]) {
        max = i;
        if(start === end){
          start++;
          end++;
        }
      } else {
        end = i;
        while(start>0 && nums[end] < nums[start-1]) {
          start--;
        }
      }
    }
    return start == end ? 0 : end - start + 1;
    
    
  };