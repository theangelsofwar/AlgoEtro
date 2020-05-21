/**
 * 
 * Say you have an array prices for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

Example 1:

Input: [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
             Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Example 2:

Input: [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
             Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
             engaging multiple transactions at the same time. You must sell before buying again.
Example 3:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
 */



/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // array of prices
  //unlimited number of trades/transactions in the duration
  
  //cannot have mulitple same day transactions
  
  
  //tactic : you either buy the lowers marginal difference, or you sell the highest margin of your current stock portfolio,
  
  //essentially, calculate the max profits between your portfolio, if it doesn't exist, you should still buy, 
  // if it does exist, only filter through any net positives, and 
  
  //can you predict history prices/history to presume volatility
  
  
  // if the array is only like a week, backtrack greedy dynamic program using recursion functional program
  //sliding window dynamic programming
  
  //range of profit optimizations
  
  
  //never buy on last day of the trade
  
  
  //if it is a decreasing interval, you never at all, return 0
  
  
  //if it's just a single increasing interval, 
  
  //only buy on day 1, sell on the last day
  
  
  // it is inefficient to check the interval being sorted, therefore we assume that every two consecutive transactions is just one very small interval between buying/selling sorts
  
  let profit = 0;
  //two pointers, slide the window between local min and max, buy on local min, sell on local max
  
  //never buy the last one, 
  
  //this is all the same as 1 stock in a time series data
  
  // recursively shrink the array until it's length is 1 or 0
  
  //have a running closure for the result, backpack scoped, 
  
  let localMinima = Infinity; //always set the bar as polar opposite
  
  let currentProfit = 0;
    
  
  for(let i=0; i < prices.length; i++) {
    let localProfit = prices[i] - localMinima; 
    if (localProfit < currentProfit) {
        profit += currentProfit; //dynamic
        currentProfit = 0;
        localMinima = Infinity;
    }
    if (prices[i] < localMinima) localMinima = prices[i]; //found a lower min value to buy 
    if (localProfit > currentProfit) {
      currentProfit = localProfit; 
    } //localprofit, we do not need to track the indexes of buy and sell
    
  }
  if (currentProfit>0){
   profit += currentProfit; 
  }
  
  return profit;
};