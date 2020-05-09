//


let oldSport = function(profits, weights, capacity) {
  function oldSportRecursive(profits, weights, capacity, currentIndex) {
    if(capacity <= 0 || currentIndex >= profits.length) return 0;

    let profitTake = 0; //take it or leave it greedy algorithm
    if (weights[currentIndex] <= capacity) {
      profitTake = profits[currentIndex] + oldSportRecursive(profits, weights, capacity - weights[currentIndex], currentIndex +1);
    }


    let profitLeave = oldSportRecursive(profits, weights, capacity, currentIndex + 1);


    return Math.max(profitTake, profitLeave);
  }


  return oldSportRecursive(profits, weights, capacity, 0); //recursive closure but return the invocation, so it's a higher order function
};




var profits = [1,6,10,16];
var weights = [1,2, 3, 5];


console.log(oldSport(profits, weights, 7));

console.log(oldSport(profits, weights, 10));