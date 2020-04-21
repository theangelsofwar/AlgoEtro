/** Leet #213
 * You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

Example 1:

Input: [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2),
             because they are adjacent houses.
Example 2:

Input: [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
             Total amount you can rob = 1 + 3 = 4. */

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  //have an even counter and odd counter optimization
  //Greedy Alogorithm
if(!nums || nums===null || nums.length===0) {
  return 0;
}
else if(nums.length===1) {
  return nums[0];
}
  
var oddSum = 0;     
let oddCounter = 1;
var evenSum = 0;
let evenCounter = 0;

while(oddCounter < nums.length && evenCounter < nums.length) {
    oddSum = oddSum + nums[oddCounter];
    evenSum = evenSum + nums[evenCounter];
  
    oddCounter = oddCounter + 2;
    evenCounter = evenCounter +2;
    //take use of javascripts looping index out of bounds
}
  //0 is false, so if odd, we take out the end on the even counter
 
if(!nums.length%2) {
    //cannot take adjacent end of list and the first element, 
    if(nums[0]>nums[nums.length-1]) { 
      evenSum = evenSum-nums[nums.length-1];
    } 
    else {
      evenSum= evenSum-nums[0];
    }
}

if(evenSum>=oddSum) {
  return evenSum;
} 
else {
  return oddSum;
}


};