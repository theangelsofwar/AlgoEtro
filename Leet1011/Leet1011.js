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
4th day: 1, 1} weights 
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
    
    var c; //c is the discrete minimum between the average Capacity per the day over D days, so the next discrete level up (all positive ints)
    
    //on a given day, take from weights[i] up until (including) weights[i+k]... and track a global max, 
    
    //to optimize the spread we want want the Capacity c to be > largest element of the array(depending on the range of positives), and with the least additions based on the spread range of D days, to do this we can grab the average
    var wacc = Math.floor(weights.reduce((a,b) => a+b, 0)/D);
    //we want to take the working average of the total Absolute Capacity of the boxed elements across D days, a,d we must surpass it by a little discrete amount or meet it exactly on a given day t=i....D Days.
    //a weighted average
    //the issue with avg is outliers, eg 1 extreme weight, in which case that would be usually the capacity and taken as 1 item on the trip, distributing the rest, so we could compare median to mean...
    //we do not need to necessary know the median, 
    c = wacc; //initialize it to wacc...because you will see...
    
    var localCapacity = weights[0]; //start out
    //try to avoid iterative through the weights array multiple times, track that index stored and the capacity Math.max
    let index = 1; 
    for(let t=0; t<D && index<weights.length; t++){
        //bi conditional, based on D days but constrained by array of weights as well
        let el = weights[index]; //element enxt on the queue
        //p = D-t days left to complete everything...
        //we must factor in the days left as part of a weighted avg
        //must factor remaining days as well as the average across because discrete logic.
        if(localCapacity+el<wacc) {
            //take it, and we stay on the current day, therefore
            localCapacity+=el; //accumulation of the account...
            index++; //rise of the indexed fund on weights
            t--; //stay on the current day, offset t++

        }
        else {
            //leave it on the iteration day t of D days, and empty localCapacity
            //do another check first, if unassigned, since wacc is a non discrete number, but our result must be discreet, do not leave room for coicidence...
            //we must check again based on not the wacc, but now based on what we have saved to c in the store
            //we might have to move back an index-- this time while moving forward a day t++
            // take out && c===wacc because that is probable on coincidence
            if(localCapacity+el>=c && t===0){
                //this is a maximization at the same time it is a minimization, we want to output the minimum weight per day to meet D days requirements, but we also must keep track of the maximum of the days to fulfill the shipping requirements in our trade war with China. 
                //if it is greater than, we can leave it for the next day, because it is still created than wacc, which means the next discrete number day has enough days left...
                localCapacity += el;
                index++; //go back a day for next capacity, leave it
                c = Math.max(localCapacity, c);

            }
            else {
                c = Math.max(localCapacity, c);
                index--;
                localCapacity = el; //next element for the next day with incrementing t, 
            }
            //day will increment and continue;t++ into the next day
        }
    }
    //do one check to compare localCapacity
        // c= Math.max(c, localCapacity);
        
        //we can do a take it or leave it, with recursive backtracking, but this is less efficient...
        //what are we optimizing? what are the constraints?
        //getting the minimum capacity by spreading it evenly through D days, with unequal, uncertain amounts
    //graph it out! :D
    return c;
};