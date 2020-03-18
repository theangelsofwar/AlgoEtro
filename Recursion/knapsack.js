//Brute force recursion asymptotic O(2^n)
const solveKnapsack = (profits, weights, capacity) => {
  //having a closure inner function scope
  const knapsackRecursive=(profits, weights, capacity, currentIndex)=>{
    if(capacity <= 0 || currentIndex >=profits.length) return 0;
    let profit1=0;
    if(weights[currentIndex] <=capacity){
      profit1=profits[currentIndex] + knapsackRecursive(profits, weights, capacity-weights[currentIndex], currentIndex+1);
    }
    const profit2= knapsackRecursive(profits, weights, capacity, currentIndex+1);
    return Math.max(profit1, profit2);
  }
  return knapsackRecursive(profits, weights, capacity, 0);
};

const profits =[1,6,10,16];
const weights = [1,2,3,5];
console.log(`Total knapsack profit:--> ${solveKnapsack(profits, weights, 7)}`);
console.log(`Total knapsack profit: --> ${solveKnapsack(profits, weights, 6)}`);