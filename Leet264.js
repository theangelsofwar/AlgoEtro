/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  //memoize result to the closure context in case of repeats(similar to fib)
  
  var memo = {};
  //key: n, value: result of nth ugly number
  if(!n || n<=0){
      return;
  } 
  let result;
  
  if(memo[n]) {
      return memo[n];
  }
  
  //iterate a loop differently, instead we make the dependent variable n and the independet variable whether we have hit it or not, depending on the conditionals
  //we can subsequentially store all the results
  
  
  let current = 1; //the actual number
  let index = 0;
  //
  while(index<n){
      //conditionally increment index
      if(index === n){
          //"base case"
          result = current;
          return current;
      }
      else if(current===1){
          //we hit first
          index++;
          if(!memo[index]){
              memo[index]=current;//1 is mapped to 1
          }
          
      }
      else if(current===2) {
          index++; 
          if(!memo[index]){
              memo[index] = current;
          }
      }
      else if(current === 3){
          index++; 
          !memo[index] ? memo[index] = current : index+=0; //clockwork
      }
      else if(current<5){
          continue; //4, not counted
      }
      else if(current === 5){
          index++; //the third ugly number we hit
          if(!memo[index]){
              memo[index] = current;
          }
      }
      else if(current ===6){
          //after 5, we can begin to generalize the plethora of cases
          //we could use a helper recursive backtrack, but writing the cases out helps us to better understand what is really going on and the time complexity of this call stack
          index++;
          !memo[index] ? memo[index] = current : index+=0; //clockwork
      }
      else if(current<8){
          continue;
      }
      else if(current===8 || current === 9 || current === 10){
          index++;
          !memo[index] ? memo[index] = current : index+=0; //clockwork
      }
      else if(current <12){
          continue;
      }
      else if(current === 12){
          index++;
          !memo[index] ? memo[index] = current : index+=0; //clockwork

      }
      else {
          //2,3,5 factor multiples check for all
          
          //essentially imitating a filter and a reduce longhand to exemplify
          let filterable = current;
          let subsidiary;
          while(filterable > 0 && subsidiary!==filterable){
              let previousSubsidiary = filterable; //before
              if(filterable%2 === 0){
                  filterable/=2;
              }
              //inclusive OR check all logic gates
              if(filterable%3===0) {
                  filterable/=3;
              }
              if(filterable%5===0){
                  filterable/=5;
              }
              if(filterable%6 === 0){
                  filterable/=6;
              }
              if(filterable % 10 === 0){
                  filterable/=10;
              }
              if(filterable % 15 === 0){
                  filterable/=15;
              }
              if(filterable %60 === 0){
                  filterable/=60;
              }
              if(filterable === previousSubsidiary){
                  //if nothing has changed, none of them passed, and then if filterable is needs to break out of this loop
                  subsidiary = filterable;
              }
          
          }
          //the end of dividing every prime factor out should be one, if not
          if(filterable === 1){
              index++; //found another ugly number does not matter what it is
              (!memo[index]) ? (memo[index] = current) :  index+=0;
              //clockwork
          }
          //otherwise the current is not, we go to the next one...
      } 
      current++;
      //post increment op
      
      //unconditionally increment current
      
  }
  
  result = memo[n];
  
  return result;
};