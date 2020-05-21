/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
  if(!prices || prices.length <2){
      return 0; //cannot buy or no buy/sell can occure
  }
  let buy = true;
  let sell = !buy;
  
  let pMax=0;
  
  //extremety cases, no voltility(constant up or down in candle interval)
  //downwards, never buy or sell, upwards only buy first day and sell last
  //short circuit these conditions
  //we can use reduce compare the differences, if any consecutive element is not increasing or decreasing we breakout
  let localMax=0;
  let minBuyIndex;
  let maxSellIndex; // make this an intial undefined, track indexes within mini windows of the stock prices graph
  for(let i=0; i<prices.length-1; i++) {
      let el=prices[i];

      if(buy) {
          //compare the mini profits in betwee, the next buy sell interval
          //in a buy window, compare the minimum
          if(!minBuyIndex){
              //short circuit for undefined
              minBuyIndex = i;
              
          }
          else if(el<prices[minBuyIndex]) {
              //add back the buy from the last min and subtract off the current Index price
              localMax+=prices[minBuyIndex];
              localMax-=el;
              minBuyIndex = i;
          }
          
          
          // buy = false;
          // sell = !buy;
      }
      else if(sell) {
          if(!maxSellIndex){
              maxSellIndex = i;
              localMax+=el;

          }
          else if(el>prices[maxSellIndex]) {
              localMax+=el;
              maxSellIndex = i;
          }
          else{
              //it is less than max, we do not add it
          }
          
          pMax = Math.max(pMax, localMax);//only compare the two on a sell
          //reset toggle buy sell, but also reset their indices to buy sell
          minBuyIndex = undefined;
          minSellIndex = undefined; //new buy sell cycle
          // buy = true;
          // sell = !buy;
      }
      buy = !buy; //toggle based on changes
      sell = !buy;
  } 
  
  //final check if we are at toggle for the sell is true, then we sell that last day of index i on the last day of the interval, candlestick method
  if(sell){
      pMax+=prices[prices.length-1];
  }
  
  
  return pMax;
};