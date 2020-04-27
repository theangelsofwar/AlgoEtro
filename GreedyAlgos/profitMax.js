//stock prices profic 
//temporal array of prices

//one purchase and one sale only in 1 day

const profitMax = (prices) => {
  if(!Array.isArray(prices)) {
    return;
  }

  if(prices.length<2){
    return; 
  }


  let minPrice = prices[0];
  let maxProfit = prices[1] - minPrice;
  //trail the dragon...
  for (let i = 1; i < prices.length; i++ ){
    const currentPrice = prices[i];
    const potential = currentPrice - minPrice;

    maxProfit = Math.max(maxProfit, potential);

    minPrice = Math.min(minPrice, currentStockPrice);
  }


  return maxProfit;
};



module.exports = profitMax;