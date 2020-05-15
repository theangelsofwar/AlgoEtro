/**
 * You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

Example 1:

Input: coins = [1, 2, 5], amount = 11
Output: 3 
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Note:
You may assume that you have an infinite number of each kind of coin.
 */

 /**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  
  
  if(!amount || amount === 0) return 0;
  //create caching local memory
  
  let result = 0;
  for(let i=coins.length-1; i>=0; i--) {
    let el = coins[i];
    if(el<=amount) {
      let multiple = Math.floor(amount/el); //truncated int
      result+=multiple;
      amount/=(el)*multiple;
    }
    
  }
  if(amount!==0) {
    return -1;
  }
  return result;
  
  
  
  
}