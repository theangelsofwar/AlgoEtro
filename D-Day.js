/**
 * Leetcode # 1011. Capacity To Ship Packages Within D Days
845

27

Add to List

Share
A conveyor belt has packages that must be shipped from one port to another within D days.

The i-th package on the conveyor belt has a weight of weights[i].  Each day, we load the ship with packages on the conveyor belt (in the order given by weights). We may not load more weight than the maximum weight capacity of the ship.

Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within D days.

 

Example 1:

Input: weights = [1,2,3,4,5,6,7,8,9,10], D = 5
Output: 15
Explanation: 
A ship capacity of 15 is the minimum to ship all the packages in 5 days like this:
1st day: 1, 2, 3, 4, 5
2nd day: 6, 7
3rd day: 8
4th day: 9
5th day: 10

Note that the cargo must be shipped in the order given, so using a ship of capacity 14 and splitting the packages into parts like (2, 3, 4, 5), (1, 6, 7), (8), (9), (10) is not allowed. 
Example 2:

Input: weights = [3,2,2,4,1,4], D = 3
Output: 6
Explanation: 
A ship capacity of 6 is the minimum to ship all the packages in 3 days like this:
1st day: 3, 2
2nd day: 2, 4
3rd day: 1, 4
Example 3:

Input: weights = [1,2,3,1,1], D = 4
Output: 3
Explanation: 
1st day: 1
2nd day: 2
3rd day: 3
4th day: 1, 1
 

Note:

1 <= D <= weights.length <= 50000
1 <= weights[i] <= 500
 */

 /**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function(weights, D) {
  //a multiple sliding windows
  
  if(!weights || weights===null || !D || D===null || !Array.isArray(weights) || weights.length===0 || D===0 || D<weights.length) {
    return -1;
  }
  //weights are not ordered, 
  
  //how can we predct the value of the entire array? how can we do this dynamically?
  
  //we must do an array splice minimization,
  if(D===1){
    return weights.reduce((a,b) => {
      return a+b;
    }, 0);
  }
  
  let c;
  
  if(weights.length===1){
    return weights[0]; 
  }
 
  //idea: get the average of the sum(O(n))/ time ,
  //instead get a running averaege, programmatically
  c=weights[0];
  // for(let i = 1; i < weights.length; i++) {
    //sliding a window frame within timeframe D
    
  // }
  
  //programmatically alter the array until it has a length of D
  //but since arrays are immutable in nature, 
  //keep an index tracker..., Splice it up to D 
  //number of spliced segments
  let chunks = 1; //number of splits for days so far
  for(i=1; i<weights.length && chunks<D; i++) {
    
  }
  
  //other idea: have a merge sort, but for optimizing the window, not by rearragning elements, we have one merge one step ahead of the other chunk, eg chunk is a merge of 2 elements, the second is single spliced chunks, 
  
  
  return c; //at godspeed....
};