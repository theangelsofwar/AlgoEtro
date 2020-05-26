// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, S) {
  // write your code in JavaScript (Node.js 8.9.4
  let result = 0;
  if(A.length<1){
      return result; //base case
  }
  //dymamic
  let runningSum = 0;
  for(let i=0; i<A.length; i++){
      let el = A[i];
      
      runningSum+=el;
  
      // if(el>S){
      //     continue;
      // }
      // else if(el===S){
      //     result++;
      // }
      // else {
          // remaining=S-el;
          //get left and right of S
          result+= solution(A.slice(0,i), S);
          result+= solution(A.slice(i+1), S);
      //}
  }
  if(Math.floor(runningSum/A.length)===S){
      result++;
  }
  
  
  return result;
  //solutionHelper(A,S,0, A.length-1);
}

// function solutionHelper(A,S, start, end){
//     if(start<=end){
//         return 0;
//     }
  
  
  
  
//     //take it or leave
  
//     let result = 0;
  
  
  
// }