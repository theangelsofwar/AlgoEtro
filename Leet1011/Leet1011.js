/**
 * 
 * @param {A conveyor belt has packages that must be shipped from one port to another within D days.

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
1 <= weights[i] <= 500} weights 
 * @param {*} D 
 */
/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function(weights, D) {
  //input check
  if(!weights || !D || D<0) return -1;
  //see my diagram in my blog...
  //sliding windows spliced....
  //array splice method recursive base case solve..
  
  
  //revese of stock price buy sell or knapsack or stairs...
  //essentially, this is like a reverse average, so we want to split the intervals approximately evenly by their sum..
  
  //the brute force way is to get the sum, get the average weight capacity, 
  
  //best way is to graph on x and y axis, x axis is time Day t=0..D with D Days as the block constraint, and y axis is the sum of the set of graphed weights that can be pushed to the prior day, taken for the current day, or saved for the next day within the constraint of D Days,
  //D days is a block constraint, while the y axis for Capacity on a given day can vary
  //send back the capacity
  
  let c = 0;
  
  //on a given day, take from weights[i] up until (including) weights[i+k]... and track a global max, 
  
  //to optimize the spread we want want the Capacity c to be > largest element of the array(depending on the range of positives), and with the least additions based on the spread range of D days, to do this we can grab the average
  let avg = weights.reduce((a,b) => a+b, 0)/weights.length;
  //the issue with avg is outliers, eg 1 extreme weight, in which case that would be usually the capacity and taken as 1 item on the trip, distributing the rest, so we could compare median to mean...
  //we do not need to necessary know the median, 
  let localCapacity = 0;
  //try to avoid iterative through the weights array multiple times, track that index stored and the capacity Math.max
  let index = 0; 
  for(let t=0; t<D; t++){
      let el = weights[index]; //element enxt on the queue
      if(localCapacity+el<avg){
          //take it, and we stay on the current day, therefore
          t--; //stay on the current day
          localCapacity+=el; //accumulation of the account...
          index++; //rise of the indexed fund
      }
      else{
          //leave it on the iteration day t of D days, and empty localCapacity
          c = Math.max(localCapacity, c);
          localCapacity = 0;
          //day will increment and continue;
      }
      //do one check to compare localCapacity
      c=Math.max(c, localCapacity);
      
      //we can do a take it or leave it, with recursive backtracking, but this is less efficient...
      //what are we optimizing? what are the constraints?
      //getting the minimum capacity by spreading it evenly through D days, with unequal, uncertain amounts
  }
  
  return c;
};