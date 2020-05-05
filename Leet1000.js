/**
 * There are N piles of stones arranged in a row.  The i-th pile has stones[i] stones.

A move consists of merging exactly K consecutive piles into one pile, and the cost of this move is equal to the total number of stones in these K piles.

Find the minimum cost to merge all piles of stones into one pile.  If it is impossible, return -1.

 

Example 1:

Input: stones = [3,2,4,1], K = 2
Output: 20
Explanation: 
We start with [3, 2, 4, 1].
We merge [3, 2] for a cost of 5, and we are left with [5, 4, 1].
We merge [4, 1] for a cost of 5, and we are left with [5, 5].
We merge [5, 5] for a cost of 10, and we are left with [10].
The total cost was 20, and this is the minimum possible.
Example 2:

Input: stones = [3,2,4,1], K = 3
Output: -1
Explanation: After any merge operation, there are 2 piles left, and we can't merge anymore.  So the task is impossible.
Example 3:

Input: stones = [3,5,1,2,6], K = 3
Output: 25
Explanation: 
We start with [3, 5, 1, 2, 6].
We merge [5, 1, 2] for a cost of 8, and we are left with [3, 8, 6].
We merge [3, 8, 6] for a cost of 17, and we are left with [17].
The total cost was 25, and this is the minimum possible.
 

Note:

1 <= stones.length <= 30
2 <= K <= 30
1 <= stones[i] <= 100
 */

 /**
 * @param {number[]} stones
 * @param {number} K
 * @return {number}
 */
var mergeStones = function(stones, K) {
    //combine sliding window shift
  if(!K || !stones || !Array.isArray(stones) || stones.length===0 || K<0) {
    return -1;
  }
  else if((stones.length+1)%K!==0 && K!==2) {
    return -1;
  } 
  else {
    return acquisitions(stones, K, 0); //hoisted function
  }
  
  // var result = 0;
  //sum of K consecutive additions in (stones.length+1)/K merges....
  //O((N+1)/K*)
  //number of merges needed to combine
  //time complexity
  
  
  //space complexity:
  
  ///window slide-greedy, take it or leave it, dynamic programming
  
  
  
  
  // for(let i = 0 ; i < stones.length; i++) {
  //   let checkSum 
  // } //use recusion while loop
  
  // use reduce with a take it or leave it callback function

  //
  
  //the runtime loks bad, but actually it isnt because of dynamic programming 
  // return stones.reduce((acc, current) => {
  //   //use of unshift, splice,
  //   var minSum= Math.sum(stones.slice(0, K));
  //   let indexTrack = 0;
  //   for(let i = K-1; i <stones.length; i++) {
  //     let currSum= Math.sum(stones.slice(i, i+K));
  //     if(currSum<minSum){
  //       indexTrack = i;
  //       minSum=currSum;
  //     }
  //   }
  //   stones.splice(indexTrack, indexTrack+K); //smaller subproblem array
  //   return minSum;
  // }, 0)
  
  // return result; 
};


var acquisitions = function(stones, K, acc) {
  if(stones.length ===0 ) {
    return acc; //done
  }
  let arr = stones.slice(0, K);
  let minSum = arr.reduce((a, currentvalue) => a + currentvalue, 0);
    let indexTrack = 0;
    for(let i = K-1; i <stones.length; i++) {
      let currSum= stones.slice(i, i+K).reduce((a, b) => { 
        return a+b; 
      }, 0)
      if(currSum<minSum){
        indexTrack = i;
        minSum=currSum;
      }
    }
    // stones=stones.splice(indexTrack, indexTrack+K); //smaller subproblem array, immutable
  return acquisitions(stones.splice(indexTrack, indexTrack+K), K, minSum + acc);
  } 