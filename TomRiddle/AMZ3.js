/**
 * There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time. Given N, write a function that returns the number of unique ways you can climb the staircase. The order of the steps matters.
For example, if N is 4, then there are 5 unique ways:
1, 1, 1, 1
2, 1, 1
1, 2, 1
1, 1, 2
2, 2
What if, instead of being able to climb 1 or 2 steps at a time, you could climb any number from a set of positive integers X? For example, if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time.
 */

 //Permutations, unique ways climb stairs, reverse dynamic/functional program
//order matters

//use recursion
/**
 * 
 * @param {*} num  number of stairs
 * @return result number of ways with order into account
 */
 export const staircase = function(num) {
   //base case
   if(num <1){
     return 0;
   }
   else if(num === 1) return 1; //one way to move 1 step: 1
   else if(num === 2) return 2; //two ways to move 2 steps: 1 or 2 skip
   else {
     //um >2
     return 2 + staircase(num-1) + staircase(num-2);
     //will return the number before the recursive call results
   }
 
   //O(N!) runtime
  //  for(let i=0; i<num; i++){
  //    //same as fibonacci for each case
  //  }
 }


 /**
  * 
  * @param {*} num 
  * @param {*} options , eg the number of options to take the stairs eg skip 1 step, skip 2 steps, skip 5 stpes...etc
  */
 export const genericstaircase = function(num, options) {
   const dfs = Array(num+1).fill(0); //allocate array matrix graph
   //though this is not dfs, we are just calling it dfs because it is reverse dfs
   for(let i=1; i<=num; i++){
     let arkansas = 0;
     //fill in the dfs graph we created for cell exploration
     for(let j=0; j<options.length; j++){
       const option = options[j];

       if(i-option > 0) arkansas+= dfs([i-option]); //we do not need to actually map out the paths, just add the options of positive steps we can take
     }
     dfs[i] += arkansas;

     if(options.indexOf(i) !== -1) dfs[i] +=1;
   }
   //the last element is the sum path permutations total
   return dfs[dfs.length-1];
 }


 export default staircase;