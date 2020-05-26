// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(T, R) {
  // write your code in JavaScript (Node.js 8.9.4)
  //T is the test cases arrays
  //R is the results cases arrays strings
  //same length and corresponding test case, but we must group them
  if(!T || !R || !Array.isArray(T) || !Array.isArray(R) || T.length<1 || R.length<1){
      return;
  }
  
  let result = 0;
  let total = 0;
  let alpha = ['a','b','c','d','e','f','g'];
  //add rest later 
  
  let testIndex = 0; //number of the test
  let isGrouping = false;
  //use map and reduce 
  for(let i=0; i<T.length; i++) {
      let test = T[i];
      // let split1 = test.split(/(\d+)/)
      
      // let testgroup=split1[0];
      // let groupnum = split1[1];
      // let groupname = test.split()
      
      
      let res = R[i];
      //must be OK status
      
      //check grouping
      // if(split1.length>1){
      //     isGrouping=true;
      // }
      // else{
      //     isGrouping=false;
      // }
      
      if(res==="OK"){
          // if(isGrouping){
          //     continue; //must pass all until entire
          // }
          total++;
      }
      else{
          continue; //no need to add score
      }
  }
  
  result = Math.ceil(total/R.length*100);
  
  return result;
}