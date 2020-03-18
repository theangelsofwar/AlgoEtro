//O(numItems*capacity) time complexity
const solveKnapsack = (profits, weights, capacity) => {
  const dp = [];
  const knapsackRecursive=(profits, weights, capacity, currentIndex) => {
    if(capacity <= 0 || currentIndex >= profits.length) return 0;

    dp[currentIndex] = dp[currentIndex] || [];
    if(typeof dp[currentIndex][capacity] !=='undefined') {
      return dp[currentIndex][capacity];
    }
    let profit1=0;
    if(weights[currentIndex] <= capacity){
      //take it
      profit1 = profits[currentIndex] + knapsackRecursive(profits, weights, capacity - weights[currentIndex], currentIndex+1);
    }
    const profit2= knapsackRecursive(profits, weights, capacity, currentIndex+1);//leave it

    dp[currentIndex][capacity] = Math.max(profit1, profit2);
    return dp[currentIndex][capacity];
  }
  return knapsackRecursive(profits, weights, capacity,0);
};

const profits = [1,6,10,16];
const weights [1,2,3,5];
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 7)}`);
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 6)}`);
